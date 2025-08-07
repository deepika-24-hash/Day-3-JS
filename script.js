function welcome(name) {
  return "Hello, " + name + "!";
}
document.getElementById("Hello").innerText = hello("Deepika");
function findTotal(...nums) {
  return nums.reduce((a, b) => a + b);
}
document.getElementById("total").innerText = "Total: " + findTotal(10, 20, 30);

