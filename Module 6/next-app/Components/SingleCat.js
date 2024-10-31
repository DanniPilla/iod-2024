export function SingleCat({ name, latinName, img, id, onDelete }) {
  return (
    <li>
      <p>{name}</p>
      <p>({latinName})</p>
      <div>
        <img src={img} className="w-32 h-32 object-cover" />
      </div>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault(); // Prevents page reload
          onDelete(id);
        }}
        className="text-red-500 ml-2 hover:underline"
      >
        Delete
      </a>
    </li>
  );
}
