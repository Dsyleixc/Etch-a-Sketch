'use strict';

const container = document.querySelector('.container');
const containerWidth = container.clientWidth;
const input = document.querySelector('.grid-size');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change-grid');

console.log(containerWidth);

// Create Grid
const createBox = function (boxWidth) {
   // Create Empty Div
   const box = document.createElement('div');

   // Style and size box
   box.style.width = `${boxWidth}px`;
   box.style.height = `${boxWidth}px`;
   box.classList.add('box');

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

const reset = function () {
   const boxes = document.querySelectorAll('.box');
   boxes.forEach(function (box) {
      box.classList.remove('box-hovered');
   });
};

// Add box hover functionality
container.addEventListener('mouseover', function (e) {
   e.target.classList.add('box-hovered');
});

// Reset Button Functionality
resetBtn.addEventListener('click', function () {
   reset();
});

changeBtn.addEventListener('click', function () {
   // Get user grid value
   let newGrid = input.value;

   // Remove all old boxes
   const boxes = document.querySelectorAll('.box');
   boxes.forEach(function (box) {
      box.remove();
   });

   // Create new grid
   createGrid(newGrid);

   // Reset User input
   input.value = '';
});

createGrid(16);
