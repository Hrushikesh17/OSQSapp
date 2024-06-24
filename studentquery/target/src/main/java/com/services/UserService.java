package com.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.models.Userinfo;

@Service
public class UserService {
	
	@Autowired
	UserInfoRepository urepo;
		
	public Userinfo addNewRecordService(Userinfo uobj) {
		
		//After save it return the object which it saved
		Userinfo savedobj = urepo.save(uobj);
		
		return savedobj;
	}
	
	public ArrayList<Userinfo> viewAllRecordsService()
	{
      ArrayList<Userinfo> alluserdetails = new ArrayList<Userinfo>();
		
      urepo.findAll().forEach(alluserdetails::add);

      System.out.println(alluserdetails.size());
       
	  return alluserdetails;
	}
	
	public ArrayList<Userinfo> searchUserByEmail(String email) 
	{
		ArrayList<Userinfo> searchedlist = urepo.findByUseremail(email);
		
		if (searchedlist.size() > 0)
			return searchedlist;
		else
			return null;
	}
	
	
	public Userinfo checkLogin(String email,String pass) 
	{
		ArrayList<Userinfo> searchedlist = urepo.findByUseremail(email);
		
		if (searchedlist.size() > 0)
		{
			if(searchedlist.get(0).getUserpass().equals(pass))
				return searchedlist.get(0);
			else
				return null;
		}
		else
			return null;
	}
	
}