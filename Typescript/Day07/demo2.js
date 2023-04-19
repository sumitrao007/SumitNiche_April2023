//Shallow Copy & deep Copy (Js Interview Question)
var a = 30;
var b = a;
// console.log(`
//     a=> ${a}
//     b=> ${b}
// `);
// b=70;
// console.log(`
//     a=> ${a}
//     b=> ${b}
// `);
var arr = [100, 45, 80, 96];
// let arr1=arr;
// console.log(`
//     arr=> ${arr}
//     arr1=> ${arr1}
// `)
// arr1[1]=900;
// console.log(`
//     arr=> ${arr}
//     arr1=> ${arr1}
// `)
var arr2 = arr.slice(0);
console.log("\n    arr=> ".concat(arr, "\n    arr2=> ").concat(arr2, "\n"));
arr2[1] = 600;
console.log("\n    arr=> ".concat(arr, "\n    arr2=> ").concat(arr2, "\n"));
