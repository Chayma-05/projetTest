import React, {useState,useEffect} from 'react';
import Form from '../components/Form';
import InputBox from '../components/InputBox';
import filmService from '../service/filmService';
import '../styles/addFilm.css';
import { useNavigate, useParams } from 'react-router-dom';

const AddFilmContainer = () => {
  const [filmData, setFilmData] = React.useState({
    titre: '',
    description: '',
    duree: '',
    dateSortie: '',    
  });
  const [isDisplayMode, setIsDisplayMode] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const { id } = useParams(); 
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchFilmDetails(id);
      if (window.location.search.includes('display=true')) {
        setIsDisplayMode(true);
      } else {
        setIsEditMode(true);
      }
    }
  }, [id]);

  const fetchFilmDetails = async (filmId) => {
    try {
      const filmDetails = await filmService.getFilmById(filmId);
      setFilmData(filmDetails);
    } catch (error) {
      console.error(error);
    }
  };


  const handleChange = (e) => {
    setFilmData({
      ...filmData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await filmService.updateFilm(id, filmData);
      } else {
        await filmService.addFilm(filmData);
      }
      navigate('/admin/films');
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    
    <div className='add-film'>
      <Form onSubmit={handleSubmit}>
      <h1>{isDisplayMode? 'View Film' : id? 'Update Film' : 'Add Film'}</h1>
        <InputBox
          type="text"
          placeholder="titre"
          name="titre"
          value={filmData.titre}
          onChange={handleChange}
          disabled={isDisplayMode === true}
        />
        <InputBox
          type="text"
          placeholder="description"
          name="description"
          value={filmData.description}
          onChange={handleChange}
          disabled={isDisplayMode}
        />
        <InputBox
          type="text"
          placeholder="duree"
          name="duree"
          value={filmData.duree}
          onChange={handleChange}
          disabled={isDisplayMode}
        />
        <InputBox
          type="date"
          placeholder="dateSortie"
          name="dateSortie"
          value={filmData.dateSortie}
          onChange={handleChange}
          disabled={isDisplayMode}
        />
          {isDisplayMode ? (
          <button type="button" onClick={() => navigate(-1)}>Go Back</button>
        ) : isEditMode ? (
          <button type="submit">Update Film</button>
        ) : (
          <button type="submit">Add Film</button>
        )}
      </Form>
    </div>
  );
};

export default AddFilmContainer;

