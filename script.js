const addtitle = document.getElementById('addTitle');
const addtext = document.getElementById('addText');
const addbtn = document.getElementById('addNote');
const notes = document.getElementById('notes');
shownotes();

function addnotes() {
    let notesobj = localStorage.getItem('notes');
    if (notesobj == null) {
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notesobj);
    }
    if (addtitle.value.length !== 0 && addtext.value.length !== 0) {
        let note = {
            title: addtitle.value,
            text: addtext.value
        };
        notesobj.push(note);
        addtitle.value = '';
        addtext.value = '';
        console.log(notesobj);
        localStorage.setItem('notes', JSON.stringify(notesobj));
        shownotes();
    }
}

addbtn.addEventListener('click', addnotes);

function shownotes(){
    notes.innerHTML = '';
    let notesobj = localStorage.getItem("notes");
    if (notesobj == null) {
      notesobj = [];
    } else {
      notesobj = JSON.parse(notesobj);
    }
    notesobj.forEach(function(element){
        let note = document.createElement('div');
        note.classList.add('note');
        let title = document.createElement('h2');
        let text = document.createElement('p');
        let deletebtn = document.createElement('button');
        deletebtn.innerHTML = 'Delete';

        deletebtn.addEventListener('click', function(){
            deletebtn.parentElement.remove();
        })
        title.innerText = element.title;
        text.innerText = element.text;
        note.appendChild(title);
        note.appendChild(text);
        note.appendChild(deletebtn);
        notes.appendChild(note);
    });
}
