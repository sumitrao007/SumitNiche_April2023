//array
// array is growable & shrinkable dynmically 
// array is homogenous as well as hetrogenous 

// let a:number[];
let a1:number[]=[2,8,9,6];
let a2:number[]=[];
let a3=[7,8,9,10];
let a4:any[]=[2.5,'Sumit',true];
let a5=[8,'Sumit',6];

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

    function display(...item:number[]){
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

let str:string[]=['Core java','Spring Boot','Hibernate','Angular 12','AWS','Docker','Jenking','selenium'];

let temp=str.slice(1,7);
console.log("Original array :: "+str);
console.log("Copied Array :: "+ temp);
let temp1=str.slice(1);
console.log("Copied Array :: "+ temp1);
let temp2=str.slice();
console.log("Copied Array :: "+ temp2);








