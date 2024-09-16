// option 1: directly set on the HTML element
// <button onclick="console.log(7)">Another button</button>

//  option 2: add onclick function on the html element
// IMPORTANT: We will use this
// <button onclick="makeRed()">Make Red</button>
//  option 2 
function makeRed() {
    document.body.style.backgroundColor ='red'
}

//option 3
const makeBlueBtn = document.getElementById('make-blue');
makeBlueBtn.onclick = makeBlue

function makeBlue() {
    document.body.style.backgroundColor='blue'
}

// option 3 another
const makePurple = document.getElementById('make-purple');
makePurple.onclick=function () {
    document.body.style.backgroundColor = 'purple';
}

// option 4
const makePink = document.getElementById('make-pink');
makePink.addEventListener('click',function () {
    document.body.style.backgroundColor='pink'
})


const greenBtn = document.getElementById('make-green');
greenBtn.addEventListener('click', makeGreen);

function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

// option: 4 Final
// IMportant: We will use this sometimes
// document.getElementById('make-goldenrod').addEventListener('click', function(){})
const goldenrodButton = document.getElementById('make-gold').addEventListener('click',function () {
    document.body.style.backgroundColor='goldenrod'
})