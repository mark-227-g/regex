# Finding your cat or dog with regular expressions

## Finding

The goal of this project is to provide students with an understanding of using regex.
This topic is specific to understanding and using a regex search pattern.

## Summary

Have you ever lost your cat or dog while you have been coding for hours?
If so, you can use regular expressions to find your wayward pet.
Let's suppose your dog is trapped in a hole "\dog/" or you cat has ventured
off into the attic "/cat\\". You can follow this guide to bring your pet safely
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
  - [Author](#author)
  - [References](#references)

## Regex Components

The first step is to construct a RegExp. The RegExp is a pattern you want to find
in a string. The format is "/pattern/flags"

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

Anchors are used to mark the begining and ending of the string.
The ^ looks for the at the begining of the string
The $ looks for the at the end of the string

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
both kittan and kitten are valid.

```js

pattern = /kitt[ae]n/
results=pattern.test("kittan");
// result is true

pattern = /kitt[ae]n/
results=pattern.test("kitten");
// result is true

```

### Flags

Flags are used to alter how the search works. A common flag is 
i for ignoring case
```js

pattern = /cat/i;
results=pattern.test("cat");
// result is true

results=pattern.test("CAT");
// result is true

```

### Grouping and Capturing

Grouping will help limit the regular expression by putting the pattern
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

### Greedy and Lazy Match

### Boundaries

### Back-references

### Look-ahead and Look-behind

## Author

Mark Edwards

[github](https://github.com/mark-227-g?tab=repositories)

[linkedin](https://www.linkedin.com/in/mark-charles-edwards/)

## References

[Request-Response The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/computer-science/regex-tutorial)

[W3 Schools](https://www.w3schools.com/js/js_regexp.asp)
