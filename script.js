"use strict";

const movesX = [];
const movesO = [];
const winnerMovew = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const cell = document.querySelectorAll('.cell');

function moves() {
    let i = 0;
cell.forEach(item => {
    item.addEventListener('click', event => {
        if (i % 2 == 0) {
        item.innerHTML = 'X';
        movesX.push(item.dataset.value);
        } else {
            item.innerHTML = '0';
            movesO.push(item.dataset.value);
        }
        i++;
        return (movesX, movesO);
    }, {once: true});
    
    });
}
  
moves();