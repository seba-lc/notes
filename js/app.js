let notes = JSON.parse(localStorage.getItem('notes'));
if(!notes){
    notes = ['Hola, soy una nota', 'Hola, soy una 2da nota'];
    localStorage.setItem('notes', JSON.stringify(notes))
}

notes.forEach(noteText => {
    let note = document.createElement('div');
    note.innerText = noteText;
    note.classList.add('note-style', 'm-3')
    let noteContainer = document.querySelector('.corcho');
    noteContainer.appendChild(note);
})