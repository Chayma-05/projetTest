import React from 'react';
import Form from '../components/Form';
import InputBox from '../components/InputBox';
import filmService from '../service/filmService';
import '../styles/addFilm.css';
const AddFilmContainer = () => {
  const [filmData, setFilmData] = React.useState({
    titre: '',
    description: '',
    duree: '',
    dateSortie: '',
    poster: null,
    
  });

  const handleChange = (e) => {
    setFilmData({
      ...filmData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await filmService.addFilm(filmData);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    
    <div className='add-film'>
        <h1><center>Admin Form</center></h1>
      <Form onSubmit={handleSubmit}>
        <h1>Add Film</h1>
        <InputBox
          type="text"
          placeholder="titre"
          name="titre"
          value={filmData.titre}
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
        <InputBox
          type="file"
          placeholder="poster"
          name="poster"
          value={filmData.poster}
          onChange={handleChange}
        />
        <button type="submit">Add Film</button>
      </Form>
    </div>
  );
};

export default AddFilmContainer;

