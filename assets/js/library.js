const allBooks = [
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    img: "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX374_BO1,204,203,200_.jpg",
    category: "IT"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt, David Thomas",
    img: "https://images-na.ssl-images-amazon.com/images/I/41uPjEenkFL._SX396_BO1,204,203,200_.jpg",
    category: "IT"
  },
  {
    title: "Fairy Tale",
    author: "Stephen King",
    img: "https://m.media-amazon.com/images/I/518+W2zr3BL._SY522_.jpg",
    category: "Fiction"
  },
  {
    title: "Never After",
    author: "Stephanie Garber",
    img: "https://m.media-amazon.com/images/I/516digDms1L._SY445_SX342_.jpg",
    category: "Fiction"
  },
  {
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    img: "https://m.media-amazon.com/images/I/711cQWziQ8L._SY522_.jpg",
    category: "Fiction"
  },
  {
    title: "Cybersecurity and Cyberwar: What Everyone Needs to Know",
    author: "P.W. Singer, Allan Friedman",
    img: "https://m.media-amazon.com/images/I/8187hPXuj-L._SL1500_.jpg",
    category: "Cybersecurity"
  },
  {
    title: "The Art of Invisibility",
    author: "Kevin Mitnick",
    img: "https://m.media-amazon.com/images/I/81Ifc-i9nEL._SL1500_.jpg",
    category: "Cybersecurity"
  },
  {
    title: "Hacking: The Art of Exploitation",
    author: "Jon Erickson",
    img: "https://m.media-amazon.com/images/I/61Q68M25K3L.jpg",
    category: "Cybersecurity"
  },
  {
    title: "Metasploit: The Penetration Tester's Guide",
    author: "David Kennedy, Jim O'Gorman, Devon Kearns, Mati Aharoni",
    img: "https://m.media-amazon.com/images/I/81w9ymMApUL._SL1500_.jpg",
    category: "Cybersecurity"
  },
  {
    title: "Blue Team Handbook: Incident Response Edition",
    author: "Don Murdoch",
    img: "https://m.media-amazon.com/images/I/613EfUfdk4L._SL1360_.jpg",
    category: "Cybersecurity"
  },
  {
    title: "Learn JavaScript Quickly",
    author: "Grant Tharp",
    img: "https://m.media-amazon.com/images/I/81UhLQrQibL._SL1500_.jpg",
    category: "Cybersecurity"
  },
  {
    title: "Code: The Hidden Language of Computer Hardware and Software",
    author: "Charles Petzold",
    img: "https://m.media-amazon.com/images/I/61Hc-9h+-XL._SL1500_.jpg",
    category: "Cybersecurity"
  },
  {
    title: "Algorithms (The MIT Press Essential Knowledge series)",
    author: "Panos Louridas",
    img: "https://m.media-amazon.com/images/I/51jQbeB8KLL._SL1500_.jpg",
    category: "Cybersecurity"
  },
  {
    title: "Spies, Lies, and Algorithms: The History and Future of American",
    author: "Amy B. Zegart",
    img: "https://m.media-amazon.com/images/I/81Hfz5WMuLL._SL1500_.jpg",
    category: "Cybersecurity"
  },
  {
    title: "Python, Java, SQL & JavaScript",
    author: "Philip Robbins",
    img: "https://m.media-amazon.com/images/I/71EJs4plPzL._SL1499_.jpg",
    category: "Cybersecurity"
  },
  {
    title: "Hackers: Heroes of the Computer Revolution: 25th Anniversary Edition",
    author: "Steven Levy",
    img: "https://m.media-amazon.com/images/I/81wvlKDm8oL._SL1500_.jpg",
    category: "Cybersecurity"
  },
  {
    title: "Asynchronous Programming in Rust",
    author: "Carl Fredrik Samson",
    img: "https://m.media-amazon.com/images/I/61Jv6jIpbCL._SL1360_.jpg",
    category: "Cybersecurity"
  },
  {
    title: "Programming Rust: Fast, Safe Systems Development",
    author: "Jim Blandy",
    img: "https://m.media-amazon.com/images/I/813Bmx4rYCL._SL1500_.jpg",
    category: "Cybersecurity"
  }
];

const booksRow = document.querySelector(".books-row");
const categories = document.querySelectorAll(".category");

function renderBooks(filterCategory) {
  booksRow.innerHTML = "";
  const filtered = filterCategory === "All"
    ? allBooks
    : allBooks.filter(b => b.category === filterCategory);

  filtered.forEach(book => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    bookDiv.innerHTML = `
      <img src="${book.img}" alt="${book.title}" />
      <div class="book-title">${book.title}</div>
      <div class="book-author">${book.author}</div>
    `;

    booksRow.appendChild(bookDiv);
  });
}

renderBooks("All");

categories.forEach(cat => {
  cat.addEventListener("click", () => {
    categories.forEach(c => c.classList.remove("active"));
    cat.classList.add("active");

    renderBooks(cat.textContent);
  });
});
