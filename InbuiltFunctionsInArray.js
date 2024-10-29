//push add the element at the end
let arr = [1, 2, 3];
arr.push(4, 5);
console.log("arr  :"+arr); 

//pop remove the last element
let brr = [1, 2, 3];
arr.pop();
console.log(brr);

//shift remove the first element
let crr = [1, 2, 3];
arr.shift();
console.log(crr); 

//unshift add one or more element to the beginning
let drr = [2, 3];
arr.unshift(1);
console.log(drr);

//concat combines two or more array and returns a new array
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);
console.log(combined); 

//slice Extracts a section of an array and returns a new array.
let err = [1, 2, 3, 4, 5];
let sliced = err.slice(1, 3);
console.log(sliced); 

//splice Adds/removes elements from an array at a specific index.
let frr = [1, 2, 3, 4];
frr.splice(2, 0, '2.5'); 
console.log(frr); 


//indexOf()  Returns the index of the first occurrence of an element, or -1 if not found.
let grr = [1, 2, 3, 4];
console.log(grr.indexOf(3)); 
console.log(grr.indexOf(5)); 


//includes  Checks if an array contains a specified element.
let hrr = [1, 2, 3];
console.log(hrr.includes(2)); 
console.log(hrr.includes(5)); 

//join  Combines all elements into a string, separated by a specified separator.
let irr = ['Hello', 'World'];
let joined = irr.join(' ');
console.log(joined); 


//reverse()  Reverses the order of elements in an array.
let jrr = [1, 2, 3];
arr.reverse();
console.log(jrr); 


//sort() Sorts the elements of an array
let krr = [3, 1, 4, 2];
krr.sort();
console.log(krr); 

// map()  Creates a new array with the results of calling a function on every element.
let lrr = [1, 2, 3];
let squared = lrr.map(x => x * x);
console.log(squared); 


//filter()  Creates a new array with elements that pass a test.
let mrr = [1, 2, 3, 4];
let even = mrr.filter(x => x % 2 === 0);
console.log(even); 


//reduce() Reduces the array to a single value by executing a reducer function.
let nrr = [1, 2, 3, 4];
let sum = nrr.reduce((acc, curr) => acc + curr, 0);
console.log(sum); 


//find() Returns the first element that satisfies a provided test function.
let prr = [5, 12, 8, 130, 44];
let found = prr.find(element => element > 10);
console.log(found); 


//findIndex() Returns the index of the first element that satisfies a test function, or -1 if not found.
let qrr = [5, 12, 8, 130, 44];
let index = qrr.findIndex(element => element > 10);
console.log(index); 














