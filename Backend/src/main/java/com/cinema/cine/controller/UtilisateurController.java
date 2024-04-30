package com.cinema.cine.controller;

import com.cinema.cine.entity.Utilisateur;
import com.cinema.cine.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/utilisateur")
@CrossOrigin
public class UtilisateurController {

    @Autowired
    private UtilisateurService utilisateurService;

    @PostMapping("/register")
    public ResponseEntity<Utilisateur> registerUtilisateur(@RequestBody Utilisateur user) {
        Utilisateur registeredUser = utilisateurService.registerUser(user);
        return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
    }

    @GetMapping("/{email}")
    public ResponseEntity<Utilisateur> getUserByEmail(@PathVariable String email) {
        Utilisateur user = utilisateurService.getUserByEmail(email);
        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
    @GetMapping("/getAll")
    public List<Utilisateur> getUsers() {
        return utilisateurService.getAllUsers();
    }
}

