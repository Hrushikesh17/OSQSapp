import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Studentinfo } from '../_models/studentinfo.models';
import { AdminserviceService } from '../_services/adminservice.service';

@Component({
  selector: 'app-searchuserbyadmin',
  templateUrl: './searchuserbyadmin.component.html',
  styleUrls: ['./searchuserbyadmin.component.css']
})
export class SearchuserbyadminComponent implements OnInit {

studentobjarr: Studentinfo[];
 showmsg = "";

 showtable = false;

  constructor(public uobj: Studentinfo, public adminobj: AdminserviceService) { }

  onSubmit(form: NgForm) {
    console.log("INSIDE ONSUBMIT METHOD");
    console.log(this.uobj.registrationno)

    this.adminobj.searchuserbyadmin(this.uobj)
      .subscribe((response: any) => {
        console.log("GOT REPLY FROM SPRING BOOT ")
        console.log(response);
        if (response != null) {
          this.studentobjarr = response
          this.showtable = true
          this.showmsg = ""
        }
        else {
          this.showmsg = "INVALID EMAIL ID"
          this.showtable = false
        }
        //CLEAR FORM
        this.resetRegForm(form);
      });
  }

  resetRegForm(form: NgForm) {
    form.resetForm();
  }
ngOnInit(): void {
  }
}



