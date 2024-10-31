"use client";

export function CatSortButton({ onSort, text, styles }) {
  const defaultStyles = "px-2 py-3 rounded-lg";

  return (
    <>
      <button onClick={onSort} className={`${defaultStyles} ${styles}`}>
        {text}
      </button>
    </>
  );
}
