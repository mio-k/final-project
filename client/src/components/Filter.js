import React from "react";

function Filter({ filterValue, onChangeCategory }) {
  function handleChangeCategory(e) {
    onChangeCategory(e.target.value);
  }
  return (
    <div className="filter">
      <label>
        <label>Filter by category: </label>
        <select
          onChange={handleChangeCategory}
          value={filterValue}
          // className="filter"
        >
          <option value="All">All</option>
          <option value="walking">Walking</option>
          <option value="food">Food</option>
          <option value="grooming">Grooming</option>
          <option value="puppy care">Puppy Care</option>
          <option value="play">Play</option>
        </select>
      </label>
      <br />
    </div>
  );
}
export default Filter;
