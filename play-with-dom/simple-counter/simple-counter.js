const count = document.getElementById('count');
const counter = document.getElementById('counter')
const increase = document.getElementsByClassName('increase-button')[0]
const decrease = document.getElementsByClassName('decrease-button')[0]
// console.log(counter.innerText);

counter.addEventListener('click', function () {
    console.log(counter);
    // increase.setAttribute('disabled', true);
    // decrease.setAttribute('disabled', true);
})



increase.addEventListener('click', function () {
    currentCount = Number(count.innerText);
    currentCount++
    count.innerText = currentCount
})
    
decrease.addEventListener('click', function () {
    currentCount = Number(count.innerText);
    currentCount--
    count.innerText = currentCount
})

