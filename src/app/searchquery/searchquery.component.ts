import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Queryinfo } from '../_models/queryinfo.models';
import { UserserviceService } from '../_services/userservice.service';

@Component({
  selector: 'app-searchquery',
  templateUrl: './searchquery.component.html',
  styleUrls: ['./searchquery.component.css']
})
export class SearchqueryComponent implements OnInit {


  queryobjarr: Queryinfo[];
  showmsg: string = '';
  showtable: boolean = false;

  constructor(public qobj:Queryinfo, public uobj: UserserviceService) { }

  onSubmit(form: NgForm){
    console.log("INSIDE ONSUBMIT METHOD");
    console.log(this.qobj.queryid)

    this.uobj.searchquerybyuser(this.qobj)
    .subscribe((response:any) => {
      console.log("GOT REPLY FROM SPRING BOOT ")
      console.log(response);

      if (response != null) {
          this.queryobjarr = response
          this.showtable = true
          this.showmsg = ""
        }
        else {
          this.showmsg = "INVALID QUERY ID"
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
