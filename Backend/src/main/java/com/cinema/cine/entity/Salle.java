package com.cinema.cine.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "salle")
public class Salle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_salle", nullable = false)
    private Integer id;

    @Column(name = "capacite", nullable = false)
    private Integer capacite;

}