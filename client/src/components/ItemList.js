import React, { useState } from "react";
import Search from "./Search";
import Filter from "./Filter";
import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";

function ItemList({ items }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  function onChangeCategory(category) {
    setFilter(category);
  }
  const filteredList =
    filter === "All"
      ? items
      : items.filter((item) => {
          return item.tags.some((tag) => {
            return tag.category === filter;
          });
        });
  const allItems = filteredList.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="list">
      <h2>Free Dog Care Items</h2>
      <p>
        Welcome to Dog Pod free item exchange! This is where you can post the
        dog care goods you no longer needs so others can use them.
      </p>
      <p>
        Did your dog grow out of a harness? Did the food you purchased recently
        didn't agree with your pup? Offer it to other members here!
      </p>
      <Link style={{ display: "block", margin: "1rem 0" }} to={`/newitemform`}>
        <p>Offer free items from here</p>
      </Link>
      <h3>Currently available free items</h3>
      <br />
      <Search search={search} onHandleSearch={setSearch} />
      <Filter filterValue={filter} onChangeCategory={onChangeCategory} />
      <br />
      <div className="row row-cols-1">
        {items.map((item) => {
          return <ItemCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}
export default ItemList;
