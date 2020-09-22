const displayTip = document.querySelector('#display-tip')
const displayTotal = document.querySelector('#display-total')
const billInput = document.querySelector('#input-bill')
const tipInput = document.querySelector('#input-tip')
const peopleInput = document.querySelector('#input-people')

billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)
peopleInput.addEventListener('input', calculateTip)

function calculateTip() {
    const billValue = parseFloat(billInput.value)
    const tipValue = parseFloat(tipInput.value)
    const numPeople = parseInt(peopleInput.value)

    const tipAmount = billValue * tipValue / 100 / numPeople
    const billAmount = tipAmount + billValue / numPeople

    displayTip.innerHTML = tipAmount.toFixed(2)
    displayTotal.innerHTML = billAmount.toFixed(2)
}

calculateTip()