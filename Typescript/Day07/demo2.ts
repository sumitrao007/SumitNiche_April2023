//Shallow Copy & deep Copy (Js Interview Question)

let a=30;
let b=a;

// console.log(`
//     a=> ${a}
//     b=> ${b}
// `);

// b=70;
// console.log(`
//     a=> ${a}
//     b=> ${b}
// `);


let arr=[100,45,80,96];

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

let [...arr2]=arr;
console.log(`
    arr=> ${arr}
    arr2=> ${arr2}
`)

arr2[1]=600;

console.log(`
    arr=> ${arr}
    arr2=> ${arr2}
`)
