package com.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.models.Userinfo;

import com.services.UserService;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
	
	@Autowired
    private UserService userviceobj;	
			
	@PostMapping("/adduserrecord")
	public Userinfo addUserRecord(@RequestBody Userinfo uobj){
		
		Userinfo objreceivedfromservice = userviceobj.addNewRecordService(uobj);
		
		return objreceivedfromservice;
	}
	
	@GetMapping("/viewallrecord")
	public ArrayList<Userinfo> viewAllRecords()
	{
		System.out.println("INSIDE VIEW ALL  RECORD CONTROLLER");
		return userviceobj.viewAllRecordsService();
	}
	
	@PostMapping("/searchuser")
	public ArrayList<Userinfo> searchUserRecords(@RequestBody Userinfo uobj){
		return userviceobj.searchUserByEmail(uobj.getUseremail());
	}
	
	@PostMapping("/userlogincheck")
	public Userinfo loginCheck(@RequestBody Userinfo uobj){
	   return userviceobj.checkLogin(uobj.getUseremail(), uobj.getUserpass());
	}

}
