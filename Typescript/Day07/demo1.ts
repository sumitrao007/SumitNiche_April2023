
//map
let a:number[]=[2,3,4,5];

let sqrArray=a.map((value)=>{
    return (value*value);
})

// console.log("Original array "+a);
// console.log("Square Array "+sqrArray);


//destructing/derefrence of array 

let arr=[100,78,96,45];
let [t1,t2,t3,t4]=arr;

console.log(`
    t1 => ${t1}
    t2 => ${t2}
    t3 => ${t3}
    t4 => ${t4}
`);

let [s1,...arr2]=arr;

console.log(`
    s1 => ${s1}
    arr2 = ${arr2}
`)