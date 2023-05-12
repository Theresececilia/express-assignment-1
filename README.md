# CRUD API for Studio Ghibli Movies

## Endpoints for API Testing

## Information:

- The movie IDs range from 1 and above.

- API key validation is required. Include the query parameter "apiKey=5".

**GET /movies**

- Description: Retrieves all movies.

- Method: GET

**GET /movies/:id**

- Description: Retrieves a specific movie based on its ID.

- Method: GET

- Parameters:

- id: The ID of the movie to retrieve.

**POST /movies**

- Description: Adds a new movie to the collection.

- Method: POST

- Body: Provide a JSON object in the request body with the following format:

json
Copy code

```
{
  "movie": {
    "title": "Flying Foo"
  }
}
```

**PUT /movies/:id**

- Description: Updates an existing movie.

- Method: PUT

- Parameters:

- id: The ID of the movie to update.

- Body: Provide a JSON object in the request body with the updated movie details.

**DELETE /movies/:id**

- Description: Deletes a movie from the collection.

- Method: DELETE

- Parameters:

- id: The ID of the movie to delete.

# API Usage

Please use the provided endpoints to interact with the CRUD API for Studio Ghibli Movies. Ensure that you follow the instructions and provide the required parameters and request bodies where necessary. The API key validation is essential and should be included as a query parameter with the value "5" (e.g., ?apiKey=5).

Feel free to explore and test the various CRUD operations available for managing Studio Ghibli movies.
