
var a1;
var a_1,a$1;

//data types
// number(int,long,short,double,float),string(''/""),boolean(true/false)
// any (number,string,boolean)
// void => it is a neutral data type => u can not store any value  
// misec.=> null & undefined => it is used as data type as well as value 

var a:number=10;   // forward declration & defination 

// console.log("Value of a is "+a);
// console.log(`----Value of a is---- ${a} `);

var str!:string;
// console.log("str value is "+str);

var myany:any;
myany=2.5;
// console.log("myany value is "+myany);
// myany='Sumit';
// console.log("myany value is "+myany);
// myany=true;
// console.log("myany value is "+myany);

//literal
var num1:number | string;
num1=3.14;
// console.log("num1 value is "+num1);
num1='sumit';
// console.log("num1 value is "+num1);

var num2:50 | boolean;
num2=50;
// console.log("num2 value is "+num2);
num2=false;
// console.log("num2 value is "+num2);

var num3!:number | null;
// console.log("num3 value is "+num3);
// num3=4.5;
// console.log("num3 value is "+num3);
// num3=null;
// console.log("num3 value is "+num3);

//type assertions
// it is used to convert one data tyep to another data type 
// pre-required => ur variable  data type has => any/Object/unknown
var b1:any;

// 1 angle bracket => .ts file 
// 2 as syntax => .ts as well as html file 

// 1 angle bracket

    var temp=(<string>b1);

// 2 as syntax

var temp1=(b1 as string);
// temp1.

//operators
// airthmatic => +,-,*,/,%
// bitwise => &,|,^,~
// logical => &&,||
// relational => <=,>=,<,>
// conditional => !=,== (it checks only value ) ,=== (strongly equality=> it checks value as well as data type a===b)
// assignment => =,+=,-=,*=,/= %=
// unary => a++,--a => post/pre inc/dec 
// ternary => condition?exporession1:expression2