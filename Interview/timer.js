const time = 150000;
const seconds = Math.floor(time / 1000) % 60;
console.log(seconds); // 30

function startCountdown(seconds) {
    let counter = seconds;

    const interval = setInterval(() => {
        console.log(counter);
        counter--;

        if (counter < 1 ) {
            clearInterval(interval);
            console.log('Ding!');
        }
    }, 100);
}

console.log(startCountdown(60))
