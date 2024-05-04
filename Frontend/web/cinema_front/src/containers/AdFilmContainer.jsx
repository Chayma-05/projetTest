import React, { useEffect, useState }  from 'react';
import DataGridComponent from '../components/DataGridComponent';
import filmService from '../service/filmService';
import { useNavigate  } from 'react-router-dom';

const FilmContainer = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {

    loadFilms();
  }, []);

  const loadFilms = async () => {
    const allFilms = await filmService.getAllFilms();
    setFilms(allFilms);
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'titre', headerName: 'Titre', width: 150 },
    { field: 'duree', headerName: 'Durée', width: 110 },
    { field: 'dateSortie', headerName: 'Date de sortie', width: 160 },
  ];
  const navigate = useNavigate();

  const handleEditClick = (row) => {
    navigate(`/admin/films/edit/${row.id}`);
  };

 
  const addfilm = (e) => {
    e.preventDefault();
    navigate('/admin/films/add');
  }
  const handleDeleteClick = (row) => {
    const film=films.find(film=>film.id===row.id)
    filmService.deleteFilm(film.id).then(()=>{
      loadFilms();
    })
  };

  const handleDisplayClick = (row) => {
    navigate(`/admin/films/edit/${row.id}?display=true`);
  };

  return (
    <div>
      <button onClick={addfilm}>add film</button>
    <DataGridComponent
      columns={columns}
      rows={films}
      pageSizeOptions={[5]}
      onEditClick={handleEditClick}
      onDeleteClick={handleDeleteClick}
      onDisplayClick={handleDisplayClick}
    />
    </div>
  );
};

export default FilmContainer;
