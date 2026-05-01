export  const getTopTilesData = async () => {
  const res = await fetch('https://my-tiles-data.onrender.com/data.json')
  const data = await res.json()
  const tiles = data.tilesData
  return tiles.slice(0,4)
}

export  const getAllTilesData = async () => {
  const res = await fetch('https://my-tiles-data.onrender.com/data.json')
  const data = await res.json()
  const tiles = data.tilesData
  return tiles
}

