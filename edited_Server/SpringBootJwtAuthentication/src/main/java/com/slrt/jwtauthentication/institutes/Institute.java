package com.slrt.jwtauthentication.institutes;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.UniqueElements;

import com.slrt.jwtauthentication.instrument.Instrument;
import com.slrt.jwtauthentication.level0Employee.Level0;
import com.slrt.jwtauthentication.level1Employee.Level1;
import com.slrt.jwtauthentication.level2Employee.Level2;



@Entity
@Table(name="institute")
public class Institute{
	
	@Id
	@GeneratedValue
	@Column(name="instituteId")
	private Long id;
	
	@Column(name="institute_user_name",unique=true)
	private String instituteUserName;
	
	@Column(name="institute_name")
	private String instituteName;
	
	@NotNull
	@Column(name="institute_email",unique=true)
	private String instituteEmail;
	
	
	@Column(name="address")
	private String address;
	
	
	@Column(name="province")
	private String province;
	
	@Column(name="city")
	private String city;
	
	@Column(name="institute_telephone")
	private int instituteTelephone;
	
	@NotNull
	@Column(name="password")
	private String password;
	
	@Column(name="acceptance")
	private boolean acceptance;
	
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="fk_level0")
	private Level0 level0;
	
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="fk_level1",unique=true)
	private Level1 level1;
	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="fk_level2_list_finsti")
	private List<Level2> level2;
	
	@OneToMany(cascade=CascadeType.MERGE)
	private List<Instrument> instruments;
	
	
	public Institute() {
		
	}


	public Institute(String instituteUserName, String instituteName, String instituteEmail, String address,
			String province, String city, int instituteTelephone, String password, boolean acceptance, Level0 level0,
			Level1 level1, List<Level2> level2, List<Instrument> instruments) {
		super();
		this.instituteUserName = instituteUserName;
		this.instituteName = instituteName;
		this.instituteEmail = instituteEmail;
		this.address = address;
		this.province = province;
		this.city = city;
		this.instituteTelephone = instituteTelephone;
		this.password = password;
		this.acceptance = acceptance;
		this.level0 = level0;
		this.level1 = level1;
		this.level2 = level2;
		this.instruments = instruments;
	}


	public String getInstituteUserName() {
		return instituteUserName;
	}


	public void setInstituteUserName(String instituteUserName) {
		this.instituteUserName = instituteUserName;
	}


	public String getInstituteName() {
		return instituteName;
	}


	public void setInstituteName(String instituteName) {
		this.instituteName = instituteName;
	}


	public String getInstituteEmail() {
		return instituteEmail;
	}


	public void setInstituteEmail(String instituteEmail) {
		this.instituteEmail = instituteEmail;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getProvince() {
		return province;
	}


	public void setProvince(String province) {
		this.province = province;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public int getInstituteTelephone() {
		return instituteTelephone;
	}


	public void setInstituteTelephone(int instituteTelephone) {
		this.instituteTelephone = instituteTelephone;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public boolean isAcceptance() {
		return acceptance;
	}


	public void setAcceptance(boolean acceptance) {
		this.acceptance = acceptance;
	}


	public Level0 getLevel0() {
		return level0;
	}


	public void setLevel0(Level0 level0) {
		this.level0 = level0;
	}


	public Level1 getLevel1() {
		return level1;
	}


	public void setLevel1(Level1 level1) {
		this.level1 = level1;
	}

	public List<Level2> getLevel2() {
		return level2;
	}


	public void setLevel2(List<Level2> level2) {
		this.level2 = level2;
	}


	public List<Instrument> getInstruments() {
		return instruments;
	}


	public void setInstruments(List<Instrument> instruments) {
		this.instruments = instruments;
	}


	public void addInstrument(Instrument instrument) {
		// TODO Auto-generated method stub
		this.instruments.add(instrument);
	}

}
