function loadItems() {
    return fetch('./data/jsonfile.json')
        .then(response => response.json())
        .then(json => json.items);
}

function displayItems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

function createHTMLString(item) {
    return `
    <li>
        <img src="${item.image}" alt="">
        <span class="item__description">${item.gender}, ${item.size} size</span>
    </li>
    `
}

function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;
    if(key === null || value === null) {
        return;
    }

    displayItems(items.filter(item => item[key] === value));
}

function setEventListeners(items) {
    const logo = document.querySelector('.mainLogo');
    const buttons = document.querySelector('.btnList');
    logo.addEventListener('click', () => displayItems(items));
    buttons.addEventListener('click', (event) => onButtonClick(event, items));
}


loadItems()
.then(items => {
    displayItems(items);
    setEventListeners(items);
})
.catch(console.log);