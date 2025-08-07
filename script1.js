const cube = function(n) {
  return n * n * n;
};
document.getElementById("cube").innerText = "Cube: " + cube(3);
const doubleArrow = (x) => x * 2;
document.getElementById("doubleArrow").innerText = "Double: " + doubleArrow(7);

const area = (length, width) => length * width;
document.getElementById("area").innerText = "Area: " + area(5, 6);
