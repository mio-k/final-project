import React, { useEffect, useState } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import DogList from "./DogList";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";
import NewDogForm from "./NewDogForm";
import YourProfile from "./YourProfile";
import Playdates from "./Playdates";
import PlaydateForm from "./PlaydateForm";
import Dog from "./Dog";
import Item from "./Item";
import EditItem from "./EditItem";
import EditDog from "./EditDog";
import Home from "./Home";
import { useDispatch } from "react-redux";
import { fetchItems } from "../redux/slices/itemsSlice";

function App() {
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // auto-login
    fetch("/authorized").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // Fetch Items into redux store when app loads
  useEffect(() => {
    const fetchItemsThunk = fetchItems();
    dispatch(fetchItemsThunk);
  }, []);

  useEffect(() => {
    fetch("/tags")
      .then((r) => r.json())
      .then((allTags) => setTags(allTags));
  }, []);

  function onAddItem(newItem) {
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
  }

  if (!user) return <Login onLogin={setUser} />;

  function onDeleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item) => {
        return item.id != id;
      });
    });
  }

  return (
    <>
      <NavBar user={user} setUser={setUser} />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="doglist" element={<DogList />} />
          <Route path="dogs/:id" element={<Dog user={user} />} />

          <Route path="itemList" element={<ItemList />} />
          <Route
            path="items/:id"
            element={<Item onDeleteItem={onDeleteItem} user={user} />}
          />
          <Route path="items/:id/edititem" element={<EditItem />} />
          <Route
            path="newitemform"
            element={
              <NewItemForm onAddItem={onAddItem} user={user} tags={tags} />
            }
          />
          <Route path="playdates" element={<Playdates user={user} />} />
          <Route path="playdateform" element={<PlaydateForm />} />

          <Route
            path="yourprofile"
            element={<YourProfile user={user} items={items} />}
          />
          <Route
            path="newdogform"
            element={<NewDogForm user={user} setUser={setUser} />}
          />
          <Route path="dogs/:id/editdog" element={<EditDog />} />
        </Routes>
        <Outlet />
      </main>
    </>
  );
}

export default App;
