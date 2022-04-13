"use strict";

const movesX = [];
const movesO = [];
const winnerMoves = [
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '3', '6'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['0', '4', '8'],
    ['2', '4', '6']
];

const cell = document.querySelectorAll('.cell');

function moves() {
    let i = 0;
cell.forEach(item => {
    item.addEventListener('click', event => {
        if (i % 2 == 0) {
        item.innerHTML = 'X';
        movesX.push(item.dataset.value);

        let x = movesX.sort().toString();
          if (winnerMoves.some(e => e.sort().toString() == x)) {
              setTimeout(() => alert('X wins'), 80);
          }

        } else {
            item.innerHTML = '0';
            movesO.push(item.dataset.value);

            let o = movesO.sort().toString();
          if (winnerMoves.some(e => e.sort().toString() == o)) {
              setTimeout(() => alert('0 wins'), 80);
          }
        }
        i++;
        return (movesX, movesO);
    }, {once: true});
    });
}




moves();





