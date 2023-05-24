
let searchCat="cat"
let searchDog="dog"
let results=""
let pattern = ""

pattern = /cat/;
results=pattern.test(searchCat);
console.log(results)

results=pattern.test(searchDog);
console.log(results)

pattern = /^dog/
results=pattern.test("dog");
// result is true

console.log(results)

pattern = /^dog/
results=pattern.test("my dog");
// result is false

console.log(results)

pattern = /do+g/
results=pattern.test("dooooooog");
// result is true

console.log("quant" +results)

pattern = /do+g/
results=pattern.test("dg");
// result is false

console.log("quant" +results)


pattern = /dog|cat/
results=pattern.test("dog");
// result is true

console.log("or " +results)

pattern = /dog|cat/
results=pattern.test("dogcat");
// result is true

console.log("or " +results)

pattern = /dog|cat/
results=pattern.test("fish");
// result is false

console.log("or " +results)

pattern = /kitt[ae]n/
results=pattern.test("kittan");
// result is true

console.log("char " +results)

pattern = /kitt[ae]n/
results=pattern.test("kitten");
// result is true

console.log("char " +results)

pattern = /cat/i;
results=pattern.test("cat");
// result is true

console.log("flag " +results)
pattern = /cat/i;
results=pattern.test("CAT");
// result is true

console.log("flag " +results)

pattern = /c[a]+t/;
results=pattern.test("caaaaaaaat");
// result is true

console.log("group " +results)

pattern = /(cat)/;
results=pattern.test("caaaaaaat");
// result is false

console.log("group " +results)


