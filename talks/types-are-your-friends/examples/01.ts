function addTyped(x: number, y: number): number {
  return x + y;
}

// console.log(`2 + 3 = ${addTyped(2, 3)}`);
// console.log(`2 + sup = ${addTyped(2, "sup")}`); // Did we _mean_ to give this a string?

function flexibleAdd(x: number, y: string | number): number {
  if (typeof y == "string") {
    y = parseInt(y);
  }
  if (isNaN(y)) {
    throw Error('y should be a number or a string parseable integer');
  }
  return x + y;
}

console.log(`2 + "2" = ${flexibleAdd(2, "2")}`);
console.log(`2 + "sup" = ${flexibleAdd(2, "sup")}`);

// console.log(`2 + true = ${flexibleAdd(2, true)}`);

// let result: number = flexibleAdd(2, [0,1]);

// console.log(`2 + [0,1] = ${result}`);