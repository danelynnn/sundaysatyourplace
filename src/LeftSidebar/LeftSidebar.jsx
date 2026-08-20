import "./LeftSidebar.scss";

import { useContext, useEffect } from "react";
import { DataContext } from "../App";

import MovieList from "../components/MovieList/MovieList";

function LeftSidebar() {
  const data = useContext(DataContext);

  return (
    <div className="sidebar">
      <MovieList />
    </div>
  );
}

export default LeftSidebar;
