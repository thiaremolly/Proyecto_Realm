package com.codingdojo.finalproyect.services;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.finalproyect.models.User;
import com.codingdojo.finalproyect.repositories.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;

	public boolean authenticateUser(String email, String password) {
		User user = userRepository.findByEmail(email);
		if (user == null) {
			return false;
		} else {
			if (BCrypt.checkpw(password, user.getPassword())) {
				return true;
			} else {
				return false;
			}
		}
	}
	public User findByEmail(String email) {
		return userRepository.findByEmail(email); 
	//busca y devuelve un usuario por su dirección de correo electrónico desde el repositorio de usuarios.
	}
	
	public User findUserById(Long id) {
		Optional<User> user = userRepository.findById(id);
		if (user.isPresent()) {
			return user.get();
		} else {
			return null;
		}/*función busca y devuelve un usuario por su ID desde el repositorio de usuarios. 
		Si se encuentra, devuelve el usuario; de lo contrario, retorna null.*/
	}
	
	
	public User findById(Long userId) {
	    Optional<User> user = userRepository.findById(userId);
	    if (user.isPresent()) {
	        return user.get();
	    } else {
	        return null;
	    }
	}

	public void save(User user) {
	    userRepository.save(user);
	}
}
