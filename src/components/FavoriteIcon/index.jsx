import React, { useState } from "react";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
function FavoriteIcon({ state }) {
  const [favorite, setFavorite] = useState(state);
  return (
    <span onClick={() => setFavorite(!favorite)} style={{ cursor: "pointer" }}>
      {favorite ? (
        <TiStarFullOutline color={"burlywood"} fontSize={22} />
      ) : (
        <TiStarOutline fontSize={22} />
      )}
    </span>
  );
}

export default FavoriteIcon;
