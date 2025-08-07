function showName(name, callback) {
  callback("Hi " + name);
}

function display(result) {
  document.getElementById("callback").innerText = result;
}

showName("Dharani", display);

var name = "Outside";

{
  let nameInside = "Inside";
  document.getElementById("scope").innerText = name + " | " + nameInside;
}
