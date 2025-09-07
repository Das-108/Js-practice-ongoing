const api = 'https://www.googleapis.com/books/v1/volumes?q=';

const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");

// Event listener for search
searchBtn.addEventListener("click", bookFinder);

function bookFinder() {
    const query = searchBox.value.trim();
    if (!query) return alert("Please enter a book title!");

    const url = api + encodeURIComponent(query);

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayBooks(data.items);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

function displayBooks(books) {
    // Remove old results
    let container = document.getElementById("results");
    if (!container) {
        container = document.createElement("div");
        container.id = "results";
        document.body.appendChild(container);
    }
    container.innerHTML = "";

    books.forEach(book => {
        const info = book.volumeInfo;

        // Book card
        const bookCard = document.createElement("div")
        bookCard.classList.add("verticalCard")
        
        // Title
        const title = document.createElement("h2");
        title.textContent = info.title || "No Title";

        // Author
        const author = document.createElement("p");
        author.textContent = info.authors ? `Author: ${info.authors.join(", ")}` : "No Author Info";

        // Description
        const description = document.createElement("p");
        description.textContent = info.description || "No Description Available";

        // Image
        const img = document.createElement("img");
        img.src = info.imageLinks ? info.imageLinks.thumbnail : "";
        img.alt = info.title || "No Image";
        img.style.width = "150px";

        // Append to card
        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(img);
        bookCard.appendChild(description);

        // Add to results container
        container.appendChild(bookCard);
    });
}
