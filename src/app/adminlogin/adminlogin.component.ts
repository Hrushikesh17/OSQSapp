import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

public adminloginid: string = "";
  public adminpassword: string = "";

  showmsg = ""
  constructor(public router: Router) { }

  onSubmit() {
    //console.log(this.adminloginid);
    //console.log(this.adminpassword);

    var uidmatch = this.adminloginid.localeCompare("admin");
    var passmatch = this.adminpassword.localeCompare("pass");

    if ((uidmatch == 0) && (passmatch == 0)) {
      console.log(" WELCOME ADMIN : Match");

      // STORE VALUE IN SESSION [KEY : VALUE]
      localStorage.setItem('usertype', 'ADMIN');
      //sessionStorage.setItem('usertype', 'ADMIN');

      //3. REDIRECT TO ADMIN_AFTER_LOGIN_COMPONENT
      this.router.navigate(['/adminafterlogin']);

    }
    else {
      console.log(" WRONG USERID OR PASSWORD ");

      //DISPLAY ERROR MSG
      this.showmsg = "INVALID UID OR PASSWORD";

      //CLEAR THE FIELD
      this.adminloginid = "";
      this.adminpassword = "";
    }

  }

  ngOnInit(): void {
  }

}

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
