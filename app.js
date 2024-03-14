const textBox = document.getElementById('textbox');
const addBtn = document.querySelector('.submit');
const listContainer = document.querySelector('.list-container');

addBtn.addEventListener('click', function() {
    if (textBox.value === '') {
        alert('You must write something!');
    } 
    else {
        // let li = document.createElement('li');
        // li.innerHTML = textBox.value;
        // listContainer.appendChild(li);
        listContainer.innerHTML += `<li>${textBox.value}  
                                        <span>\u00d7</span>
                                    </li>`;

    }

    textBox.value = '';
    saveData();
})

listContainer.addEventListener('click', function(e) {
    //console.log(e.target.tagName)
    
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } 
    else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showList() {
    listContainer.innerHTML = localStorage.getItem('data');

}

showList();

