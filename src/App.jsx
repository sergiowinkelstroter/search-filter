import { useState } from "react";
import "./App.css";
import { Table } from "./Table";
import { Users } from "./users";

export function App() {
  const [query, setQuery] = useState("");
  const keys = ["first_name", "last_name", "email"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  return (
    <div className="app">
      {" "}
      <input
        type="text"
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />{" "}
      {<Table data={search(Users)} />}
    </div>
  );
}
