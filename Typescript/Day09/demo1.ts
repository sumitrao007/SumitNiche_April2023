
export class Myclass{

   public id:number;
   private fname:string;
   protected lname:string;

    constructor(myid:number,fname:string,lname:string){
        this.id=myid;
        this.fname=fname;
        this.lname=lname;
    }

   display(){
        console.log(`
            Id          :: ${this.id}
            First name  :: ${this.fname}
            Last Name   :: ${this.lname}
        `)
    }


}

// let obj=new Myclass(9,'Sumit','Raokhande');
// obj.display();


export function add(a:number,b:number):number{
    return (a+b);
}

export const pi=3.14;
