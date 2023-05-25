# Finding your cat or dog with regular expressions

## Finding

The goal of this project is to provide students with an understanding of using regex.
This topic is specific to understanding and using a regex search pattern.

## Summary

Have you ever lost your cat or dog while you have been coding for hours?
If so, you can use regular expressions to find your wayward pet.
Let's suppose your dog is trapped in a hole "\dog/" or you cat has ventured
off into the attic "/cat\\". You can follow this guide to bring your pet safely.
back to you.

## Table of Contents

- [Finding your cat or dog with regular expressions](#finding-your-cat-or-dog-with-regular-expressions)
  - [Finding](#finding)
  - [Summary](#summary)
  - [Table of Contents](#table-of-contents)
  - [Regex Components](#regex-components)
    - [Anchors](#anchors)
    - [Quantifiers](#quantifiers)
    - [OR Operator](#or-operator)
    - [Character Classes](#character-classes)
    - [Flags](#flags)
    - [Grouping and Capturing](#grouping-and-capturing)
    - [Bracket Expressions](#bracket-expressions)
    - [Greedy and Lazy Match](#greedy-and-lazy-match)
    - [Boundaries](#boundaries)
    - [Back-references](#back-references)
    - [Look-ahead and Look-behind](#look-ahead-and-look-behind)
  - [Conclusion](#conclusion)
  - [Author](#author)
  - [References](#references)

## Regex Components

The first step is to construct a RegExp. The RegExp is a pattern you want to find in a string. The format is "/pattern/flags"

```js
//Example
let pattern = /cat/;
```

Once you have your pattern defined you can use it to search a string

```js

results=pattern.test("cat");
// result is true

results=pattern.test("dog");
// result if false

```

### Anchors

Anchors are used to mark the beginning and ending of the string.
The ^ looks for the at the beginning of the string.
The $ looks for the at the end of the string.

```js

//Example
pattern = /^dog/
results=pattern.test("dog");
// result is true

pattern = /^dog/
results=pattern.test("my dog");
// result is false

```

### Quantifiers

A quantifier is how many times the pattern can exist in the string

```js

pattern = /do+g/
results=pattern.test("dooooooog");
// result is true

pattern = /do+g/
results=pattern.test("dg");
// result is false

```

### OR Operator

The or operator is for matching one pattern or another pattern

```js

pattern = /dog|cat/
results=pattern.test("dog");
// result is true

pattern = /dog|cat/
results=pattern.test("dogcat");
// result is true

pattern = /dog|cat/
results=pattern.test("fish");
// result is false

```

### Character Classes

Character classes are used to match one or more characters. In this example
both grey and gray are valid.

```js

pattern = /gr[ae]y/
results=pattern.test("grey");
// result is true

pattern = /gr[ae]y/
results=pattern.test("gray");
// result is true

```

### Flags

Flags are used to alter how the search works. A common flag is i for ignoring case.

```js

pattern = /cat/i;
results=pattern.test("cat");
// result is true

results=pattern.test("CAT");
// result is true

```

### Grouping and Capturing

Grouping will help limit the regular expression by putting the pattern.
in ()

```js

pattern = /c[a]+t/;
results=pattern.test("caaaaaaaat");
// result is true

pattern = /(cat)/;
results=pattern.test("caaaaaaat");
// result is false
```

### Bracket Expressions

Bracket Expressions are the most used part of regular expressions. Use these to validate the characters in a sting. They can also cause some frustration until you get the hang of then. Follow along with these examples.

```js
//Example 1
pattern = /[a..z]/;
results=pattern.test("the dog took a walk");
// result is true
//Example 2
pattern = /[b..z]/;
results=pattern.test("The dog took a walk");
// result is false
//Example 3
pattern = /[a..z]/;
results=pattern.test("The dog took a walk");
// result is true
console.log("bracket1e--- " +results)
//Example 4
pattern = /[A..Z]/;
results=pattern.test("The dog took a walk");
// result is true
//Example 5
pattern = /[A..Z]/;
results=pattern.test("the dog took a walk");
// result is false
```

Now carefully follow along with the explanations.

- Example 1 is true because it contains lower case characters
- Example 2 is false because the pattern does not include a.
- Those were easy but now look at the other examples carefully looking at the work the.
  - Example 3 is true because it matches lower case letters.
  - Example 4 is true because it matches both lower case and upper case letters.
  - Example 5 is false because it does not have any uppercase letters.

### Greedy and Lazy Match

Greedy expressions contain *,+,? {m,n}
Lazy expressions contain*?,+?,?? {m,n}

Again follow along. All three are true because the * matches zero or more times.

```js

pattern = /ca*t/;
results=pattern.test("caaaaaaat");
// result is true

pattern = /a*/;
results=pattern.test("dog");
// result is true

pattern = /b*/;
results=pattern.test("caaaaaaat");
// result is true

```

Now if we use + only the first example is true. The + means 1 or more characters

```js

pattern = /a+/;
results=pattern.test("caaaaaaa");
// result is true

pattern = /a+/;
results=pattern.test("dog");
// result is false

pattern = /b+/;
results=pattern.test("caaaaaaa");
// result is false

```

Now using the same examples we can use a ? at the end. This means the character before the ? occues 0 or more times

```js

pattern = /a?/;
results=pattern.test("caaaaaaa");
// result is true

pattern = /a?/;
results=pattern.test("dog");
// result is true

pattern = /b?/;
results=pattern.test("caaaaaaa");
// result is true

```

### Boundaries

While [] were more complicated boundaries are easy. The two boundries are ^ (starts with) and $ (ends with)

```js

pattern = /^c/;
results=pattern.test("cat");
// result is true

pattern = /^c/;
results=pattern.test("dog");
// result is false

pattern = /t$/;
results=pattern.test("cat");
// result is false

pattern = /t$/;
results=pattern.test("dog");
// result is false

```

### Back-references

Now we are "back" to another harder to understand topic. The first example is true because there are three numbers in a row. The second example is false beacut it is looking for four numbers in a row. The third example finds three number in a row anywhere in the string.

```js

pattern = /\d\d\d/;
results=pattern.test("123");
// result is true

pattern = /\d\d\d\d/;
results=pattern.test("123");
// result is false

pattern = /\d\d\d/;
results=pattern.test("this is a test 123 for back-reference");
// result is true

```

### Look-ahead and Look-behind

These are used for looking ahead of a charater for another of looking behind. Here are some examples

```js

pattern = /a(?=t)/;
results=pattern.test("cat");
// result is true

pattern = /a(?=t)/;
results=pattern.test("can");
// result is false

pattern = /(c=?)a/;
results=pattern.test("cat");
// result is true

pattern = /(c=?)a/;
results=pattern.test("mat");
// result is false

```

## Conclusion

In conclustion this is how you find your cat

```js

pattern = /\/cat\\/;
results=pattern.test("\/cat\\");
// result is true

```

and how to find your dog

```js
pattern = /\\dog\//;
results=pattern.test("\\dog\/");
// result is true

```

This is not very easy due to all the escaping required. Always watch your slashes

## Author

Mark Edwards

[github](https://github.com/mark-227-g?tab=repositories)

[linkedin](https://www.linkedin.com/in/mark-charles-edwards/)

## References

[Request-Response The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/computer-science/regex-tutorial)

[W3 Schools](https://www.w3schools.com/js/js_regexp.asp)
