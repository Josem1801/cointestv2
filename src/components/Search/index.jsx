import React, { useState } from "react";
import "./search.css";
import { AiOutlineSearch } from "react-icons/ai";
function Search() {
  const [search, setSearch] = useState("");
  const [searchId, setSearchId] = useState("");
  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    value = value.replace(/\s/g, "-");
    setSearchId(value);
    setSearch(e.target.value);
  };
  return (
    <form className="container" action={`/currencies/${searchId}`}>
      <input
        onChange={handleSearch}
        value={search}
        className="container__input"
        type="text"
        placeholder="Buscar..."
      />

      <AiOutlineSearch color="white" fontSize={16} />
    </form>
  );
}

export default Search;
