import React from "react";

function GifList({gifs}) {
  const item = gifs.map((gif) => {
    return (
      <li key={gif.id}><img src={gif.images.original.url} alt={gif.id} /></li>
    )
  })

  return (
    <ul>
      {item}
    </ul>
  )
}

export default GifList