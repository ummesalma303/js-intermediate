const seatSelectedEl = document.getElementById('selected-seat')
const totalBooked = document.getElementById('total-booked');
const availableSeat = document.getElementById('available-seat');
const totalPriceEl = document.getElementById('total-price');
const couponField = document.getElementById('coupon-field');
const couponBtn = document.getElementById('coupon-btn');
const defaultText = document.getElementById('default-text');
const grandTotal = document.getElementById('grand-total');
const phoneNumber = document.getElementById('phone-number');
const nextBtn = document.getElementById('nextButton');

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
  // remove default text
   defaultText.classList.add('hidden')
        
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
    
    if (selectedSeat) {
        phoneNumber.removeAttribute('disabled') 
    }
}

// coupon button function
couponBtn.addEventListener('click',function () {
    const couponInputValue = couponField.value;
    let couponSave = 0;
    if (couponInputValue !== 'NEW50'&&couponInputValue !== 'Couple 20') {
        alert('Your provide code is not valid');
        return
    }
     if (couponInputValue === 'NEW50') {
         couponSave = totalPrice * 0.15;
    }else if (couponInputValue === 'Couple 20') {
         couponSave = totalPrice * 0.20;
    }
     const grandTotalValue = totalPrice - couponSave;
    grandTotal.innerText = grandTotalValue.toFixed(2);

    // hide coupon input field and apply button
    const showCouponPrice = document.getElementById('show-coupon-price');
    showCouponPrice.innerHTML = `<p>Discount</p> <p><span>-BDT: </span> <span>${couponSave}</span></p>`
})

phoneNumber.addEventListener('input',function () {
    const phoneNumberValue = phoneNumber.value;
    if (phoneNumberValue.length >= 11) {
        nextBtn.removeAttribute('disabled')
    } else {
        nextBtn.setAttribute('disabled',true)
    }
})

document.getElementById('btn-continue').addEventListener('click',function () {
    location.reload()
})