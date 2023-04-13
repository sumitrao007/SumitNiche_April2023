
// 1 functions without parameter & without return type 
// 2 functions with parameter & without return type 
// 3 functions without parameter & with return type 
// 4 functions with parameter & with return type 

// 1 functions without parameter & without return type 

        function add1(){
            console.log("First type function is called..")
        }

        // add1();

// 2 functions with parameter & without return type 

    function add2(a:number,b:number){
        console.log("Addition of a+b= "+(a+b))
    }

    // add2(2,3);

    // 3 functions without parameter & with return type 

        function add3():number{
            return (8+8);
        }

        // let temp=add3();
        // console.log("Temp value is "+temp);

        // 4 functions with parameter & with return type 

        function add4(a:number,b:number):number{
            return (a+b)
        }

        console.log(`
            ------------------
            Addition ${add4(10,5)}
        `);
        
