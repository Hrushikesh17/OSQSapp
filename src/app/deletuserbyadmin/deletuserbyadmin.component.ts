import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../_services/adminservice.service';

@Component({
  selector: 'app-deletuserbyadmin',
  templateUrl: './deletuserbyadmin.component.html',
  styleUrls: ['./deletuserbyadmin.component.css']
})
export class DeletuserbyadminComponent implements OnInit {
  
  registrationno = ""
  showmsg = ""

  constructor(public adminserviceobj: AdminserviceService) { }

  onSubmit() {
    console.log("inside onSubmit method...")
    console.log(this.registrationno)
    
    
    //FOR INSERT INTO
    this.adminserviceobj.deleteUser(this.registrationno).subscribe((res: any) => {
      console.log("Return back")
      console.log(res)
      if (res != null)
          this.showmsg = "RECORD DELETED"
        else
          this.showmsg = "INVALID REGISTRARTION NO"

        this.registrationno = ""

    });
  }


  ngOnInit(): void {
  }

}
