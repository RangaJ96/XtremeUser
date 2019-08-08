package com.slrt.jwtauthentication.instrument;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.slrt.jwtauthentication.institutes.Institute;
import com.slrt.jwtauthentication.institutes.instituteRepository;
import com.slrt.jwtauthentication.level1Employee.Level1;
import com.slrt.jwtauthentication.level1Employee.Level1Repository;
import com.slrt.jwtauthentication.level2Employee.Level2;
import com.slrt.jwtauthentication.level2Employee.Level2Repository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class InstrumentController {
	
	@Autowired
	private InstrumentRepository instrumentRepository;
	@Autowired
	private instituteRepository InstituteRepository;
	@Autowired
	private Level1Repository level1Repository;
	@Autowired
	private Level2Repository level2Repository;

	@GetMapping(path="/all-instruments")
	public List<Instrument> retrieveAllInstruments(){
//		return instrumentRepository.findByinstitute(institute);
		return instrumentRepository.findAll();
	}
	
	@GetMapping(path="/all-instruments/institute/{username}")
	public List<Instrument> retrieveAllInstrumentsByInstitute(@PathVariable String username){
		Institute institute=this.InstituteRepository.findByinstituteUserName(username);
		return instrumentRepository.findByinstitute(institute);
	}
	
	@GetMapping(path="/all-instruments/level1/{username}")
	public List<Instrument> retrieveAllInstrumentsByLevel1(@PathVariable String username){
		Level1 level1=this.level1Repository.findByl1UserName(username);
		return this.instrumentRepository.findBylevel1(level1);
	}
	
	@GetMapping(path="/all-instruments/level2/{username}")
	public List<Instrument> retrieveAllInstrumentsByLevel2(@PathVariable String username){
		Level2 level2=this.level2Repository.findByl2UserName(username);
		return this.instrumentRepository.findBylevel2(level2);
	}
	
	@PostMapping(path="/instruments")
	public Instrument addAnInstrument(@RequestBody Instrument instrument) {
		
//		String instituteUserName=instrument.getInstitute().getInstituteUserName();
//		Institute institute=this.InstituteRepository.findByinstituteUserName(instituteUserName);
//		List<Instrument> instrumentList=new ArrayList<Instrument>();
//		instrumentList=institute.getInstruments();
//		instrumentList.add(instrument);
////		institute.addInstrument(instrument);
//		this.instrumentRepository.save(instrument);
//		this.InstituteRepository.save(institute);
		
//		Instrument ins=new Instrument();
//		ins.setInstrumentName(instrument.getInstrumentName());
//		ins.setModelNo(instrument.getModelNo());
//		ins.setManufacturingDate(instrument.getManufacturingDate());
//		ins.setInstitute(instrument.getInstitute());
//		this.instrumentRepository.save(ins);
//	
//		List<Instrument> instrumentList=new ArrayList<Instrument>();
//		instrumentList.add(ins);

//		Level2 l2=instrument.getLevel2();
//		l2.setInstrument(instrumentList);
//		this.level2Repository.save(l2);
//		
//		Level1 l1=new Level1();
//		l1.setInstrument(instrumentList);
//		this.level1Repository.save(l1);
		
//		Level2 l2=new Level2();
//		l2=instrument.getLevel2();
//		this.level2Repository.save(l2);
//		

		//saving level2 to the instrument because sending level2 has null id
		Level2 l2=this.level2Repository.findByl2UserEmail(instrument.getLevel2().getL2UserEmail());
		Institute institute=this.InstituteRepository.findByinstituteUserName(instrument.getInstitute().getInstituteUserName());
		
//		System.out.println(instrument.getLevel1().getL1UserName());
		Instrument ins=new Instrument();
		ins.setInstrumentName(instrument.getInstrumentName());
		ins.setModelNo(instrument.getModelNo());
		ins.setManufacturingDate(instrument.getManufacturingDate());
		ins.setLevel2(l2);
		ins.setInstitute(institute);
		
//		Level1 level1=new Level1();
//		level1=instrument.getLevel1();
//		List<Instrument> instruments=new ArrayList<Instrument>();
//		instruments=level1.getInstrument();
//		instruments.add(instrument);
//		level1.setInstrument(instruments);
//		this.level1Repository.save(level1);
		
		ins.setLevel1(instrument.getLevel1());
		this.instrumentRepository.save(ins);
		
		return ins;
	
	}

	@DeleteMapping(path="/instruments/{id}")
	public void deleteInstrument(@PathVariable Long id) {
		this.instrumentRepository.deleteById(id);
	}
}
