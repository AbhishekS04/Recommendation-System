import React, { useState, useEffect, Suspense } from "react";
import Axios from "axios";
import styled, { ThemeProvider } from "styled-components";
import MovieComponent from "./components/MovieComponent";
import MovieInfoComponent from "./components/MovieInfoComponent";
import RecommendedMovies from "./components/RecommendedMovies";

export const API_KEY = 'ec6ae674';

const theme = {
  background: "#fff",
  color: "#000",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  min-height: 100vh;
`;

const AppName = styled.div`
  color: ${({ theme }) => theme.color};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Header = styled.div`
  color: ${({ theme }) => theme.color};
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  width: 100%;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 10px;
  border-radius: 6px;
  margin-left: auto;
  width: 30%;
  background-color: white;

  @media (max-width: 768px) {
    width: 50%;
    margin-left: auto;
  }

  @media (max-width: 480px) {
    width: 70%;
    margin-left: auto;
  }
`;

const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`;

const SearchInput = styled.input`
  color: black;
  font-size: 14px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 10px;
  flex-grow: 1;
  transition: width 0.3s ease;

  &:focus {
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-left: 8px;
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
  const [filters, setFilters] = useState({ category: "", rating: "" });
  const [FilterComponent, setFilterComponent] = useState(null);

  useEffect(() => {
    import("./components/FilterComponent").then((module) => {
      setFilterComponent(() => module.default);
    });
  }, []);

  const fetchData = async (searchString) => {
    try {
      const response = await Axios.get(
        `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
      );
      updateMovieList(response.data.Search || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      updateMovieList([]);
    }
  };

  const onTextChange = (e) => {
    onMovieSelect("");
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };

  const onFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const filteredMovies = movieList.filter((movie) => {
    const categoryMatch =
      filters.category === "" ||
      (filters.category === "bollywood" && movie.Country === "India") ||
      (filters.category === "hollywood" && movie.Country !== "India") ||
      (filters.category === "animation" && movie.Genre.includes("Animation")) ||
      (filters.category === "documentary" && movie.Genre.includes("Documentary"));
    const ratingMatch =
      filters.rating === "" || parseFloat(movie.imdbRating) >= parseFloat(filters.rating);
    return categoryMatch && ratingMatch;
  });

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>
          <AppName>
            <a href="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
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
        {movieList.length > 0 && FilterComponent && (
          <Suspense fallback={<div>Loading...</div>}>
            <FilterComponent onFilterChange={onFilterChange} />
          </Suspense>
        )}
        {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onClose={() => onMovieSelect(null)} />}
        <MovieListContainer>
          {filteredMovies.length ? (
            filteredMovies.map((movie, index) => (
              <MovieComponent
                key={index}
                movie={movie}
                onMovieSelect={onMovieSelect}
              />
            ))
          ) : null}
        </MovieListContainer>
        <RecommendedMovies onMovieSelect={onMovieSelect} />
      </Container>
    </ThemeProvider>
  );
}

export default App;