"use client";
import { useState } from "react";
export function AddCatForm({ onAddCat }) {
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [img, setImg] = useState("");
  const [previewUrl, setPreviewUrl] = useState(""); // For displaying a preview

  // ++ add support for the synopsis field as well, here and below
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCat({ name, latinName, img });

    setName("");
    setLatinName("");
    setImg("");
    setPreviewUrl("");
  };

  const handleImageChange = (e) => {
    setImg(e.target.value);
    setPreviewUrl(e.target.value);
  };

  return (
    <div className="AddCatForm componentBox">
      <form onSubmit={handleSubmit}>
        <label>
          Cat Name:
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-black"
          />
        </label>
        <label>
          Cat Latin Name:
          <input
            name="Latin Name"
            value={latinName}
            onChange={(e) => setLatinName(e.target.value)}
            className="text-black"
          />
        </label>

        <label>
          Cat Image:
          <input
            name="img"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            className="text-black"
          />
        </label>

        {/* Display preview if an image is uploaded */}
        {img && (
          <div className="preview">
            <img
              src={img}
              alt="Cat preview"
              className="w-32 h-32 object-cover"
            />
          </div>
        )}
        <button>Add Cat</button>
      </form>
    </div>
  );
}
