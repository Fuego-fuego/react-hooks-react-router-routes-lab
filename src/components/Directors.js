import React from "react";
import Director from "./director";
import { directors } from "../data";

function Directors() {

  const directorsElements = directors.map((director,index)=><Director key={index} director ={director}/> )
  return(
  <div>
    {/*{code here}*/}
    <h1>Directors Page</h1>
    <div>
    {directorsElements}
    </div>
    </div>
    )
}

export default Directors;
