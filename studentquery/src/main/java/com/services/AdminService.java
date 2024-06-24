package com.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.models.Queryinfo;
import com.models.Studentinfo;

@Service
public class AdminService {
	
	@Autowired
	AdminServiceRepository adminobj;
	@Autowired
	StudentinfoRepository studentrep;
	@Autowired
	QueryinfoRepository queryobj;
	
	public ArrayList<Studentinfo> viewallstudents()
	{
		ArrayList<Studentinfo> allstudentdetails = new ArrayList<Studentinfo>();
		
		studentrep.findAll().forEach(allstudentdetails::add);
		
		return allstudentdetails;
	}
	
	public ArrayList<Queryinfo>viewallquery()
	{
		ArrayList<Queryinfo> allquerydetails = new ArrayList<Queryinfo>();
		
		queryobj.findAll().forEach(allquerydetails::add);
		
		return allquerydetails;
	}
	
	public ArrayList<Studentinfo> searchuserbyadmin(String email)
	{
		ArrayList<Studentinfo> searchedlist = adminobj.findByEmail(email);
//		System.out.println(searchedlist.size());
		
		if(searchedlist.size() > 0)
			return searchedlist;
		else
			return null;
	}
	

}
