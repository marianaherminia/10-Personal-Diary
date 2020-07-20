const entryForm = document.getElementById('entryForm');
const entriesSection = document.querySelector('#entries');
const entryTextBox = document.querySelector('.entry-textbox');
const entriesNav = document.querySelector('.entries-nav');
let buttonCount = 1;

function addEntryToDom(e) {
    e.preventDefault();
    const entryDiv = document.createElement('div');
    entryDiv.classList.add('single-entry');    //entryDiv.className = 'single-entry'
    entryDiv.innerText = entryTextBox.value;
    entriesSection.appendChild(entryDiv);
    entryTextBox.value = '';
    entryDiv.style.display = 'none';

    const displayEntryButton = document.createElement('button');
    displayEntryButton.innerText = buttonCount;
    displayEntryButton.className = 'display-entry-button'
    entriesNav.appendChild(displayEntryButton);
    displayEntryButton.addEventListener('click', () => { 
        const allEntries = document.querySelectorAll('.single-entry');
        for (let i = 0; i < allEntries.length ; i++) {
              allEntries[i].style.display = 'none'
        }
        entryDiv.style.display = 'block';
    })
    buttonCount++;
}

entryForm.addEventListener('submit', addEntryToDom);


