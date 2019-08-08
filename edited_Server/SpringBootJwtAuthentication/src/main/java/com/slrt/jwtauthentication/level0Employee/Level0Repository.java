package com.slrt.jwtauthentication.level0Employee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Level0Repository extends JpaRepository<Level0, Long>{

	Level0 findByl0UserName(String username);
}
