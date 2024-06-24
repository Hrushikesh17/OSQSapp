package com.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.services.AdminService;
import com.models.Queryinfo;
//import com.services.StudentService;
//import com.models.Queryansinfo;
import com.models.Studentinfo;

@RestController
@CrossOrigin(origins = "*")
public class AdminController {
	
	@Autowired
    AdminService adminobj;

	
	@GetMapping("/viewallstudents")
	public ArrayList<Studentinfo> viewallstudents(){
		
		return adminobj.viewallstudents();
	}
	
	@GetMapping("/viewallquery")
	public ArrayList<Queryinfo>  viewallquery(){
		
		return adminobj.viewallquery();
	}
	
	@PostMapping("/searchuserbyadmin")
	public ArrayList<Studentinfo> searchuserbyadmin(@RequestBody Studentinfo uobj)
	{
		return adminobj.searchuserbyadmin(uobj.getEmail());
	}
	
//	@GetMapping("/searchuserbyadmin/{email}")
//	public Studentinfo searchuserbyadmin(@PathVariable String email)
//	{
//		
//		return adminobj.searchuserbyadmin(email);
//	}
}
