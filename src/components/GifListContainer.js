import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([])
  let gifsList = []

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=Pt4vPAaEZ1Q0ppuub0f9RZ70tVtaEtvp&rating=g`)
    .then((res) => res.json())
    .then((gifs) => {
      for (let i=0; i < 3; i++){
        gifsList.push(gifs.data[i])
      }
      setGifs(gifsList)
    })
  }, []);



  return (
    <>
      <GifList gifs={gifs}/>
      <GifSearch />
    </>
  )
}

export default GifListContainer