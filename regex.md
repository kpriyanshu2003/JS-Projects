# RegEx - Regular Expressions

```
let sentence = "The quick brown fox jumps over the lazy dog."
let regex = /pattern/flags;
let result1 = sentence.matches(regex);
let result2 = regex.test(sentence);
console.log(result1 + '  ' + result2);
```

## Test Method

Returns true if string matches the pattern else false

Syntax: `let result = regex.test(sentence);`

## Match Method

Returns an array of all words that match the pattern.

Syntax: `let result = sentence.match(regex);`

## Ignore Case while Mathings

Add a flag `i`.

Syntax: `/pattern/i`

## Match all occurences

Add flag `g`

Syntax: `/pattern/g`

## Match anything using wildcard

A period (.) is added to match for a letter

Syntax: `/patter./`

## Match Single Character with Multiple Possibilities

Use square bracket to add a set of predefined characters. True if matches any of the characters inside the bracket.

Syntax: `/patt[ern]/`

## Match Letter of Alphabet

Use `[a-z]`. Same way `[A-Z]`

Syntax: `/[a-z]/`

## Match Letters and Digits

Use `[0-9]`. YOu can use `/[0-6a-z]` to match all digits and alphabets.

Syntax: `/[0-9]/`

## Match Single Character Not Specified

Use `/[^123]/` <- Match everything except 123.

Syntax: `/[^]/`

## Match Characters that occur one or more times

Use `+` character. 1 or more

Syntax: `/s+/`

# Match Characters that occur zero or more times

Use `*` operator. 0 or more

Syntax: `/go*/`

# Match character that occrs either zero or one time

Use `?` operator. 0 or 1.

Syntax: `/t[a-z]?i/`

## Find characters with Lazy Matching

```
let string1 = 'titanic';
let regex1 = /t[a-z]*i/;    // returns everything between t and i
console.log(string1.match(regex1));

let string2 = '<h1>HEllo World</h1>';
let regex2 = /<.*>/;   // returns everything between < and >
console.log(string2.match(regex2));
```

## Find one of more characters in a Hunt

```
Q. To find 'CCC' in the group of text
let crowd = "P1P2P3P4P5P6CCCP7P8P9";
let regex = /C+/;

let result = crowd.match(regex);
console.log(result);
```

## Match Beginning and End String Patterns

Beginning : `/^Avc/` (assume string starts with Avc)

Ending : `/vbc$/` (assume string ends with vbc)

`$` is used to mark the ending of a string

## Match all numbers and letters : `/\w/g`

## Match everything except letters and numbers : `/\W/g`

## Match all digits : `/\d/g`

## Match all non numbers : `/\D/g`

## Curly Braces :

These specify the number of times the previous this can match

Syntax: `/[A-Z]{12}/` <- Matches 12 characters long alphabets

## Restrict Possible Username :

Requirement:

1. If there are numbers, they must be at the end
2. Letters can be lowercase and uppercase
3. At least two characters long. Two letter names can't have numbers

`regex = /^[A-Za-z]{2,}\d*$/`

## Match Whitespace : `/\s/`

This matches whitespace, tab space, form feed, new line charater

## Match non whitespace characters : `/\S/`

## Specify upper and lower number of matches

Syntax: `/{a,b}/`

Here, a = lower number of matches, b = upper number of matches.
If only a specified without `,` then, matches exactly a number of characters.<br>
If only a specified with `,` then matches a minimum of a and maximum of infinity.<br>
If both specified, then matches characters between a and b

## LookAheads

These are pattens that tell JS to check for patterns further along. Useful when there is a need to search for multiple patterns over the same string. There are +ve look aheads and -ve look aheads.

```
let quit = 'qu';
let noquit = 'qt';
let quRegex = /q(?=u)/;
let qRegex = /q(?!=u)/;
quit.match(quRegex);  // returns true if q is followed by u
quit.match(qRegex);   // rturns true if q is followed by anything except u
```

## Reuse Patterns using Capture Groups

Use parenthesis to create groups of regex expressions.

Example: `/(\w+)\s\1/`
Here we are searching for any set of characters which is then followed by a whitespace and the logic is repeated once.

## OR Logic

Use `|` to add an OR logic to the regex expression

## Use Capture Group to Search and Replace

We will use the replace function to replace text after we find a perfect match of it.

Syntax: `let result = sentence.replace(regex, replaceText);`

## Remove whitespace from start and end

`/^\s+|\s$/g`
