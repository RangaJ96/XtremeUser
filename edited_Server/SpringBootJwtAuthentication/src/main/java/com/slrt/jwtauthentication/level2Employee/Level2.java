package com.slrt.jwtauthentication.level2Employee;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;



@Entity
@Table(name="level2")
public class Level2 {
	
	@Id
	@GeneratedValue
	@Column(name="id")
	private Long id;
	
	@Column(name="level2_user_name",unique=true)
	private String l2UserName;
	
	@Column(name="level2_user_email",unique=true)
	private String l2UserEmail;
	
	@Column(name="first_name")
	private String l2FirstName;
	
	@Column(name="last_name")
	private String l2LastName;
		
	@Column(name="nic")
	private String l2NIC;
	
	@Column(name="telephone")
	private String l2Telephone;
	
	@Column(name="address")
	private String l2Address;
	
	@Column(name="password")
	private String l2Password;
	
//	public List<Instrument> getInstrument() {
//		return instrument;
//	}
//
//	public void setInstrument(List<Instrument> instrument) {
//		this.instrument = instrument;
//	}

//	@OneToMany(cascade=CascadeType.MERGE)
//	@JoinColumn(name="fk_instrument_list_f2")
//	private List<Instrument	> instrument;
	
//	@OneToOne(mappedBy="level2")
//	private Institute institute;
		
	
//	public Institute getInstitute() {
//		return institute;
//	}
//
//	public void setInstitute(Institute institute) {
//		this.institute = institute;
//	}

	public Level2() {}
	
//	public Level2(String l2UserName, String l2UserEmail, String l2FirstName, String l2LastName, String l2nic,
//			String l2Telephone, String l2Address, String l2Password) {
//		super();
//		this.l2UserName = l2UserName;
//		this.l2UserEmail = l2UserEmail;
//		this.l2FirstName = l2FirstName;
//		this.l2LastName = l2LastName;
//		l2NIC = l2nic;
//		this.l2Telephone = l2Telephone;
//		this.l2Address = l2Address;
//		this.l2Password = l2Password;
//	}
	
	public String getL2UserName() {
		return l2UserName;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Level2(Long id, String l2UserName, String l2UserEmail, String l2FirstName, String l2LastName, String l2nic,
		String l2Telephone, String l2Address, String l2Password) {
	super();
	this.id = id;
	this.l2UserName = l2UserName;
	this.l2UserEmail = l2UserEmail;
	this.l2FirstName = l2FirstName;
	this.l2LastName = l2LastName;
	l2NIC = l2nic;
	this.l2Telephone = l2Telephone;
	this.l2Address = l2Address;
	this.l2Password = l2Password;
}

	public void setL2UserName(String l2UserName) {
		this.l2UserName = l2UserName;
	}
	
	public String getL2UserEmail() {
		return l2UserEmail;
	}
	
	public void setL2UserEmail(String l2UserEmail) {
		this.l2UserEmail = l2UserEmail;
	}
	
	public String getL2FirstName() {
		return l2FirstName;
	}
	
	public void setL2FirstName(String l2FirstName) {
		this.l2FirstName = l2FirstName;
	}
	
	public String getL2LastName() {
		return l2LastName;
	}
	
	public void setL2LastName(String l2LastName) {
		this.l2LastName = l2LastName;
	}
	
	public String getL2NIC() {
		return l2NIC;
	}
	
	public void setL2NIC(String l2nic) {
		l2NIC = l2nic;
	}
	
	public String getL2Telephone() {
		return l2Telephone;
	}
	
	public void setL2Telephone(String l2Telephone) {
		this.l2Telephone = l2Telephone;
	}
	
	public String getL2Address() {
		return l2Address;
	}
	
	public void setL2Address(String l2Address) {
		this.l2Address = l2Address;
	}
	
	public String getL2Password() {
		return l2Password;
	}
	
	public void setL2Password(String l2Password) {
		this.l2Password = l2Password;
	}
		
	
	

}
