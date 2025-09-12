// Fetch Errors
// only throws an error if cannot resolve.
// Error Response still a respone (400 - 500)

const url = 'http://www.course-api.com/react-tours-project'

const getTours = async () => {
    try{
        const response = await fetch(url)
        if(!response.OK) {
            const msg =  `There was an error "${response.status} ${response.statusText}"`
            throw new Error(msg)
        }
        const tours = await response.json()
        console.log(tours)
    }catch (error) {
        console.log(error)
    }
}

const btn = document.querySelector('.btn')
btn.addEventListener('click', getTours)