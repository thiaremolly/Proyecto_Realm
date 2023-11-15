package com.codingdojo.finalproyect.services;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.finalproyect.models.User;
import com.codingdojo.finalproyect.repositories.PublicationRepository;
import com.codingdojo.finalproyect.repositories.UserRepository;

@Service
public class PublicationService {

	@Autowired PublicationRepository publicationRepository;
	
	@Autowired UserRepository userRepository;
	
	

	public void incrementLikes(Long id) {
        publicationRepository.incrementLikes(id);
    }
	public User registerUser(User user) {
		String hash = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
		user.setPassword(hash);
		return userRepository.save(user);
	}
	public boolean checkLogin(String email,String password) {
		User user = userRepository.findByEmail(email);
		if(user == null) {
			return false;
		}
		else {
			if(BCrypt.checkpw(password, user.getPassword())) {
				return true;
			}
			else {
				return false;
			}
		}
	}
	public User findByEmail(String email) {
		return userRepository.findByEmail(email);
	}
}
