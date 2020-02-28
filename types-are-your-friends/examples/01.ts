function addTyped(x: number, y: number): number {
  return x + y;
}

console.log(`2 + 3 = ${addTyped(2, 3)}`);
console.log(`2 + sup = ${addTyped(2, "sup")}`); // Did we _mean_ to give this a string?

function flexibleAdd(x: any, y: any): any {
  return x + y;
}

console.log(`2 + sup = ${flexibleAdd(2, "sup")}`); // Did we _mean_ to give this a string?