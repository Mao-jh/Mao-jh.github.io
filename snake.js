let snake = document.getElementById('snake');
let food = document.getElementById('food');
let direction = 'right';
let length = 1;
let x = 0;
let y = 0;
let gameOver = false;
let keyPresses = {};

function setup() {
    createFood();
    setInterval(updateGame, 100);
}

function createFood() {
    food.style.left = Math.floor(Math.random() * 40) * 20 + 'px';
    food.style.top = Math.floor(Math.random() * 40) * 20 + 'px';
}

function updateGame() {
    if (gameOver) {
        return;
    }
    if (direction === 'right') {
        x += 20;
    } else if (direction === 'left') {
        x -= 20;
    } else if (direction === 'up') {
        y -= 20;
    } else if (direction === 'down') {
        y += 20;
    }
    snake.style.left = x + 'px';
    snake.style.top = y + 'px';
    if (x === food.style.left && y === food.style.top) {
        createFood();
        length++;
    } else {
        let head = document.createElement('div');
        head.className = 'snake';
        head.style.left = x + 'px';
        head.style.top = y + 'px';
        document.getElementById('game-board').appendChild(head);
    }   
    let nextX = x + 20;
    let nextY = y + 20;   
    if (nextX >= 400 || nextX < 0 || nextY >= 400 || nextY < 0) { 
        gameOver = true;