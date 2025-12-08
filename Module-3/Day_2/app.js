import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    doc,
    deleteDoc,
    updateDoc,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// your firebase config here
const firebaseConfig = {
  apiKey: "AIzaSyAHxIbUgK1IivKyZIm44hWeu4pHXTn4Avg",
  authDomain: "day-2-d5832.firebaseapp.com",
  projectId: "day-2-d5832",
  storageBucket: "day-2-d5832.firebasestorage.app",
  messagingSenderId: "225858523772",
  appId: "1:225858523772:web:df6aca4c08a9e17f9eaff9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const booksRef = collection(db, "books");
const booksContainer = document.getElementById("booksContainer");

//  REALTIME LISTENER
onSnapshot(booksRef, (snapshot) => {
    booksContainer.innerHTML = ""; // Clear UI

    snapshot.forEach((docSnap) => {
        const book = docSnap.data();
        const id = docSnap.id;

        booksContainer.innerHTML += `
            <div class="book-card">
                <img src="${book.coverImageURL}" alt="">
                <h3>${book.title}</h3>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Price:</strong> $${book.price}</p>

                <button class="action" onclick="updateAuthor('${id}', '${book.author}')">Update Author</button>
                <button class="action" onclick="deleteBook('${id}')">Delete</button>
                <button class="action" onclick="alert('Title: ${book.title}\nAuthor: ${book.author}\nPrice: $${book.price}')">View Details</button>
            </div>
        `;
    });
});

//  ADD BOOK
document.getElementById("addBookForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const price = document.getElementById("price").value;
    const imageURL = document.getElementById("imageURL").value;

    await addDoc(booksRef, {
        title,
        author,
        price,
        coverImageURL: imageURL
    });

    e.target.reset();
});

//  DELETE BOOK
window.deleteBook = async function(id) {
    await deleteDoc(doc(db, "books", id));
};

//  UPDATE AUTHOR
window.updateAuthor = async function(id, oldAuthor) {
    const newAuthor = prompt("Enter new author name:", oldAuthor);

    if (newAuthor) {
        await updateDoc(doc(db, "books", id), {
            author: newAuthor
        });
    }
};
