
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

pattern = /gr[ae]y/
results=pattern.test("grey");
// result is true

console.log("char " +results)

pattern = /gr[ae]y/
results=pattern.test("gray");
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

pattern = new RegExp("[a..z]");
results=pattern.test("cat");
// result is true

console.log("bracket1 " +results)

pattern = /\.$/;
results=pattern.test("The dog took a walk?");
// result is true

console.log("bracket2 " +results)

pattern = /[a..z0..9]/;
results=pattern.test("The do9g took a walk?");
// result is true

console.log("brackete " +results)

pattern = /[a..z]^[A..Z]/;
results=pattern.test("The dog took a walk");
// result is true

console.log("brackete " +results)


pattern = /[0..9]+/
results=pattern.test("a9");
// result is true

console.log("brackete " +results)


pattern = /[a..z]/;
results=pattern.test("the dog took a walk");
// result is true
console.log("brackete " +results)

pattern = /[0..9]/;
results=pattern.test(" the dog took a walk");
// result is true
console.log("brackete " +results)

pattern = /[a..z]/;
results=pattern.test("the dog took a walk");
// result is true

console.log("brackete " +results)

pattern = /[a..z]/;
results=pattern.test("the dog took a walk");
// result is true
console.log("bracket1e--- " +results)



pattern = /[b..z]/;
results=pattern.test("The dog took a walk");
// result is false
console.log("bracket1eaaaaa " +results)

pattern = /[a..z]/;
results=pattern.test("The dog took a walk");
// result is true
console.log("bracket1e--- " +results)

pattern = /[a..zA..Z]/;
results=pattern.test("The dog took a walk");
// result is true
console.log("bracket2ebbbb " +results)

pattern = /[[A..Z]/;
results=pattern.test("The dog took a walk");
// result is true
console.log("bracket2ecccc " +results)

console.log("=======")

pattern = /a*/;
results=pattern.test("caaaaaaat");
// result is true
console.log("greedy " +results)

pattern = /a*/;
results=pattern.test("dog");
// result is true
console.log("greedy " +results)

pattern = /b*/;
results=pattern.test("caaaaaaat");
// result is true
console.log("greedy " +results)

pattern = /a+/;
results=pattern.test("caaaaaaa");
// result is true
console.log("greedy " +results)

pattern = /a+/;
results=pattern.test("dog");
// result is true
console.log("greedy " +results)

pattern = /b+/;
results=pattern.test("caaaaaaa");
// result is true
console.log("greedy " +results)

pattern = /a?/;
results=pattern.test("caaaaaaa");
// result is true
console.log("greedy " +results)

pattern = /a?/;
results=pattern.test("dog");
// result is true
console.log("greedy " +results)

pattern = /b?/;
results=pattern.test("caaaaaaa");
// result is true
console.log("greedy " +results)

console.log("=======")

pattern = /^c/;
results=pattern.test("cat");
// result is true
console.log("boundry " +results)

pattern = /^c/;
results=pattern.test("dog");
// result is false
console.log("boundry " +results)

pattern = /t$/;
results=pattern.test("cat");
// result is false
console.log("boundry " +results)

pattern = /t$/;
results=pattern.test("dog");
// result is false
console.log("boundry " +results)

console.log("=======")

pattern = /a(?=t)/;
results=pattern.test("cat");
// result is true
console.log("look ahead " +results)

pattern = /a(?=t)/;
results=pattern.test("can");
// result is false
console.log("look ahead " +results)

pattern = /(c=?)a/;
results=pattern.test("cat");
// result is true
console.log("look ahead " +results)

pattern = /(c=?)a/;
results=pattern.test("mat");
// result is false
console.log("look ahead " +results)

console.log("=======")

pattern = /\d\d\d/;
results=pattern.test("123");
// result is true
console.log("back ref " +results)
pattern = /\d\d\d\d/;
results=pattern.test("123");
// result is true
console.log("back ref " +results)

pattern = /\d\d\d/;
results=pattern.test("this is a test 123 for back-reference");
// result is true
console.log("back ref " +results)

pattern = /\/cat\\/;
results=pattern.test("\/cat\\");
// result is true
console.log("back ref " +results)

pattern = /\\dog\//;
results=pattern.test("\\dog\/");
// result is true
console.log("back ref " +results)
