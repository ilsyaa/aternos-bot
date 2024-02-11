const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

const getRandom = (array) => array[Math.floor(Math.random() * array.length)];

module.exports = {
    sleep,
    getRandom
}