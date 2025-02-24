import React, { useState } from "react";

const SearchFiltering = () => {
  const [search, setSearch] = useState("");
  const items = [
    { id: 1, name: "Apple", category: "Fruit" },
    { id: 2, name: "Banana", category: "Fruit" },
    { id: 3, name: "Carrot", category: "Fruit" },
    { id: 4, name: "Daikon", category: "Vegetable" },
    { id: 5, name: "Eggplant", category: "Vegetable" },
    { id: 6, name: "Fig", category: "Fruit" },
    { id: 7, name: "Grape", category: "Fruit" },
  ];
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredList = items.filter((item) => {
    return (
      item.name.toLowerCase().includes(search) ||
      item.category.toLowerCase().includes(search)
    );
  });
  return (
    <div>
      <input type="search" value={search} onChange={handleChange} />
      <br />
      {filteredList.map((item) => (
        <p key={item.id}>
          {item.name}: {item.category}
        </p>
      ))}
    </div>
  );
};

export default SearchFiltering;
