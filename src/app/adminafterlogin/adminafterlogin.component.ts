import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminafterlogin',
  templateUrl: './adminafterlogin.component.html',
  styleUrls: ['./adminafterlogin.component.css']
})
export class AdminafterloginComponent implements OnInit {

  constructor(public router: Router) { }

  public islogIn(): boolean {
    return (localStorage.getItem('usertype') !== null);
    //return (sessionStorage.getItem('usertype') !== null);
  }

  logout() {
    localStorage.removeItem('usertype');
    localStorage.clear();
    //OR
    //sessionStorage.removeItem('usertype');
    //sessionStorage.clear();

    //STEP 3 -REDIRECTING
    this.router.navigate(['/home']);

  }

  ngOnInit(): void {
  }

}
