//1. where to add
const placesList = document.getElementById('places-list');
// 2. where to adde
const li = document.createElement('li')
li.innerText = 'pahartoli bon';
// 3. add the child
placesList.appendChild(li)


    // dynamic section
const mainContainer = document.getElementById('main-container')

const section = document.createElement('section')

const h1 = document.createElement('h1');
h1.innerText = 'My Food List'
section.appendChild(h1)

const ul = document.createElement('ul');
section.appendChild(ul)
const li1 = document.createElement('li')
li1.innerText = 'biryani';
ul.appendChild(li1)

const li2 = document.createElement('li')
li2.innerText = 'borhani';
ul.appendChild(li2)

const li3 = document.createElement('li')
li3.innerText = 'salad';
ul.appendChild(li3)

// console.log(section);

mainContainer.appendChild(section)

// set innerHTML directly
const sectionDress = document.createElement('section');
mainContainer.appendChild(sectionDress);

sectionDress.innerHTML = `
<h1>My Dress section</h1>
<ul>
    <li>T-shirt</li>
    <li>Lungi</li>
    <li>Sando genji</li>
</ul> `