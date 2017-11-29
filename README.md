&copy; ,Kailash Yogeshwar, Licensed under MIT-License

# addToSet
A library to add an element to array set if        doesn't already exist else return the source array. 

# Install
```bash
npm install addtoset -S
```

# Features

Adds element to array if it doesn't already exist in array and return the new array version with modified value if any.

``` javascript
const addToSet = require('addtoset');
const set      = new addToSet();

let arr = [1,2,3,4,5];

arr = set.push(arr, 6); // [1,2,3,4,5,6]
arr = set.push(arr, 1); // [1,2,3,4,5]

// Error if parameter is not an array
let str = "msg";

set.push(str,1); // Error: Source must be array 
```

Thank you. Happy Coding :)
