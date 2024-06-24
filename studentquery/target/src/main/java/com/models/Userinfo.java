package com.models;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Userinfo {
	
	private String username;
	private String useremail;
	private String userpass;

	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	@Id
	public String getUseremail() {
		return useremail;
	}
	public void setUseremail(String useremail) {
		this.useremail = useremail;
	}
	public String getUserpass() {
		return userpass;
	}
	public void setUserpass(String userpass) {
		this.userpass = userpass;
	}

}
