import "./AddPane.scss";

import { useState } from "react";

function AddPane() {
  const [searchText, setSearchText] = useState("");

  function search() {
    console.log(searchText);
  }

  return (
    <div className="addPopover">
      <input
        type="text"
        placeholder="enter movie name"
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") search();
        }}
      />
    </div>
  );
}

export default AddPane;
