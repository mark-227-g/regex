
let searchCat="cat"
let searchDog="dog"
let results=""

let pattern = /cat/;
results=pattern.test(searchCat);
console.log(results)

results=pattern.test(searchDog);
console.log(results)

