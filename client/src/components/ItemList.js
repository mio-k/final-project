import React, { useState } from "react";
import Search from "./Search";
import Filter from "./Filter";
import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";

function ItemList() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const itemsArray = Object.values(
    useSelector((state) => state.items.entities)
  );
  function onChangeCategory(category) {
    setFilter(category);
  }
  const filteredList =
    filter === "All"
      ? itemsArray
      : itemsArray.filter((item) => {
          return item.tags.some((tag) => {
            return tag.category === filter;
          });
        });

  const filteredItems = filteredList.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="list">
      <h2>Free Dog Care Items</h2>
      <br />
      <p>
        Welcome to Dog Pod free item exchange! This is where you can post the
        dog care goods you no longer needs so others can use them.
      </p>
      <p>
        Did your dog grow out of a harness? Did the food you purchased recently
        didn't agree with your pup? Offer it to other members here!
      </p>
      <br />
      <Link to={`/newitemform`} className="btn btn-outline-default btn-round">
        <i className="fa fa-cog"></i> Offer free item
      </Link>
      <h3>Currently available free items</h3>
      <br />
      <Search search={search} onHandleSearch={setSearch} />
      <Filter filterValue={filter} onChangeCategory={onChangeCategory} />
      <br />
      <div className="row row-cols-1">
        {filteredItems.map((item) => {
          return <ItemCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}
export default ItemList;
