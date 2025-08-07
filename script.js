function welcome(name) {
  return "Welcome, " + name + "!";
}
document.getElementById("welcome").innerText = welcome("Dharani");
function findTotal(...nums) {
  return nums.reduce((a, b) => a + b);
}
document.getElementById("total").innerText = "Total: " + findTotal(10, 20, 30);
