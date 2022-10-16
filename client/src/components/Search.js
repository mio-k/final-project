import React from "react";

function Search({ search, onHandleSearch }) {
  function handleSearch(e) {
    onHandleSearch(e.target.value);
  }

  return (
    <div className="search">
      <label>
        <input
          className="form-control"
          style={{ width: 300 }}
          type="text"
          placeholder="Search free items"
          name="name"
          value={search}
          onChange={handleSearch}
        />
      </label>
    </div>
  );
}
export default Search;
