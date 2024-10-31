//uncontrolled version

"use client";
import { useState } from "react";
export function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  // ++ add support for the synopsis field as well, here and below
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const movieData = {
      title: formData.get("title"),
      year: formData.get("year"),
      synopsis: formData.get("lalala"),
    };
    onAddMovie(movieData);
  };
  return (
    <div className="AddMovieForm componentBox">
      <form onSubmit={handleSubmit}>
        <label>
          Movie Title:
          <input name="title" defaultValue="" />
        </label>
        <label>
          Year Released:
          <input name="year" type="number" defaultValue="" />
        </label>
        <button>Add Movie</button>
      </form>
    </div>
  );
}
