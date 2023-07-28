import React from "react";
import {Tile} from "../tile/Tile";

export const TileList = ({data}) => {

  return (
    <div>
      {data.map((info, index)=>{
        const{name, ...rest} = info;
        return(
          <Tile key={index} name={name} description={rest}/>
        )
      })}
    </div>
  );
};
