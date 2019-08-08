package com.slrt.jwtauthentication.security.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.slrt.jwtauthentication.model.UserPropaties;
import com.slrt.jwtauthentication.repository.UserPropertiesRepository;




@Service
public class UserPropertiesService {
	
	@Autowired
	UserPropertiesRepository repo;
	
	public void saveUserPro(UserPropaties userDTO) {
        repo.save(userDTO);
    }

	public UserPropaties findById(String username) {
		// TODO Auto-generated method stub
		return repo.findById(username).get();
		
	}

	/*
	 * @Override public List<UserPropaties> findAll() { // TODO Auto-generated
	 * method stub return null; }
	 * 
	 * @Override public List<UserPropaties> findAll(Sort sort) { // TODO
	 * Auto-generated method stub return null; }
	 * 
	 * @Override public List<UserPropaties> findAllById(Iterable<String> ids) { //
	 * TODO Auto-generated method stub return null; }
	 * 
	 * @Override public <S extends UserPropaties> List<S> saveAll(Iterable<S>
	 * entities) { // TODO Auto-generated method stub return null; }
	 * 
	 * @Override public void flush() { // TODO Auto-generated method stub
	 * 
	 * }
	 * 
	 * @Override public <S extends UserPropaties> S saveAndFlush(S entity) { // TODO
	 * Auto-generated method stub return null; }
	 * 
	 * @Override public void deleteInBatch(Iterable<UserPropaties> entities) { //
	 * TODO Auto-generated method stub
	 * 
	 * }
	 * 
	 * @Override public void deleteAllInBatch() { // TODO Auto-generated method stub
	 * 
	 * }
	 * 
	 * @Override public UserPropaties getOne(String id) { // TODO Auto-generated
	 * method stub return null; }
	 * 
	 * @Override public <S extends UserPropaties> List<S> findAll(Example<S>
	 * example) { // TODO Auto-generated method stub return null; }
	 * 
	 * @Override public <S extends UserPropaties> List<S> findAll(Example<S>
	 * example, Sort sort) { // TODO Auto-generated method stub return null; }
	 * 
	 * @Override public Page<UserPropaties> findAll(Pageable pageable) { // TODO
	 * Auto-generated method stub return null; }
	 * 
	 * @Override public <S extends UserPropaties> S save(S entity) { // TODO
	 * Auto-generated method stub return null; } public void saveUser(UserPropaties
	 * userDTO) { user.save(userDTO); }
	 * 
	 * @Override public Optional<UserPropaties> findById(String id) { // TODO
	 * Auto-generated method stub return null; }
	 * 
	 * @Override public boolean existsById(String id) { // TODO Auto-generated
	 * method stub return false; }
	 * 
	 * @Override public long count() { // TODO Auto-generated method stub return 0;
	 * }
	 * 
	 * @Override public void deleteById(String id) { // TODO Auto-generated method
	 * stub
	 * 
	 * }
	 * 
	 * @Override public void delete(UserPropaties entity) { // TODO Auto-generated
	 * method stub
	 * 
	 * }
	 * 
	 * @Override public void deleteAll(Iterable<? extends UserPropaties> entities) {
	 * // TODO Auto-generated method stub
	 * 
	 * }
	 * 
	 * @Override public void deleteAll() { // TODO Auto-generated method stub
	 * 
	 * }
	 * 
	 * @Override public <S extends UserPropaties> Optional<S> findOne(Example<S>
	 * example) { // TODO Auto-generated method stub return null; }
	 * 
	 * @Override public <S extends UserPropaties> Page<S> findAll(Example<S>
	 * example, Pageable pageable) { // TODO Auto-generated method stub return null;
	 * }
	 * 
	 * @Override public <S extends UserPropaties> long count(Example<S> example) {
	 * // TODO Auto-generated method stub return 0; }
	 * 
	 * @Override public <S extends UserPropaties> boolean exists(Example<S> example)
	 * { // TODO Auto-generated method stub return false; }
	 */

}
