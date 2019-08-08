package com.slrt.jwtauthentication.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.slrt.jwtauthentication.model.UserPropaties;

public interface UserPropertiesRepository extends JpaRepository<UserPropaties, String> {

}
