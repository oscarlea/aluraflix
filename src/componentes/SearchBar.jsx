import React, { useContext, useState } from "react";
import styled from "styled-components";
import { VideoDataContext } from "../Context";
import { CustomInputBase } from "./CustomInput";


const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 5;
  gap: 1rem;
  width: 100%;

  @media (max-width: 768px) {
    gap: .4rem;
    }  
`;


const SearchBar = React.memo(() => {

	const { fetchData, setVideos } = useContext(VideoDataContext);
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = () => {
		if (searchTerm.trim() !== "") {
			fetchData(searchTerm.toLowerCase(), setVideos);
		}
	};

	const handleChange = (event) => {
		setSearchTerm(event.target.value);
	};

	return (
		<StyledSearchBar>

			<CustomInputBase
				searchTerm={searchTerm}
				handleChange={handleChange}
				handleSearch={handleSearch}
			/* tipo="text" */
			/>

		</StyledSearchBar>
	);
});

export default SearchBar;
