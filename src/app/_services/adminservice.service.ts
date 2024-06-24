import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(public http: HttpClient) { }
  viewallstudents() 
  {
    console.log("inside view all students");
    return this.http.get('http://localhost:8080/viewallstudents');

  }
  viewallquery() {
    console.log("inside view all query");
    return this.http.get('http://localhost:8080/viewallquery');
  }
  
  searchuserbyadmin(uobj:any)
  {
    console.log("Reply from spring boot")
    console.log(uobj);
    return this.http.post('http://localhost:8080/searchuserbyadmin', uobj); 
  }
  // searchuserbyadmin(email){
  //   return this.http.get('http://localhost:8080/searchuserbyemail' + `/${email}`);
  // }

  deleteUser(registrationno)
  {
    console.log("inside delete user");
    console.log(registrationno);
    return this.http.delete('http://localhost:8080/deleteUser'+ `/${registrationno}`);
  }

 
}
