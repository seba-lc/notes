let notes = JSON.parse(localStorage.getItem('notes'));
if(!notes){
    notes = [];
    localStorage.setItem('notes', JSON.stringify(notes))
}

notes.forEach(noteText => {
    let note = document.createElement('div');
    note.innerText = noteText;
    note.classList.add('note-style', 'm-3')
    let noteContainer = document.querySelector('.corcho');
    noteContainer.appendChild(note);
})

//patricio

const noteContent = document.getElementById('note-input');
const exampleNote = document.getElementById('note-example');

noteContent.addEventListener('keyup', ()=>{
    if(noteContent.value === ''){
        exampleNote.innerText = 'Escriba una nota'
    }else{
        exampleNote.innerText = noteContent.value
    }
})

const addNote = (event) => {
    event.preventDefault();
    const notesLS = JSON.parse(localStorage.getItem('notes'));
    notesLS.push(noteContent.value);
    localStorage.setItem('notes', JSON.stringify(notesLS));

    let note = document.createElement('div');
    note.innerText = noteContent.value;
    note.classList.add('note-style', 'm-3')
    let noteContainer = document.querySelector('.corcho');
    noteContainer.appendChild(note);

    document.querySelector('form').reset();
    exampleNote.innerText = 'Escriba una nota'
}


