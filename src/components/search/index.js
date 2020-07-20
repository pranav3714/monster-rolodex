import React from "react";
import "./index.style.css";

const Search = ({ setSearch, search, placeholder }) => {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </div>
  );
};

export default Search;
