

//this is new javascript done by me

//console.log('hiii this is new script');
display();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addText = document.getElementById('addText');
    let addTitle = document.getElementById('addTitle');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myObj={
        title:addTitle.value,
        notes:addText.value
    };
    notesObj.push(myObj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addText.value = ' ';
    addTitle.value=' ';
    display();
});
function display() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = '';
    notesObj.forEach(function (element, index) {
        html += ` <div class="card" style="width: 18rem;">
              
            <div class="card-body noteCard">
              <h5 class="card-title">  ${ element.title}</h5>
               <p class="card-text">${element.notes}</p>
               <button  id=${index} onclick='deleteNote(this.id)' class="btn btn-primary">Delete Note </button>
            </div>
         </div>
          `;

    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = '<h3>Nothing in your note so,plezee add some messege</h3>';
    }
}
//for deleting the element
function deleteNote(index) {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    display();
}
//for searching element
let searchTxt = document.getElementById('searchTxt');
searchTxt.addEventListener('input', function (e) {
    let inputVal = searchTxt.value;
    //console.log('input event fried',inputVal);
    let noteCard = document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function (element) {
        let cardText = element.getElementsByTagName('p')[0].innerText;
        if (cardText.includes(inputVal)) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
    });
});





