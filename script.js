'use strict';

const container = document.querySelector('.container');
const containerWidth = container.clientWidth;
const input = document.querySelector('.grid-size');
const reset = document.querySelector('.reset');
const changeBtn = document.querySelector('.change-grid');

console.log(containerWidth);

// Create Grid
const createBox = function (boxWidth) {
   // Create Empty Div
   const box = document.createElement('div');

   // Style and size box
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

// Add box hover functionality
const boxHover = container.addEventListener('mouseover', function (e) {
   e.target.classList.add('box-hovered');
});

createGrid(16);
