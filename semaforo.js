const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;
const trafficLight = (event) =>{
    stopAutomatic(); // Função a ser criada
    turnOn[event.target.id]();
}
const nextIndex = () => colorIndex = colorIndex < 2 ? ++ colorIndex: 0;
const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}
const stopAutomatic = () => {
    clearInterval(intervalId);
}
const turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => intervalId = setInterval(changeColor, 1000),
}
buttons.addEventListener('click', trafficLight)

// const img = document.getElementById('img');
// const buttons = document.getElementById('buttons');

// // LET variavel volatil
// let colorIndex = 0;
// let intervalId = null;

// const trafficLight = (event) =>{
//   stopAutomatic(); //Função a ser criada
//   turnOn[event.target.id]();
// }

// const nextIndex = () => colorIndex = colorIndex < 2 ? ++ colorIndex: 0;

// const changeColor = () => {
//   const colors = ['red', 'yellow', 'green']
//   const color = colors[colorIndex]

// }

// const stopAutomatic= () => {
//   clearInterval(intervalId);
// }

// const turnOn = {
//   'red': () => img.scr = './img/desligado.png',
//   'yellow': () => img.scr = './img/amarelo.png',
//   'green': () => img.scr = './img/verde.png',
//   'test': () => intervalId = setInterval(changeColor, 30),
// }

// buttons.addEventListener('click',trafficLight)