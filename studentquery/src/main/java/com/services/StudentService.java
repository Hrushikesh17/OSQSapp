package com.services;



import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.models.Queryansinfo;
import com.models.Queryinfo;
//import models
import com.models.Studentinfo;

//import com.services.StudentinfoRepository;

@Service
public class StudentService {
	
	@Autowired
	StudentinfoRepository studentobj;
	@Autowired
	QueryinfoRepository queryobj;
	@Autowired
	QueryansinfoRepository queryansobj;
	
	public Studentinfo addNewStudent(Studentinfo uobj) {
		
		//After save it return object which it saved
		Studentinfo saveobj = studentobj.save(uobj);
		
		return saveobj;
	}
	
	public Studentinfo userLoginCheck(Studentinfo uobj) {
		System.out.println("INSIDE userLoginCheck METHOD in SERVICE CLASS");
		
		Studentinfo uobjStudentinfo = studentobj.findByEmail(uobj.getEmail());
		
		if (uobjStudentinfo != null)
		{
			if(uobjStudentinfo.getPassword().equals(uobj.getPassword()))
			{
				return uobjStudentinfo;
			}
		}
		return null;
	}
	
	public Queryinfo addNewQuery(Queryinfo qobj) {
		
		Queryinfo saveobj = queryobj.save(qobj);
		
		return saveobj;
	}
	
	public Queryansinfo addNewQuery(Queryansinfo ansobj) {
		
		Queryansinfo saveobj = queryansobj.save(ansobj);
		return saveobj;
	}
	
public ArrayList<Queryinfo> searchquerybyuser(Integer queryid) {
		System.out.println("Inside Query Search By User.");
		
		ArrayList<Queryinfo> searchList = queryobj.findByQueryid(queryid);
		
		if(searchList.size() > 0)
			return searchList;
		else
			return null;
	}
	
}
