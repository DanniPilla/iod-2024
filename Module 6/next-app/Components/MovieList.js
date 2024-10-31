"use client";
import { useState } from "react";
import { SortButton } from "./SortButton";
import { AddMovieForm } from "./AddMovieForm";

const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    synopsis: "Two imprisoned men find redemption.",
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    synopsis: "Batman fights the menace known as the Joker.",
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    synopsis: "Explorers travel through a wormhole in space.",
  },
];

export function MovieList() {
  const [currentMovies, setCurrentMovies] = useState(movies);

  const handleReverseMovies = () => {
    let newMovies = [...currentMovies];
    newMovies.reverse(); // 2. modify the clone
    setCurrentMovies(newMovies); // 3. set updated clone in state
  };
  const handleSortByTitle = () => {
    let newMovies = [...currentMovies];
    newMovies.sort((a, b) => a.title.localeCompare(b.title));
    setCurrentMovies(newMovies);
  };
  const handleSortByYear = () => {
    let newMovies = [...currentMovies];
    newMovies.sort((a, b) => a.year - b.year);
    setCurrentMovies(newMovies);
  };

  const handleAddMovie = (newMovie) => {
    newMovie.id = currentMovies.length + 1; // unreliable but succinct
    setCurrentMovies([...currentMovies, newMovie]);
  };
  return (
    <>
      <h1>Movies List</h1>
      <div className="flex justify-between">
        {currentMovies.map((movie, index) => (
          <li key={index}>
            {movie.title}
            {movie.year}
            {movie.synopsis}
          </li>
        ))}
      </div>
      <div>
        <button
          className="bg-green-500 hover:bg-green-600 px-2 py-3 rounded-lg"
          onClick={handleReverseMovies}
        >
          Reverse List
        </button>
        <SortButton
          styles="bg-green-500 hover:bg-green-600"
          onSort={handleSortByYear}
          text="Sort By Year"
        />

        <SortButton
          styles="bg-green-500 hover:bg-green-600"
          onSort={handleSortByTitle}
          text="Sort By Title"
        />
      </div>
      <AddMovieForm onAddMovie={handleAddMovie} />
    </>
  );
}
