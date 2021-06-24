// Author:

// Global UI Variables
let canvasDiv;
let canvas;
let textDiv;
let textP;

// Global ML Variables
let detector;
let video;
let detections;
let isModelReady;

function setup() {
  canvasDiv = createDiv();
  canvas = createCanvas(640, 480);
  canvas.parent(canvasDiv);
  textDiv = createDiv();
  textP = createP("Model loading, please wait");
  textP.parent(textDiv);

  video = createCapture(VIDEO, )

}

function draw() {

}

function videoReady() {

}

function modelReady() {

}

function drawLabel(object) {
  // Draw a rectangular outline around the object

  // Draw the label and its confidence value near the object

}

function gotResults(error, results) {

}
