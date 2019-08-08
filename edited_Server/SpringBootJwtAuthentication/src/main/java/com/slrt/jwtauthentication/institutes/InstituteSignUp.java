package com.slrt.jwtauthentication.institutes;

import javax.persistence.Column;
import javax.persistence.Id;

public class InstituteSignUp {

	private String instituteUserName;
	private String instituteEmail;
	private String password;
	
	public InstituteSignUp() {
		// TODO Auto-generated constructor stub
	}

	public InstituteSignUp(String instituteUserName, String instituteEmail, String password) {
		super();
		this.instituteUserName = instituteUserName;
		this.instituteEmail = instituteEmail;
		this.password = password;
	}

	public String getInstituteUserName() {
		return instituteUserName;
	}

	public void setInstituteUserName(String instituteUserName) {
		this.instituteUserName = instituteUserName;
	}

	public String getInstituteEmail() {
		return instituteEmail;
	}

	public void setInstituteEmail(String instituteEmail) {
		this.instituteEmail = instituteEmail;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	
	
}
