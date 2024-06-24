import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Studentinfo } from '../_models/studentinfo.models';
import { UserserviceService } from '../_services/userservice.service';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {

  public showmsg : string  = "";
  constructor(public uobj: Studentinfo, public regobj :UserserviceService) { }

  onSubmit(form: NgForm) {
    console.log(this.uobj.fullname);
    console.log(this.uobj.email);
    console.log(this.uobj.branch);
    console.log(this.uobj.rollno);
    console.log(this.uobj.registrationno);
    console.log(this.uobj.password);

    this.regobj.userregistration(this.uobj).subscribe((response:any) => {
      console.log("GOT REPLY FROM SPRINGBOOT");
      this.showmsg = "THANK YOU FOR YOUR REGISTRATION";
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
