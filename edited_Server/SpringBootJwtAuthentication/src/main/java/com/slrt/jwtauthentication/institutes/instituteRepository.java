package com.slrt.jwtauthentication.institutes;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.slrt.jwtauthentication.level0Employee.Level0;
import com.slrt.jwtauthentication.level1Employee.Level1;

import java.util.List;

@Repository
public interface instituteRepository extends JpaRepository<Institute, Long>{

	List<Institute> findByacceptance(boolean acceptance);
	
	Institute findBylevel0(Level0 fk);
	
	Institute findBylevel1(Level1 fk);
	
	Institute findByinstituteUserName(String username);
}
