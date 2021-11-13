const createMusicGenreArray = (genres) => {
  if(!genres){ return [] }

  let newArray = []
  genres.map((genre, index) =>  {
    const v = { position: index + 1, music_category_id: genre }

    newArray.push(v)
  })

  return newArray
}

export default createMusicGenreArray
