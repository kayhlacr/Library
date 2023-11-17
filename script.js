// Define an array to store books
const myLibrary = [];

// Function to add a book to the library
function addBookToLibrary(title, author) {
  const lowerCaseTitle = title.toLowerCase();
  const lowerCaseAuthor = author.toLowerCase();

  if (
    myLibrary.some(
      (book) =>
        book.title.toLowerCase() === lowerCaseTitle &&
        book.author.toLowerCase() === lowerCaseAuthor
    )
  ) {
    alert("This book already exists in the library.");
    return;
  }

  // Create a new Book object
  const newBook = {
    title: title,
    author: author,
    read: false,
  };

  // Add the book to the library
  myLibrary.push(newBook);

  // Display the updated library
  displayBooks();
}

// Function to display books in a table
function displayBooks() {
  const libraryBody = document.getElementById("library-body");

  // Clear the existing table body content
  libraryBody.innerHTML = "";

  // Loop through the library and add each book to the table
  myLibrary.forEach((book, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.read ? "Read &#10003;" : "Not Read"}</td>
      <td>
        <button onclick="removeBook(${index})">Remove</button>
        <button onclick="toggleReadStatus(${index})">Read</button>
      </td>
    `;

    libraryBody.appendChild(row);
  });
}

// Function to remove a book from the library
function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks(); // Refresh the display after removing a book
}

// Function to toggle the read status of a book
function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read; // Toggle the read status
  displayBooks(); // Refresh the display after toggling the read status
}

// Function to toggle the visibility of the new book form
function toggleFormVisibility() {
  const form = document.getElementById("new-book-form");
  form.classList.toggle("hidden");
}

// Event listener for the "NEW BOOK" button
document
  .getElementById("new-book-button")
  .addEventListener("click", toggleFormVisibility);

// Event listener for the book submission form
document
  .getElementById("book-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Get values from the form
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;

    // Call the addBookToLibrary function with the form values
    addBookToLibrary(title, author);

    // Clear the form fields
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    toggleFormVisibility(); // Hide the form after submission
  });

// Example
addBookToLibrary("It Ends With Us", "Colleen Hoover");

// Display the books initially
displayBooks();
