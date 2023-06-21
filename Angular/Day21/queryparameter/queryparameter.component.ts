import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {

    myjson={
      fname:'',
      lname:'',
      status:''
    }

    dataReceived:string='';

  constructor(private route:ActivatedRoute,
              private service_notification:NotificationService) { }

  ngOnInit(): void {
    this.GetdataFromUrl();
    this.GetNotificationData();
  }

  GetNotificationData(){
      this.service_notification.notifications
      .subscribe((data)=>{
        this.dataReceived=data;
      })
  }

  GetdataFromUrl(){
    this.route.queryParamMap
    .subscribe((param:any)=>{
      this.myjson.fname=param.get("fname");
      this.myjson.lname=param.get("lname");
      this.myjson.status=param.get('status');
    })
  }


  onSend(msg:string){
      this.service_notification.sendMessage(msg);
  }

}
