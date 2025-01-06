const startElement = document.getElementById('start');
const stopElement = document.getElementById('stop');
const resetElement = document.getElementById('reset');
const timeElement = document.getElementById('timer');

let interval;
let timeLeft = 1500;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    // for displaying the time in 00:00 format if the time is less than 10 seconds
    let formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    timeElement.innerText = formattedTime;


}

function startTimer() {
    interval = setInterval(() => {
    timeLeft--;
     updateTimer();

     if (timeLeft === 0) {
        // stop the timer
         clearInterval(interval);
         alert('Time is up!');
            timeLeft = 1500;
            updateTimer();
     }
}, 1000);
}

function stopTimer() {
    // pausing the timer
   clearInterval(interval);
}

function resetTimer() {
//    reset the timer
clearInterval(interval);
timeLeft = 1500;    
updateTimer();
}

startElement.addEventListener('click', startTimer);
stopElement.addEventListener('click', stopTimer);
resetElement.addEventListener('click', resetTimer);