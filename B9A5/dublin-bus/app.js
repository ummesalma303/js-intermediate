const seatSelectedEl = document.getElementById('selected-seat')
const totalBooked = document.getElementById('total-booked');
const availableSeat = document.getElementById('available-seat');
const totalPriceEl = document.getElementById('total-price');
const couponField = document.getElementById('coupon-field');
const couponBtn = document.getElementById('coupon-btn')
const selectedSeat = [];
let totalPrice = 0;
function handleSelectSeat(event) {
    const seatValue = event.innerText
    if (selectedSeat.includes(seatValue)) {
        return alert('Seat already added')
    } else if (selectedSeat.length < 4) {
        const value = event.innerText
    event.classList.add('bg-primary', 'text-white');
    selectedSeat.push(value);
    totalBooked.innerText = selectedSeat.length;
    // decrease available seat value
    const availableSeatValue = parseFloat(availableSeat.innerText) - 1;
    availableSeat.innerText = availableSeatValue;

    totalPrice += 550;
    totalPriceEl.innerText = totalPrice.toFixed(2)
    seatSelectedEl.innerHTML += `
         <li class="text-base font-normal flex justify-between">
            <span>${value}</span>
            <span>Economy</span>
            <span>550</span>
        </li>`;
    // active coupon button
    if (selectedSeat.length > 3) {
        couponField.removeAttribute('disabled');
        couponBtn.removeAttribute('disabled');

    }
    } else {
        return alert('maximum seat booked')
    }
    
}