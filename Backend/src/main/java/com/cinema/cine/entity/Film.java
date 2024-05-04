package com.cinema.cine.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "film")
public class Film {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_film", nullable = false)
    private Integer id;

    @Column(name = "titre", nullable = false, length = 100)
    private String titre;

    @Column(name = "description", nullable = false, length = 1000)
    private String description;

    @Column(name = "duree", nullable = false, length = 100)
    private String duree;

    @Column(name = "date_sortie", nullable = false)
    private LocalDate dateSortie;

}