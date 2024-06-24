package com.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

//import model class
import com.models.Studentinfo;
import com.models.Queryansinfo;
import com.models.Queryinfo;

import com.services.StudentService;

@RestController
@CrossOrigin(origins = "*")
public class StuduentController {
	
	@Autowired
	StudentService studentobj;
	
	@PostMapping("/userregistration")
	public Studentinfo userregistration(@RequestBody Studentinfo uobj){
		
		Studentinfo objectreceivedfromservice = studentobj.addNewStudent(uobj);
		
		return objectreceivedfromservice;
	}
	
	@PostMapping("/userlogincheck")
	public Studentinfo userlogincheck(@RequestBody Studentinfo uobj) {
		
		Studentinfo uobjStudentinfo = studentobj.userLoginCheck(uobj);
		
		if (uobjStudentinfo != null) {
			return uobjStudentinfo;
		}
		
		else {
			return null;
		}
	}
	
	@PostMapping("/addquery")
	public Queryinfo addquery(@RequestBody Queryinfo qobj) {
//		System.out.println(qobj.getEmail());
//		System.out.println(qobj.getSubject());
		
		Queryinfo objectreceived = studentobj.addNewQuery(qobj);
		
		return objectreceived;
	}
	
	@PostMapping("/answerquery")
	public Queryansinfo answerquery(@RequestBody Queryansinfo ansobj) {
		
		Queryansinfo objectQueryansinfo = studentobj.addNewQuery(ansobj);
		
		return objectQueryansinfo;
	}
	
	@PostMapping("/searchquerybyuser")
	public ArrayList<Queryinfo> searchquerybyuser(@RequestBody Queryinfo qobj) {
//		System.out.println("Inside the controller.");
		return  studentobj.searchquerybyuser(qobj.getQueryid());
	}
}
