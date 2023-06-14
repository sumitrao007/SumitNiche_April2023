import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  id:number=0;
  title:string='';
  body:string='';
  posts:any[]=[];
  isHidden:boolean=true;

  constructor(private service:HttpService) { }

  ngOnInit(): void {
    this.GetPost();
  }
  GetPost(){
      this.service.getPost()
      .subscribe((response:any)=>{
        console.log(response)
        this.posts=response;
      },(myerror)=>{
        // alert('Error occured...');

        if(myerror.status>=400 && myerror.status<=499){
          alert("Client Side Error "+myerror.status);
        }else if(myerror>=500 && myerror.status<=599){
          alert("Server Side Error");
        }else{
          alert("Something is went to wrong...")
        }

      })
  }

  onSend(mytitle:any,mybody:any){
      let obj={
        title:mytitle,
        body:mybody
      }

      this.service.PostData(obj)
      .subscribe((response)=>{
        console.log(response)
      })

  }

  onEdit(item:any){
    console.log(item);
    this.id=item.id;
    this.title=item.title;
    this.body=item.body;
    this.isHidden=false;
  }

  onUpdate(){

    let obj={
      id:this.id,
      title:this.title,
      body:this.body
    }

    this.service.UpdateData(obj)
    .subscribe((response)=>{
      console.log(response);
      this.isHidden=true;
    })

  }

  onDelete(id:any){
      this.service.deleteData(id)
      .subscribe((response)=>{
        console.log(response);
      })
  }

}
