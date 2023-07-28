import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React from "react";

export const Tile = ({name, description}) => {

  const descArray = Object.values(description);
  
  return (
    <div className="tile-container">
      <p>{name}</p>
      {descArray.map((value, index) => {
        return (<p key={index}>{value}</p>)
      })}
    </div>
  );
};
