import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} )
  const [favourites, setFavourites] = useState( [] )
  const [playlist, setPlaylist] = useState( [] )

  const addToFavourites = (movie) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      newFavourites.push(movie.id);
    }
    setFavourites(newFavourites);
  };

  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    setFavourites( favourites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addToPlaylist = (movie) => {
    let newPlaylist = [...playlist];
    if (!playlist.includes(movie.id)) {
      newPlaylist.push(movie.id);
    }
    setPlaylist(newPlaylist);
  };

  return (
    <MoviesContext.Provider
        value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        playlist,
        addToPlaylist,
        }}
    >
        {props.children}
    </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;
