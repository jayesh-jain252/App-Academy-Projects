// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId,
} = require("./data");

const express = require("express");
const app = express();

// Your code here
app.use(express.json());
app.use((req, res, next) => {
  console.log("Body:", req.body);
  next();
});

app.get("/artists/latest/albums", (req, res) => {
  res.json(getAlbumsForLatestArtist());
});

app.get("/artists/latest", (req, res) => {
  res.json(getLatestArtist());
});

app.get("/artists/:artistId", (req, res) => {
  let artistId = req.params.artistId;
  res.json(getArtistByArtistId(artistId));
});

app.put("/artists/:artistId", (req, res) => {
  let artistId = req.params.artistId;
  let data = req.body;
  res.json(editArtistByArtistId(artistId, data));
});

app.get("/artists", (req, res) => {
  res.json(getAllArtists());
});

app.post("/artists", (req, res) => {
  let newArtistBody = req.body;
  let newArtist = addArtist(newArtistBody);
  res.status = 201;
  res.json(newArtist);
});

const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
