//anonymous functions
// function does not have any name 

   let temp1= function (){
        console.log("First type anonymous function is called ")
    }

    // temp1();

  let temp2=  function (a:number,b:number):number{
        return (a+b);
    }

    // let res=temp2(10,8);
    // console.log("Result is "+res);

    //fat arrow function/Arrow function 

      let temp3=()=>{
            console.log("First type of function fat arrow is called ")
        }

        // temp3();

      let temp4=  (a:number,b:number):number=>{
            return (a+b);
        }

        console.log(`
        Addition is ${temp4(7,9)}
        `)