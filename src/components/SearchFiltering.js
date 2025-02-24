import React, { useState } from "react";

const SearchFiltering = () => {
  const [search, setSearch] = useState("");
  const items = [
    { id: 1, title: "Alien Corn", author: "Sidney Howard", genre: "Adventure" },
    {
      id: 2,
      title: "After Many a Summer Dies the Swan",
      author: "Aldous Huxley",
      genre: "Adventure",
    },
    {
      id: 3,
      title: "Captains Courageous",
      author: "Rudyard Kipling",
      genre: "Adventure",
    },
    {
      id: 4,
      title: "The Daffodil Sky	",
      author: "H. E. Bates",
      genre: "Sci-fi",
    },
    {
      id: 5,
      title: "Endless Night	",
      author: "Agatha Christie",
      genre: "Sci-fi",
    },
    {
      id: 6,
      title: "A Farewell to Arms	",
      author: "Ernest Hemingway",
      genre: "Sci-fi",
    },
    {
      id: 7,
      title: "The Green Bay Tree	",
      author: "Louis Bromfield",
      genre: "Sci-fi",
    },
  ];
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredList = items.filter((item) => {
    return (
      item.title.toLowerCase().includes(search) ||
      item.author.toLowerCase().includes(search) ||
      item.genre.toLowerCase().includes(search)
    );
  });
  return (
    <div>
      <input type="search" value={search} onChange={handleChange} />
      <br />
      {filteredList.map((item) => (
        <p key={item.id}>
          {item.title}: {item.author} - {item.genre}
        </p>
      ))}
    </div>
  );
};

export default SearchFiltering;
