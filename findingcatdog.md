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
  - [References](#references)

## Regex Components

The first step is to construct a RegExp. The RegExp is a pattern you want to find
in a string.

```js
//Example
let pattern = /cat/;
```

Once you have your pattern defined you can use it to search a string

```js

results=pattern.test("cat");
// result is true

results=pattern.test("");
// result if false

```

### Anchors

### Quantifiers

### OR Operator

### Character Classes

### Flags

### Grouping and Capturing

### Bracket Expressions

### Greedy and Lazy Match

### Boundaries

### Back-references

### Look-ahead and Look-behind

Mark Edwards

[github](https://github.com/mark-227-g?tab=repositories)
[linkedin](https://www.linkedin.com/in/mark-charles-edwards/)

## References

[Request-Response The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/computer-science/regex-tutorial)
[W3 Schoold](https://www.w3schools.com/js/js_regexp.asp)
