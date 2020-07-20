import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import CardList from "./components/card-list";
import Search from "./components/search";

const fetchUsers = async (stateSetter) => {
  try {
    const users = await axios.get("https://jsonplaceholder.typicode.com/users");
    stateSetter(users.data);
  } catch (e) {
    console.log(e);
  }
};

function App() {
  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetchUsers(setMonsters);
  }, []);
  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(search)
  );
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <Search
        placeholder="search monsters"
        search={search}
        setSearch={setSearch}
      />
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
}

export default App;
