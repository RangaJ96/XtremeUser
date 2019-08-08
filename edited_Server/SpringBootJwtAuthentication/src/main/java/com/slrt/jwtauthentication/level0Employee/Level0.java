package com.slrt.jwtauthentication.level0Employee;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.slrt.jwtauthentication.level1Employee.Level1;

@Entity
@Table(name="level0")
public class Level0 {
	@Id
	@GeneratedValue
	@Column(name="id")
	private Long id;
	
	@Column(name="level0_user_name",unique=true)
	private String l0UserName;
	
	@Column(name="level0_user_Email",unique=true)
	private String l0UserEmail;
	
	@Column(name="first_name")
	private String l0FirstName;
	
	@Column(name="last_name")
	private String l0LastName;
	
	@Column(name="nic")
	private String l0NIC;
	
	@Column(name="telephone")
	private String l0Telephone;
	
	@Column(name="address")
	private String l0Address;
	
	@Column(name="password")
	private String l0Password;
//	
//	@OneToOne(mappedBy="level0")
//	private Institute institute;
//	
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="fk_level1")
	private Level1 level1;
	
	public Level0() {
		
	}

	public Level0(String l0UserName, String l0UserEmail, String l0FirstName, String l0LastName, String l0nic,
			String l0Telephone, String l0Address, String l0Password, Level1 level1) {
		super();
		this.l0UserName = l0UserName;
		this.l0UserEmail = l0UserEmail;
		this.l0FirstName = l0FirstName;
		this.l0LastName = l0LastName;
		l0NIC = l0nic;
		this.l0Telephone = l0Telephone;
		this.l0Address = l0Address;
		this.l0Password = l0Password;
		this.level1 = level1;
	}

	public String getL0UserName() {
		return l0UserName;
	}

	public void setL0UserName(String l0UserName) {
		this.l0UserName = l0UserName;
	}

	public String getL0UserEmail() {
		return l0UserEmail;
	}

	public void setL0UserEmail(String l0UserEmail) {
		this.l0UserEmail = l0UserEmail;
	}

	public String getL0FirstName() {
		return l0FirstName;
	}

	public void setL0FirstName(String l0FirstName) {
		this.l0FirstName = l0FirstName;
	}

	public String getL0LastName() {
		return l0LastName;
	}

	public void setL0LastName(String l0LastName) {
		this.l0LastName = l0LastName;
	}

	public String getL0NIC() {
		return l0NIC;
	}

	public void setL0NIC(String l0nic) {
		l0NIC = l0nic;
	}

	public String getL0Telephone() {
		return l0Telephone;
	}

	public void setL0Telephone(String l0Telephone) {
		this.l0Telephone = l0Telephone;
	}

	public String getL0Address() {
		return l0Address;
	}

	public void setL0Address(String l0Address) {
		this.l0Address = l0Address;
	}

	public String getL0Password() {
		return l0Password;
	}

	public void setL0Password(String l0Password) {
		this.l0Password = l0Password;
	}
//
//	public Institute getInstitute() {
//		return institute;
//	}
//
//	public void setInstitute(Institute institute) {
//		this.institute = institute;
//	}

	public Level1 getLevel1() {
		return level1;
	}

	public void setLevel1(Level1 level1) {
		this.level1 = level1;
	}
	

}
