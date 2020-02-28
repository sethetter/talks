// Dynamic typing can result in weird behavior.
function add(x, y) {
  return x + y;
}

console.log(`2 + 3 = ${add(2, 3)}`);
console.log(`2 + sup = ${add(2, "sup")}`); // Did we _mean_ to give this a string?