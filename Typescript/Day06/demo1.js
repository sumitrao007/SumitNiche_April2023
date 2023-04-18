//array
// array is growable & shrinkable dynmically 
// array is homogenous as well as hetrogenous 
// let a:number[];
var a1 = [2, 8, 9, 6];
var a2 = [];
var a3 = [7, 8, 9, 10];
var a4 = [2.5, 'Sumit', true];
var a5 = [8, 'Sumit', 6];
// for(let i=0;i<a1.length;i++){
//     console.log(`Value of a1[${i}]=${a1[i]} `)
// }
// console.log(a1);
// console.log(a1.join(" "));
// console.log(a1.join());
// foreach 
// a1.forEach((myvalue,i,temparr)=>{
//     console.log(myvalue+" Index i "+i);
//     console.log(temparr);
// });
//Rest Parameter function
function display() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log(item);
}
// display(7,8,9,10);
// display(100);
// display();
//push & pop
//LIFO= Last in First out
// var a:number[]=[];
// a.push(45);
// console.log(a)
// a.push(78,90,6,42);
// console.log(a)
// let res=a.pop();
// console.log(a)
// console.log("Poped value is "+res)
//Splice
// let a:number[]=[7,90,63,78];
// a.splice(2,0,100);
// console.log(a);
// a.splice(1,0,700,800,60)
// console.log(a);
// a.splice(4,1);
// console.log(a)
// a.splice(4,2);
// console.log(a)
// a.splice(2,1,200);
// console.log(a)
// a.splice(3,1,1000,50);
// console.log(a)
//slice 
// to copy a section of data from an array & it return a new array 
var str = ['Core java', 'Spring Boot', 'Hibernate', 'Angular 12', 'AWS', 'Docker', 'Jenking', 'selenium'];
var temp = str.slice(1, 7);
console.log("Original array :: " + str);
console.log("Copied Array :: " + temp);
var temp1 = str.slice(1);
console.log("Copied Array :: " + temp1);
var temp2 = str.slice();
console.log("Copied Array :: " + temp2);
