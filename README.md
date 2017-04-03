&copy; ,Kailash Yogeshwar, Licensed under MIT-License

# addToSet
A library to add an element to array set if doesn't already exist else return the source array. 

# Install
```bash
npm install addtoset -S
```

# Features

Adds element to array if it doesn't already exist in array and return the new array version with modified value if any.

``` javascript
const addToSet = require('addtoset');
let arr = [1,2,3,4,5];

addToSet.push(arr, 6); // [1,2,3,4,5,6]
addToSet.push(arr, 1); // [1,2,3,4,5]

// Error if parameter is not array
let str = "msg";

addToSet.push(str,1); // Error: Source must be array 
```

Thank you. Happy Coding