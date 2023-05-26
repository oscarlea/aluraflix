import React, { useState } from "react";
import styled from "styled-components";

const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;

  position: absolute;
  left: 50%;
top: 50%;
transform: translate(-50%, -50%);
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SearchButton = styled.button`
  margin-left: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #2a7ae4;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Aquí puedes realizar la lógica de búsqueda según tu necesidad
    console.log("Realizando búsqueda:", searchTerm);
    // Lógica adicional...
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <StyledSearchBar>
      <SearchInput
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleChange}
      />
      <SearchButton onClick={handleSearch}>Buscar</SearchButton>
    </StyledSearchBar>
  );
};

export default SearchBar;
