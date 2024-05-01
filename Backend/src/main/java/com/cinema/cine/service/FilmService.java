package com.cinema.cine.service;

import com.cinema.cine.entity.Film;
import com.cinema.cine.repository.FilmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FilmService {

    @Autowired
    private FilmRepository filmRepository;

    public Film addFilm(Film film) {
        return filmRepository.save(film);
    }

    public List<Film> getAllFilms() {
        return filmRepository.findAll();
    }

    public Film getFilmById(Integer id) {
        return filmRepository.findById(id).orElse(null);
    }

    public Film updateFilm(Integer id, Film updatedFilm) {
        Film existingFilm = filmRepository.findById(id).orElse(null);
        if (existingFilm != null) {
            updatedFilm.setId(id);
            return filmRepository.save(updatedFilm);
        }
        return null; // or throw an exception
    }

    public void deleteFilm(Integer id) {
        filmRepository.deleteById(id);
    }
}
