import "./App.scss";

import { createContext, useEffect, useState } from "react";

import Component from "./Component";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import Main from "./Main/Main";
import RightSidebar from "./RightSidebar/RightSidebar";

export const DataContext = createContext(null);

function App() {
  const [movieList, setMovieList] = useState([
    { name: "Borat", imdb: null, username: "clern" },
  ]);
  const [users, setUsers] = useState({});

  useEffect(() => {
    setMovieList([
      { name: "day the earth stood still", imdb: null, username: "allie" },
      { name: "big lebowski", imdb: null, username: "clern" },
    ]);

    const loadedUsers = {
      clern: { weight: 0.6 /*, colour: [6, "100%", "75%"]*/ },
      allie: { weight: 0.4 },
    };
    for (const user of Object.keys(loadedUsers)) {
      if (!("colour" in loadedUsers[user]))
        loadedUsers[user].colour = [
          Math.round(Math.random() * 360),
          "100%",
          "75%",
        ];
    }
    setUsers(loadedUsers);
  }, []);

  return (
    <div className="App">
      <DataContext value={{ movieList: movieList, users: users }}>
        <LeftSidebar />
        <Main />
        <RightSidebar />
      </DataContext>
    </div>
  );
}

export default App;
