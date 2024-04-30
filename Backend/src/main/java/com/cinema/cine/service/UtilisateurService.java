package com.cinema.cine.service;

import com.cinema.cine.repository.UtilisateurRepository;
import com.cinema.cine.entity.Utilisateur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UtilisateurService {
    @Autowired
    private UtilisateurRepository utilisateurRepository;

    public Utilisateur registerClient(Utilisateur user) {
        Utilisateur existingClient = utilisateurRepository.findByEmail(user.getEmail());
        if (existingClient != null) {
            throw new RuntimeException("Client with this email already exists.");
        }
        return utilisateurRepository.save(user);
    }

    public Utilisateur getClientByEmail(String email) {
        return utilisateurRepository.findByEmail(email);
    }
    public List<Utilisateur> getAllUsers() {
        return utilisateurRepository.findAll();
    }
}
