/* eslint-disable jsx-a11y/anchor-is-valid */
import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");
  const handleTermChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        value={search}
        onChange={handleTermChange}
      />
      <button className="SearchButton" onClick={(e) => onSearch(search)}>
        SEARCH
      </button>
    </div>
  );
}

export default SearchBar;
