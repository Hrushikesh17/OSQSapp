import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userafterlogin',
  templateUrl: './userafterlogin.component.html',
  styleUrls: ['./userafterlogin.component.css']
})
export class UserafterloginComponent implements OnInit {

  constructor(public router: Router) { 
    this.uobj = JSON.parse(localStorage.getItem('userinfo'))
  }
  uobj: any

  ngOnInit(): void {
  }

   public islogIn(): boolean {
    return (localStorage.getItem('usertype') !== null);
    //return (sessionStorage.getItem('usertype') !== null);
  }

  logout() {
    localStorage.removeItem('userinfo');
    localStorage.clear();
    //OR
    //sessionStorage.removeItem('usertype');
    //sessionStorage.clear();

    //STEP 3 -REDIRECTING
    this.router.navigate(['/home']);

  }

  

}
