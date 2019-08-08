package com.slrt.jwtauthentication.level2Employee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface Level2Repository extends JpaRepository<Level2, Long>{

	Level2 findByl2UserName(String username);
	
	Level2 findByl2UserEmail(String email);
}
