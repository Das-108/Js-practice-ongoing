// Fetch API - Browser API for HTTP (AJAX) Requests
// Default - Get REquests, supports other methods as well
// Returns Promise

const url = 'https://www.course-api.com/react-tours-project'

// Fetch using promises
fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

const getTours = async () => {
    try {
        const response = await fetch(url)
        const data = await response.json()
    } catch (error) {
        console.log(error)
    }
}

getTours