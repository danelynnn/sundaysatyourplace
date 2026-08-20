import "./MovieList.scss";

import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../App";
import AddPane from "./AddPane/AddPane";

function MovieList() {
  const data = useContext(DataContext);

  const [addPane, setAddPane] = useState(false);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <div className="listHeader">
        <h3 style={{ textAlign: "center" }}>movie list</h3>
        <div className="legend">
          {Object.keys(data.users).map((user) => (
            <div className="legendItem">
              <div
                style={{
                  width: 20,
                  height: 20,
                  display: "inline-block",
                  backgroundColor: `hsl(${data.users[user].colour.join(",")})`,
                  marginRight: 6,
                }}
              />

              {user}
            </div>
          ))}
        </div>
        <div>
          <div className="button" onClick={() => setAddPane(!addPane)}>
            add
          </div>
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              display: addPane ? "block" : "none",
            }}
          >
            <AddPane />
          </div>
        </div>
      </div>

      <div className="list">
        {data.movieList.map((movie) => (
          <div
            className="movieItem"
            style={{
              backgroundColor: `hsl(${data.users[movie.username]?.colour.join(",")})`,
            }}
          >
            {movie.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
