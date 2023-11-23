let minutesInput = document.getElementById('minutes');
let convertBtn = document.querySelector('button');
let output = document.getElementById('output');

function minutesToSeconds(){ // seconds / 60 = <minutes>  |----|  minutes * 60 = <seconds>
    console.log(minutesInput.value)
    output.textContent = `seconds: ${minutesInput.value * 60}`
}
function secondsToMinutes(seconds){
    return seconds / 60
}

minutesInput.oninput = minutesToSeconds

// convertBtn.addEventListener('click', () => minutesToSeconds())
