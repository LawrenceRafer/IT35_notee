// Hardcoded Admin Account
const adminUsername = "admin";
const adminPassword = "1234";

function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === adminUsername && pass === adminPassword) {
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("noteSection").style.display = "block";
        loadNotes();
    } else {
        document.getElementById("loginMessage").innerText = "Invalid login!";
    }
}

function logout() {
    document.getElementById("noteSection").style.display = "none";
    document.getElementById("loginSection").style.display = "block";
}

function addNote() {
    const noteInput = document.getElementById("noteInput");
    const noteText = noteInput.value.trim();

    if (noteText === "") return;

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(noteText);
    localStorage.setItem("notes", JSON.stringify(notes));

    noteInput.value = "";
    loadNotes();
}

function loadNotes() {
    const container = document.getElementById("notesContainer");
    container.innerHTML = "";

    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    notes.forEach((note, index) => {
        const div = document.createElement("div");
        div.className = "note";
        div.innerHTML = `
            ${note} <br>
            <button onclick="deleteNote(${index})">Delete</button>
        `;
        container.appendChild(div);
    });
}

function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    loadNotes();
}
