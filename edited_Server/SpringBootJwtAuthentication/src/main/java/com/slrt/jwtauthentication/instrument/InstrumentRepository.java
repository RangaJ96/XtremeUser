package com.slrt.jwtauthentication.instrument;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.slrt.jwtauthentication.institutes.Institute;
import com.slrt.jwtauthentication.level1Employee.Level1;
import com.slrt.jwtauthentication.level2Employee.Level2;

@Repository
public interface InstrumentRepository extends JpaRepository<Instrument, Long>{

	List<Instrument> findByinstitute(Institute institute);
	List<Instrument> findBylevel2(Level2 level2);
	List<Instrument> findBylevel1(Level1 level1);
}

