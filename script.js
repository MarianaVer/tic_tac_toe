"use strict";

const cells = document.querySelectorAll('.cell');

function moves() {
    let i = 0;
cells.forEach(item => {
    item.addEventListener('click', event => {
        if (i % 2 == 0) {
        item.innerHTML = 'X';
        } else {
            item.innerHTML = '0';
        }
        i++;
    }, {once: true});
    });
}
  
moves();