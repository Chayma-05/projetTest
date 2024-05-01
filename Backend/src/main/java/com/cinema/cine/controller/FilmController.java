package com.cinema.cine.controller;

import com.cinema.cine.entity.Film;
import com.cinema.cine.service.FilmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/film")
@CrossOrigin
public class FilmController {

    @Autowired
    private FilmService filmService;

    @PostMapping("/add")
    public ResponseEntity<Film> addFilm(@RequestBody Film film) {
        Film addedFilm = filmService.addFilm(film);
        return new ResponseEntity<>(addedFilm, HttpStatus.CREATED);
    }


    @GetMapping("/getFilm")
    public List<Film> getAllFilms() {
        return filmService.getAllFilms();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Film> getFilmById(@PathVariable Integer id) {
        Film film = filmService.getFilmById(id);
        if (film == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(film, HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Film> updateFilm(@PathVariable Integer id, @RequestBody Film updatedFilm) {
        Film film = filmService.updateFilm(id, updatedFilm);
        if (film == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(film, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteFilm(@PathVariable Integer id) {
        filmService.deleteFilm(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
