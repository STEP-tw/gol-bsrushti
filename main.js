const readline = require('readline-sync').question;
const {nextGeneration, returnGrid} = require('./src/gameOfLife.js');
const {printBoard} = require('./src/util.js');

const initialGeneration = readline("enter the initial generation co-ordinates: ");
const rawBounds = readline("enter the grid bounds: ");

const coordinates = initialGeneration.split(" ")
    .map(coordinates => coordinates.split(",")
        .map((coordinate) => +coordinate));

const bounds = rawBounds.split(" ").map((x) => x.split(",").map(y => +y));

//TODO change the variable name
const gridBounds = {topLeft: bounds[0], bottomRight: bounds[1]};

let currentGeneration = coordinates;
const main = function () {
    console.clear();
    const nextGenerationGrid = returnGrid(currentGeneration, gridBounds);
    currentGeneration = nextGeneration(currentGeneration, gridBounds);
    console.log(printBoard(nextGenerationGrid).join("\n"));
};

setInterval(main, 500);
