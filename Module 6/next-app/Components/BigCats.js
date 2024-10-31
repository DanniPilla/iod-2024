"use client";
import { useState } from "react";
import { SingleCat } from "@/Components/SingleCat";
import { CatSortButton } from "./CatSortButton";
import { AddCatForm } from "./AddCatForm";

const cats = [
  {
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    img: "https://i.natgeofe.com/k/66d3a80c-f4c3-4410-845c-3543375eaa85/cheetah-watching_square.jpg",
    id: 1,
  },
  {
    name: "Cougar",
    latinName: "Puma concolor",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIUoysYaovHsm1MJZA1RBuRQQ71jyKkcVjtA&s",
    id: 2,
  },
  {
    name: "Jaguar",
    latinName: "Panthera onca",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/640px-Standing_jaguar.jpg",
    id: 3,
  },
  {
    name: "Leopard",
    latinName: "Panthera pardus",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSJKZMjdnVKj_74TMHG1P6ltf225oNk-kb1LezuNQB9G92-ZhPM",
    id: 4,
  },
  {
    name: "Lion",
    latinName: "Panthera leo",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/1200px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg",
    id: 5,
  },
  {
    name: "Snow leopard",
    latinName: "Panthera uncia",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAtZ9-GJFDaeE0Kpymn9CVH2EGtXsRRWhpeA&s",
    id: 6,
  },
  {
    name: "Tiger",
    latinName: "Panthera tigris",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPSFYa1ZXytHh_SUBsHYbnNyG00qOA1mpjLA&s",
    id: 7,
  },
];

export function BigCats() {
  const [currentCats, setCurrentCats] = useState(cats);

  const handleReverseCats = () => {
    setCurrentCats((prevCats) => [...prevCats].reverse());
  };

  const handleSortByName = () => {
    setCurrentCats((prevCats) => {
      // the spread operator is cloning the data so we do not mutate it
      let newCats = [...prevCats];
      newCats.sort((a, b) => a.name.localeCompare(b.name));
      return newCats;
    });
  };

  const handlePanthera = () => {
    const pantheraCats = cats.filter((cat) =>
      cat.latinName.startsWith("Panthera")
    );
    setCurrentCats(pantheraCats);
  };
  const handleReset = () => {
    setCurrentCats(cats);
  };
  const handleDeleteCat = (id) => {
    setCurrentCats((prevCats) => prevCats.filter((cat) => cat.id !== id));
  };
  const handleAddCat = (newCat) => {
    newCat.id = currentCats.length + 1;
    setCurrentCats([...currentCats, newCat]);
  };
  return (
    <>
      <h1>Cats List</h1>
      <div className="flex columns-3 justify-between">
        <ul className="flex columns-3 justify-between">
          {currentCats.map((cat) => (
            <SingleCat
              key={cat.id}
              id={cat.id}
              name={cat.name}
              latinName={cat.latinName}
              img={cat.img}
              onDelete={handleDeleteCat}
            />
          ))}
        </ul>
      </div>
      <div>
        <CatSortButton
          styles="bg-green-500 text-white hover:bg-green-600"
          onSort={handleReverseCats}
          text="Reverse List"
        />
        <CatSortButton
          styles="bg-pink-500 text-white  hover:bg-pink-600"
          onSort={handleSortByName}
          text="Sort By Name"
        />
        <CatSortButton
          styles="bg-blue-500 text-white  hover:bg-blue-600"
          onSort={handlePanthera}
          text="Panthera Family"
        />
        <CatSortButton
          styles="bg-red-500 text-white hover:bg-red-600"
          onSort={handleReset}
          text="Reset"
        />
      </div>
      <AddCatForm onAddCat={handleAddCat} />
    </>
  );
}

//  <h1>Big Cats List</h1>
//       {cats.map((cat) => (
//         <SingleCat
//           key={cat.id}
//           name={cat.name}
//           latinName={cat.latinName}
//           img={cat.img}
//         />
//       ))}
//     </>
//   );
// }
