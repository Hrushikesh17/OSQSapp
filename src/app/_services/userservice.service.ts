import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(public http: HttpClient) { }

  userregistration(uobj: any) 
  {
    return this.http.post('http://localhost:8080/userregistration', uobj);
  }

  addquery(qobj: any) 
  {
    return this.http.post('http://localhost:8080/addquery', qobj);
  }
  
  answerquery(ansobj:any) {
    return this.http.post('http://localhost:8080/answerquery', ansobj);
  }

   userlogincheck(uobj: any) {
    console.log("INSIDE SERVICE userlohincheck Method")
    return this.http.post('http://localhost:8080/userlogincheck', uobj);
  }

  searchquerybyuser(qobj: any) {
    console.log("Reply from spring boot")
    console.log(qobj);
    return this.http.post('http://localhost:8080/searchquerybyuser', qobj);
  }
  
}
