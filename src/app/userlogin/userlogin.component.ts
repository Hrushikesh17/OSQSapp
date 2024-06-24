// import { UserserviceService } from './../_services/userservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Studentinfo } from '../_models/studentinfo.models';
import { UserserviceService } from '../_services/userservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  showmsg = ""

  constructor(public uobj: Studentinfo,public serviceobj: UserserviceService ,
     public routerobj: Router) { }

  onSubmit(form: NgForm) {
    console.log("inside onSubmit");


    // FOR INSERT 
    this.serviceobj.userlogincheck(this.uobj).subscribe((res:any) =>
    {
       console.log("RETURN BACK From Server");
        console.log(res)
        if (res != null) {
          // let uinfoobj = JSON.stringify(res)
          // console.log(uinfoobj)
          localStorage.setItem('userinfo', JSON.stringify(res));

          //3. REDIRECT TO ADMIN_AFTER_LOGIN_COMPONENT
          this.routerobj.navigate(['/userafterlogin']);
        }
        else {
          this.showmsg = "INVALID UID OR PASSWORD"
        }

      });

      
      //CLEAR FORM
    this.resetRegForm(form);
    
  }

  resetRegForm(form: NgForm) {
    form.resetForm();
  }

  ngOnInit(): void {
  }

}

