'use strict';

const container = document.querySelector('.container');
const containerWidth = container.clientWidth;

console.log(containerWidth);

// Functions
const createBox = function (boxWidth) {
   // Create Empty Div
   const box = document.createElement('div');

   // Style and size boz
   box.classList.add('box');
   box.style.width = `${boxWidth}px`;
   box.style.height = `${boxWidth}px`;

   // Add box in to container
   container.appendChild(box);
};

const createGrid = function (size) {
   // Get grid size and box width
   let grid = size * size;
   let boxWidth = containerWidth / size;

   // loop over grid create each box
   for (let i = 1; i <= grid; i++) {
      createBox(boxWidth);
   }
};

createGrid(3);
