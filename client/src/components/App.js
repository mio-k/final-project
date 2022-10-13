import React, { useEffect, useState } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import DogList from "./DogList";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";
import NewDogForm from "./NewDogForm";
import User from "./User";
import YourProfile from "./YourProfile";
import Playdates from "./Playdates";
import Dog from "./Dog";
import Item from "./Item";
import EditItem from "./EditItem";
import StyleGallery from "./StyleGallery";
import Home from "./Home";

function App() {
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    // auto-login
    fetch("/authorized").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/items")
      .then((r) => r.json())
      .then((allItems) => setItems(allItems));
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
      console.log(prevItems);
      console.log(id);
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
          <Route path="doglist" element={<DogList />} />
          <Route path="/" element={<Home />} />
          <Route path="itemList" element={<ItemList items={items} />} />
          <Route
            path="newitemform"
            element={
              <NewItemForm onAddItem={onAddItem} user={user} tags={tags} />
            }
          />
          <Route path="playdates" element={<Playdates />} />
          <Route path="newdogform" element={<NewDogForm />} />
          <Route path="users/:id" element={<User />} />
          <Route path="dogs/:id" element={<Dog />} />
          <Route path="yourprofile" element={<YourProfile />} />
          <Route
            path="items/:id"
            element={<Item onDeleteItem={onDeleteItem} />}
          />
          <Route path="items/:id/edititem" element={<EditItem />} />
          {/* <Route path="styles" element={<StyleGallery />} /> */}
        </Routes>
        <Outlet />
      </main>
    </>
  );
}

export default App;
