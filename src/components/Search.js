import React from "react";
import "./Header.css";
import "./Sidebar.css";

const Search = (props) => {
  return (
    <div>
      <form>
        <button type="submit" onClick={(e) => ""}>
          Search
        </button>
        <input type="search" placeholder="Search..." />
      </form>
    </div>
  );
};
export default Search;
