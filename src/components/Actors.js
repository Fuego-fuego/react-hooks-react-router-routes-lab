import React from "react";
import Actor from "./actor";
import { actors } from "../data";

function Actors() {

  const actorsElements = actors.map((actor, index)=> <Actor key ={index} actor={actor}/>)
  return(<div>
    {/*{code here}*/}
    <h1>Actors Page</h1>
    <div>
    {actorsElements}
    </div>
    </div>)
}

export default Actors;
