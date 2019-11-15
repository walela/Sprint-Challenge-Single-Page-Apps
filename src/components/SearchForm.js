import React from "react";

const inputstyles = {
  padding: "10px",
  fontFamily: "Fira Mono, monospace"
};

const buttonstyles = {
  fontSize: "1.5em",
  fontFamily: "monospace"
};
export default function SearchForm({ keyword, onSearch, handleInputChange }) {
  return (
    <section className="search-form">
      <form onSubmit={e => onSearch(e, keyword)}>
        <input
          onChange={handleInputChange}
          placeholder="Search by name..."
          style={inputstyles}
          value={keyword}
          name="name"
        />
        <button style={buttonstyles} type="submit">
          Search
        </button>
      </form>
    </section>
  );
}
