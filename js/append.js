// Where to be added
const placesList = document.getElementById('place-list');

// what to be added
const newLi = document.createElement("li");
newLi.innerText = "New place to list";
placesList.appendChild(newLi);

// Where to be added
const mainContainer = document.getElementById("main-container");

// what to be added
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "My Food List";
section.appendChild(h1);

const ul = document.createElement("ul");

const li1 = document.createElement("li");
li1.innerText = 'chicken pulao';
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = 'chicken biriyani';
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = 'salad';
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);




// set innerHTML directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My dress Section</h1>
<ul>
    <li>T-Shirt</li>
    <li>Pant</li>
    <li>Jeans</li>
</ul>
`

mainContainer.appendChild(sectionDress);