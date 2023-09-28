const addtitle = document.getElementById("addTitle");
const addtext = document.getElementById("addText");
const addbtn = document.getElementById("addNote");
const notes = document.getElementById("notes");
shownotes();

function addnotes() {
  let notesobj = localStorage.getItem("notes");
  if (notesobj == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notesobj);
  }
  if (addtitle.value.length !== 0 && addtext.value.length !== 0) {
    let note = {
      title: addtitle.value,
      text: addtext.value,
    };
    notesobj.push(note);
    addtitle.value = "";
    addtext.value = "";
    console.log(notesobj);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes();
  }
}

addbtn.addEventListener("click", addnotes);

function shownotes() {
  notes.innerHTML = "";
  let notesobj = localStorage.getItem("notes");
  if (notesobj == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notesobj);
  }
  notesobj.forEach(function (element) {
    let note = document.createElement("div");
    note.classList.add("note");
    let title = document.createElement("h2");
    let text = document.createElement("p");
    let deletebtn = document.createElement("button");
    deletebtn.innerHTML = "Delete";
    let editbtn = document.createElement("button");
    editbtn.innerHTML = "Edit";

    deletebtn.addEventListener("click", function () {
      deletenotes(element.title);
    });
    editbtn.addEventListener("click", function () {
      editnotes(element.title);
    })
    title.innerText = element.title;
    text.innerText = element.text;
    note.appendChild(title);
     note.appendChild(document.createElement("br"));
    note.appendChild(text);
    note.appendChild(deletebtn);
    note.appendChild(editbtn);
    notes.appendChild(note);
  });
}

function deletenotes(title) {
  let notesobj = localStorage.getItem("notes");
  if (notesobj == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notesobj);
  }
  notesobj = notesobj.filter(function (note) {
    return note.title !== title;
  });
  localStorage.setItem("notes", JSON.stringify(notesobj));
  shownotes();
}

function editnotes(title) {
  let notesobj = localStorage.getItem("notes");
  if (notesobj == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notesobj);
  }
  notesobj.forEach(function (element) {
    if (element.title == title) {
      element.title = prompt("Enter new title");
      element.text = prompt("Enter new text");
    }
  });
  localStorage.setItem("notes", JSON.stringify(notesobj));
  shownotes();
}