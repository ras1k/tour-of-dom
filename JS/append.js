const placesList = document.getElementById('place-id');
const li = document.createElement('li');
li.innerText = 'Sylhet';
// console.log(li);
placesList.appendChild(li);

const mainContent = document.getElementById('main-content');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);
const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biriyani';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'Burgir';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'Grilled Chicken';
ul.appendChild(li3);
section.appendChild(ul);
mainContent.appendChild(section);

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
    <h1>MY Dresses</h1>
        <ul>
            <li>T-shirt</li>
            <li>Trousers</li>
            <li>Jersey</li>
            <li>Sneakers</li>
        </ul>`
mainContent.appendChild(sectionDress);