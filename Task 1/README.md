## Usage

```
Task 1$ cat examples/*.js
// example 1

function main() {
   const print = "World";
   log(print);
}

log("Hello");
main();
//example 2

function print() {
    console.log('this is my print !');
}

print();
log('Example 2');

Task 1$ node task1.js ./examples/*.js

Task 1$ cat examples/*.js
// example 1

function main() {
   const myPrint = "World";
   print(myPrint);
}

print("Hello");
main();
//example 2

function myPrint() {
    console.log('this is my print !');
}

myPrint();
print('Example 2');
```