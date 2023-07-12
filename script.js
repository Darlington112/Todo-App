const textBox = document.getElementById('my-text');
const listContainer = document.querySelector('.list-container');

function addTask() {
    if (textBox.value === '') {
        alert('Please Add task');
        return;
    } else {
        const li = document.createElement('li')
        li.innerHTML = textBox.value;
        listContainer.appendChild(li)
        // Adding close button
        const span = document.createElement('span')
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    textBox.value = '';
    saveData();
}

// Checking and removing items

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
        saveData();
    } else {
        if (e.target.tagName === 'SPAN') {
            e.target.parentElement.remove()
            saveData();
        }
    }
});

// saving to local storage

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

// Getting from localStorage
function displayListItem() {
    listContainer.innerHTML = localStorage.getItem('data');
}
displayListItem();