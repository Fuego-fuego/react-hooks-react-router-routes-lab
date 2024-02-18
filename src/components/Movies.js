import React  from "react";
import { movies } from "../data";

import Movie from "./movie";

function Movies() {

  const moviesElements  = movies.map(movie => <Movie key ={movie.time} movie ={movie}/>)

  return( <div>
    {/*{code here}*/}
      <h1>Movies Page</h1>
      <div>
    {moviesElements}

      </div>
    </div>)
}

export default Movies;
