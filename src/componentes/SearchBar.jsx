import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FormatoHeader } from "../UI";
import { VideoDataContext } from "../Context";


const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 5;
  gap: 1rem;
/* 
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */
`;


const SearchInput = styled(FormatoHeader).attrs({ as: 'input' })`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  line-height: 1.5;
`;
SearchInput.displayName = 'SearchInput';

const SearchButton = styled(FormatoHeader).attrs({ as: 'h1' })`
  margin-left: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #2a7ae4;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  line-height: 1.5;
`;

const SearchBar = () => {

  const videoDataContext = useContext(VideoDataContext);
  //const videos = videoDataContext.videos
  const fetchData = videoDataContext.fetchData
  const setVideos = videoDataContext.setVideos

  
  
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearch = () => {
    console.log("Realizando búsqueda:", searchTerm);
    
    /* const results = videos.filter((video) =>
    video.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    ); */
    console.log(searchTerm, setVideos)

    fetchData(searchTerm, setVideos)
   // console.log("Resultados de búsqueda:", results);
    
    

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
