//optional parameter function

function add1(a:number,b?:number){
    console.log("Value of a is "+a);//10
    console.log("Value of b is "+b);//undefined
    console.log("Addition of a+b is "+(a+b!));//NAN => not a number 
}

// add1(10);
// add1(10,2)

function add2(a?:number,b?:number){
    console.log("Value of a is "+a);//10
    console.log("Value of b is "+b);//undefined
    console.log("Addition of a+b is "+(a!+b!));//NAN => not a number 
}

// add2();
// add2(4,5);


// default parameter function

function add3(a:number,b:number=10){
    console.log("Value of a is "+a);//4
    console.log("Value of b is "+b);//8
    console.log("Addition of a+b is "+(a!+b!));//17
}

// add3(7)

// add3(4,8);

function add4(a:number=20,b?:number){
    console.log("Value of a is "+a);//20
    console.log("Value of b is "+b);//undefined
    console.log("Addition of a+b is "+(a!+b!));//17
}

// add4(45,5);

add4();