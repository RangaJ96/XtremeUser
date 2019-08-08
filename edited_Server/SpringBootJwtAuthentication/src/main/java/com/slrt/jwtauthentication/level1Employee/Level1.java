package com.slrt.jwtauthentication.level1Employee;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.slrt.jwtauthentication.instrument.Instrument;
import com.slrt.jwtauthentication.level2Employee.Level2;



@Entity
@Table(name="level1")
public class Level1 {

	@Id
	@GeneratedValue
	@Column(name="id")
	private Long id;
	
	@Column(name="level1_user_name",unique=true)
	private String l1UserName;
	
	@Column(name="level1_user_email",unique=true)
	private String l1UserEmail;
	
	@Column(name="first_name")
	private String l1FirstName;
	
	@Column(name="last_name")
	private String l1LastName;
	
	@Column(name="nic")
	private String l1NIC;
	
	@Column(name="telephone")
	private String l1Telephone;
	
	@Column(name="address")
	private String l1Address;
	
	@Column(name="password")
	private String l1Password;
//	
//	@OneToOne(mappedBy="level1")
//	private Institute institute;
//	
//	@OneToOne(mappedBy="level1")
//	private Level0 level0;
	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="fk_level2_list_f1")
	private List<Level2> level2;
	
	@OneToMany(cascade=CascadeType.MERGE)
	@JoinColumn(name="fk_instrument_list_f1")
	private List<Instrument> instrument;
	
	public Level1() {
		
	}

	public Level1(Long id, String l1UserName, String l1UserEmail, String l1FirstName, String l1LastName, String l1nic,
			String l1Telephone, String l1Address, String l1Password, List<Level2> level2, List<Instrument> instrument) {
		super();
		this.id = id;
		this.l1UserName = l1UserName;
		this.l1UserEmail = l1UserEmail;
		this.l1FirstName = l1FirstName;
		this.l1LastName = l1LastName;
		l1NIC = l1nic;
		this.l1Telephone = l1Telephone;
		this.l1Address = l1Address;
		this.l1Password = l1Password;
		this.level2 = level2;
//		this.instrument = instrument;
	}

	public List<Level2> getLevel2() {
		return level2;
	}

	public void setLevel2(List<Level2> level2) {
		this.level2 = level2;
	}

	public List<Instrument> getInstrument() {
		return instrument;
	}

	public void setInstrument(List<Instrument> instrument) {
		this.instrument = instrument;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getL1UserName() {
		return l1UserName;
	}

	public void setL1UserName(String l1UserName) {
		this.l1UserName = l1UserName;
	}

	public String getL1UserEmail() {
		return l1UserEmail;
	}

	public void setL1UserEmail(String l1UserEmail) {
		this.l1UserEmail = l1UserEmail;
	}

	public String getL1FirstName() {
		return l1FirstName;
	}

	public void setL1FirstName(String l1FirstName) {
		this.l1FirstName = l1FirstName;
	}

	public String getL1LastName() {
		return l1LastName;
	}

	public void setL1LastName(String l1LastName) {
		this.l1LastName = l1LastName;
	}

	public String getL1NIC() {
		return l1NIC;
	}

	public void setL1NIC(String l1nic) {
		l1NIC = l1nic;
	}

	public String getL1Telephone() {
		return l1Telephone;
	}

	public void setL1Telephone(String l1Telephone) {
		this.l1Telephone = l1Telephone;
	}

	public String getL1Address() {
		return l1Address;
	}

	public void setL1Address(String l1Address) {
		this.l1Address = l1Address;
	}

	public String getL1Password() {
		return l1Password;
	}

	public void setL1Password(String l1Password) {
		this.l1Password = l1Password;
	}

//	public Institute getInstitute() {
//		return institute;
//	}
//
//	public void setInstitute(Institute institute) {
//		this.institute = institute;
//	}

//	public Level0 getLevel0() {
//		return level0;
//	}
//
//	public void setLevel0(Level0 level0) {
//		this.level0 = level0;
//	}

	
	
}
