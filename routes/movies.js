const express = require('express')
const router = express.Router()
const mockData = require("../mockData")

let movies = mockData;

// Get all data
router.get('/', (req, res) => {
  res.json(movies);
});

// Get data by ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const movie = movies.find((film) => film.id === id)

    if(!movie) {
        return res
        .status(404)
        .json({ message: "I'm sorry. No movie with that id was found." })
    }

    res.json(movie)
})

// Add data
let nextId = 7
router.post('/', (req, res) => {
    const movie = req.body.movie
    const newMovie = { ...movie, id: nextId }

    nextId++

   movies.push(newMovie);

   console.log(newMovie);
   res.json(newMovie);
})

//Change data
router.put("/:id", (req,res) => {
  const id = parseInt(req.params.id);
  const movie = req.body.movie
  const index = movies.findIndex((film) => film.id === id);

  if(index === -1) {
    return res
      .status(404)
      .json({ message: "I'm sorry. No movie with that id was found." });
  }

  const updatedMovie = { ...movies[index], ...movie }
  console.log({ id, movie})

  movie[index] = updatedMovie
  res.json(updatedMovie)
})

//Delete data
router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const movie = movies.find((film) => film.id === id);

    if(!movie) {
      return res
      .status(404)
      .json( { message: "No movie with that id was found."})
    }

    const newData = movies.filter(movie => movie.id !== id)

    movies = newData ;
    res.json({ message: "Movie has been deleted."})
    console.log(newData)

})




module.exports = router;