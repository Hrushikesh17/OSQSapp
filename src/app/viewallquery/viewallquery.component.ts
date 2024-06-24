import { Component, OnInit } from '@angular/core';
import { Queryinfo } from '../_models/queryinfo.models';
import { AdminserviceService } from '../_services/adminservice.service';

@Component({
  selector: 'app-viewallquery',
  templateUrl: './viewallquery.component.html',
  styleUrls: ['./viewallquery.component.css']
})
export class ViewallqueryComponent implements OnInit {

  queryobjarr: Queryinfo[];

  constructor(public queryobj: Queryinfo, public adminobj: AdminserviceService) { }
  
  ngOnInit(): void {
    
  this.adminobj.viewallquery().subscribe((response:any) => {
      console.log("GOT REPLAY FROM SPRINGBOOT");
      
      this. queryobjarr = response;
    });
  }

}
