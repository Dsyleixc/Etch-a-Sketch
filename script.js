'use strict';

const container = document.querySelector('.container');
const containerWidth = container.clientWidth;

console.log(containerWidth);

// Functions

const createBoxes = function (size) {
   let grid = size * size;
   let boxWidth = containerWidth / size;

   // loop to create each box
   for (let i = 1; i <= grid; i++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.width = `${boxWidth}px`;
      box.style.height = `${boxWidth}px`;
      container.appendChild(box);
   }
};

createBoxes(3);
