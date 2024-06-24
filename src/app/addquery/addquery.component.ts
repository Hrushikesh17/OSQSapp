import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Queryinfo } from '../_models/queryinfo.models';
import { UserserviceService } from '../_services/userservice.service';

@Component({
  selector: 'app-addquery',
  templateUrl: './addquery.component.html',
  styleUrls: ['./addquery.component.css']
})

export class AddqueryComponent implements OnInit {

  public showmsg : string  = "";
  constructor(public qobj: Queryinfo, public writeobj: UserserviceService) { }

  onSubmit(form: NgForm){
     console.log(this.qobj.subject);
     console.log(this.qobj.query);
     console.log(this.qobj.email);
     console.log(this.qobj.date);

     this.writeobj.addquery(this.qobj).subscribe((response:any) => {
      console.log("GOT REPLY FROM SPRINGBOOT");
      this.showmsg = "THANK YOU FOR YOUR QUERY";
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
