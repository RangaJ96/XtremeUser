package com.slrt.jwtauthentication.instrument;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.slrt.jwtauthentication.institutes.Institute;
import com.slrt.jwtauthentication.level1Employee.Level1;
import com.slrt.jwtauthentication.level2Employee.Level2;

@Entity
@Table(name="instrument")
public class Instrument {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="instrument_id")
	private Long instrumentId;
	
	@Column(name="instrument_name")
	private String instrumentName;
	
	@Column(name="model_no")
	private String modelNo;
	
	@Column(name="manufacturing_date")
	private Date manufacturingDate;
	
	@Column(name="availability")
	private int avilability;
	
	@OneToOne(cascade=CascadeType.MERGE)
	@JoinColumn(name="fk_level2_fi")
	private Level2 level2;
	
	@ManyToOne(cascade=CascadeType.MERGE)
	@JoinColumn(name="fk_institute_fi")
	private Institute institute;
	
	@ManyToOne(cascade=CascadeType.MERGE)
	@JoinColumn(name="fk_level1_fi")
	private Level1 level1;
	
	public Institute getInstitute() {
		return institute;
	}
	public void setInstitute(Institute institute) {
		this.institute = institute;
	}
	public Level2 getLevel2() {
		return level2;
	}
	public void setLevel2(Level2 level2) {
		this.level2 = level2;
	}
	protected Instrument() {
		
	}
	public Instrument(Long instrumentId, String instrumentName, String modelNo, Date manufacturingDate,Institute institute,Level1 level1) {
		super();
		this.instrumentId = instrumentId;
		this.instrumentName = instrumentName;
		this.modelNo = modelNo;
		this.manufacturingDate = manufacturingDate;
		this.institute = institute;
		this.level1 = level1;
	}
	public int getAvilability() {
		return avilability;
	}
	public void setAvilability(int avilability) {
		this.avilability = avilability;
	}
	public Level1 getLevel1() {
		return level1;
	}
	public void setLevel1(Level1 level1) {
		this.level1 = level1;
	}
	public Long getInstrumentId() {
		return instrumentId;
	}
	public void setInstrumentId(Long instrumentId) {
		this.instrumentId = instrumentId;
	}
	public String getInstrumentName() {
		return instrumentName;
	}
	public void setInstrumentName(String instrumentName) {
		this.instrumentName = instrumentName;
	}
	public String getModelNo() {
		return modelNo;
	}
	public void setModelNo(String modelNo) {
		this.modelNo = modelNo;
	}
	public Date getManufacturingDate() {
		return manufacturingDate;
	}
	public void setManufacturingDate(Date manufacturingDate) {
		this.manufacturingDate = manufacturingDate;
	}
//	public Level1 getLevel1() {
//		return level1;
//	}
//	public void setLevel1(Level1 level1) {
//		this.level1 = level1;
//	}
	
	
	

}
