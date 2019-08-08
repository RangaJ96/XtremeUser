package com.slrt.jwtauthentication.level1Employee;

import org.springframework.data.jpa.repository.JpaRepository;

import com.slrt.jwtauthentication.level2Employee.Level2;

public interface Level1Repository extends JpaRepository<Level1, Long>{

	Level1 findByl1UserName(String username);
	
	Level2 findBylevel2(Level2 level2);
}
