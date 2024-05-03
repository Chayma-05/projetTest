import React, { useEffect, useState }  from 'react';
import DataGridComponent from '../components/DataGridComponent';
import filmService from '../service/filmService';

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

  const handleEditClick = (row) => {
    // Handle edit action
  };

  const handleDeleteClick = (row) => {
    const film=films.find(film=>film.id===row.id)
    filmService.deleteFilm(film.id).then(()=>{
      loadFilms();
    })
  };

  const handleDisplayClick = (row) => {
    // Handle display action
  };

  return (
    <DataGridComponent
      columns={columns}
      rows={films}
      pageSizeOptions={[5]}
      onEditClick={handleEditClick}
      onDeleteClick={handleDeleteClick}
      onDisplayClick={handleDisplayClick}
    />
  );
};

export default FilmContainer;
