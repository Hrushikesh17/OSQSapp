import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Queryansinfo } from '../_models/queryansinfo.models';
// import { AdminserviceService } from '../_services/adminservice.service';
import { UserserviceService } from '../_services/userservice.service';


@Component({
  selector: 'app-giveans',
  templateUrl: './giveans.component.html',
  styleUrls: ['./giveans.component.css']
})
export class GiveansComponent implements OnInit {

   public showmsg : string  = "";
  constructor(public ansobj: Queryansinfo, 
      public ansbyuser: UserserviceService) { }

  onSubmit(form: NgForm) {
    console.log(this.ansobj.queryid);
    console.log(this.ansobj.email);
    console.log(this.ansobj.ans);
    console.log(this.ansobj.date);
    console.log(this.ansobj.subject);

    this.ansbyuser.answerquery(this.ansobj).subscribe((response:any) => {
      console.log("GOT REPLY FROM SPRINGBOOT");
      this.showmsg = "THANK YOU FOR YOUR ANSWER";
       // CLEAR THE FROM
       this.restRegFrom(form);
    });
  }

   restRegFrom(form: NgForm){
    form.resetForm();
  }

  ngOnInit(): void {
  }

}
