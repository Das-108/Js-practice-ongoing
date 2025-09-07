const api = 'https://www.omdbapi.com/?apikey=e7c2a87e&t='

const searchBox = document.getElementById("searchBox")
const searchBtn = document.getElementById("searchBtn")

searchBtn.addEventListener("click",movieSearch)

function movieSearch(){
    const url = api + searchBox.value.trim()
    if(!searchBox.value.trim()) return alert('Please enter name of Movie')
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        displayMovie(data)
    })
    .catch(error => {
        console.error('Error fetching data: ', error)
    })
}

function displayMovie(data){
    let results = document.getElementById("results");
    results.innerHTML = `  <div id="results">
        <div id="container">
            <h2>Title: ${data.Title}</h2>
            <img src="${data.Poster}" alt="">
            <p>Genere: ${data.Genre}</p>
            <p>Plot:${data.Plot}</p>
            <p>Released Year: ${data.Year}</p>

        </div>`
}