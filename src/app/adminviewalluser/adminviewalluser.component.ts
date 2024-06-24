import { Component, OnInit } from '@angular/core';
import { Studentinfo } from '../_models/studentinfo.models';
import { AdminserviceService } from '../_services/adminservice.service';

@Component({
  selector: 'app-adminviewalluser',
  templateUrl: './adminviewalluser.component.html',
  styleUrls: ['./adminviewalluser.component.css']
})
export class AdminviewalluserComponent implements OnInit {


  studentobjarr: Studentinfo[];
  constructor(public uobj: Studentinfo, public adminobj: AdminserviceService) { }

  ngOnInit(): void {
    
    this.adminobj.viewallstudents().subscribe((response:any) => {
      console.log("GOT REPLAY FROM SPRINGBOOT");
      
      this.studentobjarr = response;
    });
  }

}
