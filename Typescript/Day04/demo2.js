// 1 functions without parameter & without return type 
// 2 functions with parameter & without return type 
// 3 functions without parameter & with return type 
// 4 functions with parameter & with return type 
// 1 functions without parameter & without return type 
function add1() {
    console.log("First type function is called..");
}
// add1();
// 2 functions with parameter & without return type 
function add2(a, b) {
    console.log("Addition of a+b= " + (a + b));
}
// add2(2,3);
// 3 functions without parameter & with return type 
function add3() {
    return (8 + 8);
}
// let temp=add3();
// console.log("Temp value is "+temp);
// 4 functions with parameter & with return type 
function add4(a, b) {
    return (a + b);
}
console.log("\n            ------------------\n            Addition ".concat(add4(10, 5), "\n        "));
