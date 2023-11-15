package com.codingdojo.finalproyect.controllers;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.codingdojo.finalproyect.models.User;
import com.codingdojo.finalproyect.services.PublicationService;
import com.codingdojo.finalproyect.validations.UserValidation;
import com.codingdojo.finalproyect.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class HomeController {
	
	private final UserValidation userValidation;
    private final PublicationService publicationService;
    private final UserService userService;

    @Autowired
    public HomeController(UserValidation userValidation, PublicationService publicationService, UserService userService) {
        this.userValidation = userValidation;
        this.publicationService = publicationService;
        this.userService = userService;
    }


    @Autowired
    private UserService userServices;

//	@GetMapping("/")
//	public String login(@ModelAttribute("user") User user, HttpSession session, Model model) {
//		if (session.getAttribute("errorMessage") != null) {
//			model.addAttribute("errorMessage", session.getAttribute("errorMessage"));
//			return "views/registerLogin.jsp";
//		} else
//			return "views/login.jsp";
//	}
//	@PostMapping("/login")
//	public String login(@RequestParam("email") String email, @RequestParam("password") String password, Model model,
//			HttpSession session) {
//		boolean isAuntentico = userServices.authenticateUser(email, password);
//		if (isAuntentico) {
//			User user = userServices.findByEmail(email);
//			session.setAttribute("userId", user.getIdUser());
//			return "redirect:/shows";
//		} else {
//			session.setAttribute("error", "Clave o email invalida");
//			return "redirect:/";
//		}
//	}
	
	@GetMapping("/post")
	public String post() {
		return "views/muro.jsp";
	}
	@GetMapping("/index")
	public String index() {
		return "views/vista.jsp";
	}
	
	@GetMapping("/post-comunity")
	public String post_comunity() {
		return "views/muro_comunidad.jsp";
	}
	
	@PostMapping("/like/{idPublication}")
    public String likePublication(@PathVariable Long id) {
        publicationService.incrementLikes(id);
        return "redirect:/post"; // Redirige a la página principal u otra página después de dar "me gusta"
    }
	
	  public static String UPLOAD_DIRECTORY = System.getProperty("user.dir") + "/uploads";
//
//	    @GetMapping("/uploadimage") public String displayUploadForm() {
//	        return "imageupload/index";
//	    }

//	    @PostMapping("/upload") public String uploadImage(Model model, @RequestParam("image") MultipartFile file) throws IOException {
//	        StringBuilder fileNames = new StringBuilder();
//	        Path fileNameAndPath = Paths.get(UPLOAD_DIRECTORY, file.getOriginalFilename());
//	        fileNames.append(file.getOriginalFilename());
//	        Files.write(fileNameAndPath, file.getBytes());
//	        model.addAttribute("msg", "Uploaded images: " + fileNames.toString());
//	        
//	        model.addAttribute("fileNames", fileNames.toString()); 
//	        return "views/muro.jsp";
//	    }
	    
	    @GetMapping("/")
	    public String loginRegister(@ModelAttribute("index") User register, HttpSession session) {
	        if (session.isNew()) {
	            session.setAttribute("login", false);
	        }
	        return "views/index.jsp";
	    }

	    @PostMapping("/register")
	    public String registerProcess(@Valid @ModelAttribute("login") User userRegister, BindingResult result, RedirectAttributes redirectAttributte) {
	        userValidation.validate(userRegister, result);
	        if (result.hasErrors()) {
	            return "views/index.jsp";
	        } else {
	            publicationService.registerUser(userRegister);
	            redirectAttributte.addFlashAttribute("success", "<p class=\"alert alert-success\" role=\"alert\"> Registration Successful! You may now Log in. </p>");
	            return "redirect:/";
	        }
	    }

	    @PostMapping("/Login")
	    public String loginProcess(@RequestParam("email") String email, @RequestParam("password") String password, HttpSession session, RedirectAttributes redirectAttributes) {
	        if (publicationService.checkLogin(email, password) == false) {
	            redirectAttributes.addFlashAttribute("error", "<p class=\"alert alert-danger text-center\" role=\"alert\"> Invalid Credentials </p>");
	            return "redirect:/";
	        } else {
	            session.setAttribute("login", true);
	            // Agregar la siguiente línea para almacenar el ID del usuario en la sesión
	            session.setAttribute("user", publicationService.findByEmail(email).getIdUser());
	            return "redirect:/home";
	        }
	    }
}
