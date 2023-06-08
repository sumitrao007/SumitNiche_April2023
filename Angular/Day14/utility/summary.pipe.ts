
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"summary",
     pure:true
   // pure:false
})
export class SummaryPipe implements PipeTransform
{
    transform(value: any,start:number=0,end:number=25) {
        console.log("transform method call ");
        let temp=(<string>value);

      //  return (temp.substring(0,25)+"...");
      return (temp.substring(start,end)+"...");

    }



}