import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import MovieComponent from "./components/MovieComponent";
import MovieInfoComponent from "./components/MovieInfoComponent";
import RecommendedMovies from "./components/RecommendedMovies";


export const API_KEY = 'ec6ae674';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const AppName = styled.div`
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Header = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  width: 100%;
`;
const RecommendedMoviesHeader = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  background-color: #333;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 10px;
  }
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 6px;
  margin-left: auto; 
  width: 50%;
  background-color: white;

  @media (max-width: 768px) {
    width: 70%;
    margin-left: auto; /* Shift to the right */
  }

  @media (max-width: 480px) {
    width: 90%;
    margin-left: auto; /* Shift to the right */
  }
`;

const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
  }
`;

const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
  flex-grow: 1;
  transition: width 0.3s ease;

  &:focus {
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-left: 10px;
  }
`;

const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    padding: 20px;
    gap: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    gap: 10px;
  }
`;

const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 150px;
  opacity: 50%;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    margin: 100px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
    margin: 80px;
  }
`;

function App() {
  const [searchQuery, updateSearchQuery] = useState("");
  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();
  const [timeoutId, updateTimeoutId] = useState();

  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
    );
    updateMovieList(response.data.Search);
  };

  const onTextChange = (e) => {
    onMovieSelect("");
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <Container>
      <Header>
        <AppName>
          <a href="/" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
            <img className="header__icon" src="dsa.png" style={{ width: '90px', height: 'auto', marginRight: '10px' }} />
          </a>
          <span style={{ userSelect: 'none' }}>Movie App</span>
        </AppName>
        <SearchBox>
          <SearchIcon src="search-icon.svg" alt="Search Icon" />
          <SearchInput
            placeholder="Search Movie"
            value={searchQuery}
            onChange={onTextChange}
          />
        </SearchBox>
      </Header>
      {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect} />}
      <MovieListContainer>
        {movieList?.length ? (
          movieList.map((movie, index) => (
            <MovieComponent
              key={index}
              movie={movie}
              onMovieSelect={onMovieSelect}
            />
          ))
        ) : null}
      </MovieListContainer>
      <RecommendedMovies />
    </Container>
  );
}

export default App;