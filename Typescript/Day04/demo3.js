//anonymous functions
// function does not have any name 
var temp1 = function () {
    console.log("First type anonymous function is called ");
};
// temp1();
var temp2 = function (a, b) {
    return (a + b);
};
// let res=temp2(10,8);
// console.log("Result is "+res);
//fat arrow function/Arrow function 
var temp3 = function () {
    console.log("First type of function fat arrow is called ");
};
// temp3();
var temp4 = function (a, b) {
    return (a + b);
};
console.log("\n        Addition is ".concat(temp4(7, 9), "\n        "));
