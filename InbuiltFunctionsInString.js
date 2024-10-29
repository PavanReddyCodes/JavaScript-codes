//charAt returns the character at the specific index
let str="pavan Reddy"
console.log(str.charAt(0))

//charCodeAt  returns the unicode 
console.log(str.charCodeAt())

//concat combine two or more strings and return a new string
let str1="Reddy"
console.log(str.concat(str1))

//includes() Determines whether one string may be found within another string, returning true or false.
console.log(str.includes("Reddy"))

//indexOf()  Returns the index of the first occurrence of a specified value in a string, or -1 if not found.
console.log(str.indexOf("p"))


//lastIndexOf()  Returns the index of the last occurrence of a specified value in a string, or -1 if not found.
console.log(str.lastIndexOf("Reddy"))

//slice(startIndex, endIndex) Extracts a section of a string and returns it as a new string. The original string is not modified.
console.log(str.slice(6,12))


//replace(searchValue, newValue)  Returns a new string with some or all matches of a pattern replaced by a replacement.
console.log(str.replace("Reddy" , "REDDY"))

//toLowerCase() converts all characters in string to lowercase
console.log(str.toLocaleLowerCase())

//toUppercase() converts all characters in string to uppercase
console.log(str.toUpperCase())

//trim() remove white spaces of both ends
console.log(str.trim())


//StartsWith() determines whether the string starts with characters of a specified string
console.log(str.startsWith("pavan"))

//endsWith() determines whether the string ends with characters of a specified string
console.log(str.endsWith("Reddy"))