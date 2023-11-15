package com.codingdojo.finalproyect.validations;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;

import com.codingdojo.finalproyect.models.User;
import com.codingdojo.finalproyect.services.PublicationService;
import org.springframework.validation.Validator;

@Component
public class UserValidation implements Validator {

	private PublicationService publicationService;

	public UserValidation(PublicationService publicationService) {
		this.publicationService = publicationService;
	}

	@Override
	public boolean supports(Class<?> clazz) {
		return User.class.equals(clazz);
	}

	@Override
	public void validate(Object target, Errors errors) {
		User user = (User) target;

	}

}
