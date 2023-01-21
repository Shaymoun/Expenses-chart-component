const charts = document.querySelector('.charts')
const total = document.querySelector('#total')
const URL = `./data.json`
let totalExpenses = 0;

const fetchExpenses = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    data.forEach(day => {
        totalExpenses += day.amount;
    })
    data.forEach(day => {
        const outerDiv = document.createElement('div')
        outerDiv.classList.add('chart')
        const dayLabel = document.createElement('span')
        dayLabel.textContent = day.day
        const innerDiv = document.createElement('div')
        innerDiv.classList.add('chart__fill')
        innerDiv.style.height = `${((day.amount/totalExpenses)*100)/2}rem`
        const popupSpan = document.createElement('span')
        popupSpan.setAttribute('id','popup__price')
        popupSpan.textContent = `$${day.amount}`
        outerDiv.append(dayLabel,innerDiv,popupSpan)
        charts.append(outerDiv)
    });
    total.textContent = `$${totalExpenses}`
}

window.addEventListener('load',fetchExpenses)