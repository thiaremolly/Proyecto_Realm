package com.codingdojo.finalproyect.repositories;

import org.springframework.data.repository.CrudRepository;

import com.codingdojo.finalproyect.models.User;

public interface UserRepository extends CrudRepository<User, Long> {
	User findByEmail(String email);
}
