import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import InputBox from '../components/InputBox';
import filmService from '../service/filmService';
import '../styles/addFilm.css';
const UpdateFilmContainer = () => {
  const [filmData, setFilmData] = useState({
    
  });
  const fetchFilmData = async () => {
    try {
      const data = await filmService.getFilmById(1); // or filmId
      console.log('Fetched data in UpdateFilmContainer:', data);
      setFilmData(data || {});
    } catch (error) {
      console.error('Error fetching film data:', error);
    }
  };
  // Load film data when component mounts
  useEffect(() => {
    fetchFilmData();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilmData({
      ...filmData,
      [name]: value,
    });
  };
  const handlePosterChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setFilmData({
        ...filmData,
        poster: reader.result, // Store the URL of the poster image
      });
    };
    reader.readAsDataURL(file); // Convert file to data URL
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await filmService.updateFilm(1, filmData);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className='add-film'>
      <h1><center>Update Film</center></h1>
      <Form onSubmit={handleSubmit}>
        <InputBox
          type="text"
          placeholder="titre"
          name="titre"
          value={filmData.titre || ''}
          onChange={handleChange}
        />
        
        <InputBox
          type="text"
          placeholder="description"
          name="description"
          value={filmData.description}
          onChange={handleChange}
        />
        <InputBox
          type="text"
          placeholder="duree"
          name="duree"
          value={filmData.duree}
          onChange={handleChange}
        />
        <InputBox
          type="date"
          placeholder="dateSortie"
          name="dateSortie"
          value={filmData.dateSortie}
          onChange={handleChange}
        />
        
       
        <input
          type="file"
          name="poster"
          //value={filmData.poster}
          onChange={handlePosterChange}
        />
        <button type="submit">Update Film</button>
      </Form>
    </div>
  );
};
export default UpdateFilmContainer;