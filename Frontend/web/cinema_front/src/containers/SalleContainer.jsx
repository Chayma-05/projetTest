import React, { useEffect, useState }  from 'react';
import DataGridComponent from '../components/DataGridComponent';
import salleService from '../service/salleService';
import { useNavigate  } from 'react-router-dom';
import '../styles/addFilm.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from '../components/Sidebar';

const SalleContainer = () => {
  const [salles, setSalles] = useState([]);
  useEffect(() => {
    loadSalles();
  }, []);

  const loadSalles = async () => {
    try {
        const allSalles = await salleService.getAllSalles();
        setSalles(allSalles);
      } catch (error) {
        console.error("Error fetching salles:", error);
        // Handle the error gracefully, e.g., display an error message to the user
      }
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 120 },
    { field: 'capacite', headerName: 'Capacity', width: 150 },
  ];


  const handleEditClick = (row) => {
    
  };

 
  const addSalle = (e) => {
    e.preventDefault();
   
  }
  const handleDeleteClick = (row) => {
    const salle=salles.find(salle=>salle.id===row.id)
    salleService.deleteSalle(salle.id).then(()=>{
      loadSalles();
    })
  };



  return (
    <div className="d-flex">
    <Sidebar />
    <div className="flex-grow-1">
      <div className="d-flex justify-content-end mb-3 data-grid">
      <button onClick={addSalle} className='add-mov'>add Salle</button>
      </div>
    <DataGridComponent
      columns={columns}
      rows={salles}
      pageSizeOptions={[5]}
      onEditClick={handleEditClick}
      onDeleteClick={handleDeleteClick}
      showDisplayIcon={false}
    />
    </div>
    </div>
  );
};

export default SalleContainer;
