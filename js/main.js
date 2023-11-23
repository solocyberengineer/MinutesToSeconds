let timeInput = document.getElementById('timeInput');
let convertBtn = document.querySelector('button');
let output = document.getElementById('output');
let minbtn = document.querySelector('[convert="min"]');
let secbtn = document.querySelector('[convert="sec"]');
let heading = document.querySelector('h1');

let toSeconds = true

function minutesToSeconds(){ // seconds / 60 = <minutes>  |----|  minutes * 60 = <seconds>
    output.textContent = `seconds: ${(timeInput.value * 60).toFixed(2)}`
}
function secondsToMinutes(){
    output.textContent = `minutes: ${(timeInput.value / 60).toFixed(2)}`
}

minbtn.addEventListener('click', function(){
    heading.textContent = 'seconds to minutes'
    minbtn.setAttribute('disabled', true)
    timeInput.setAttribute('placeholder', 'seconds')
    secbtn.removeAttribute('disabled')
    toSeconds = false
    secondsToMinutes()
    timeInput.oninput = (toSeconds) ? minutesToSeconds : secondsToMinutes
})

secbtn.addEventListener('click', function(){
    heading.textContent = 'minutes to seconds'
    secbtn.setAttribute('disabled', true)
    timeInput.setAttribute('placeholder', 'minutes')
    minbtn.removeAttribute('disabled')
    toSeconds = true
    minutesToSeconds()
    timeInput.oninput = (toSeconds) ? minutesToSeconds : secondsToMinutes
})

timeInput.oninput = (toSeconds) ? minutesToSeconds : secondsToMinutes