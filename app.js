const currentTime = () => {
    let curTime = new Date().toLocaleTimeString();
    document.getElementById("clock").innerText = curTime;
};
currentTime();
setInterval(() => {
    currentTime();
}, 1000);


const currentDate = () => {
    let curTime = new Date().toLocaleDateString();
    document.getElementById("date").innerText = curTime;
};
currentDate();