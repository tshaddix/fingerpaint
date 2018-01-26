import {
  Manager,
  PenTool,
  EraserTool
} from "../../lib";

window.onload = function () {
  const canvas = document.getElementById("canvas");
  const redPenElem = document.getElementById("red-pen");
  const bluePenElem = document.getElementById("blue-pen");
  const eraserElem = document.getElementById("eraser");
  
  const width = 400;
  const height = 400;
  
  const manager = new Manager(canvas, width, height);
  
  const redPen = new PenTool("red", 3);
  const bluePen = new PenTool("blue", 8);
  const eraser = new EraserTool(10);
  
  manager.setTool(redPen);
  
  redPenElem.onclick = function() {
    manager.setTool(redPen);
  };
  
  bluePenElem.onclick = function() {
    manager.setTool(bluePen);
  };
  
  eraserElem.onclick = function() {
    manager.setTool(eraser);
  };
};