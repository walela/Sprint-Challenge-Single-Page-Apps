import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 12em;
  font-size: 2rem;
  padding: 10px;
  border-radius: 10px;
`;

// searchbar
function SearchForm(props) {
  return (
    <StyledInput
      type="text"
      id="search"
      value={props.value}
      placeholder="Search by name..."
      onChange={props.onChange}
    />
  );
}

export default SearchForm;
