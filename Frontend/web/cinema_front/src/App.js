import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogContainer from './containers/AdminLogContainer';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';
import AdFilmContainer from './containers/FilmContainer';
import SalleContainer from './containers/SalleContainer'
import AddFilmContainer from './containers/AddFilmContainer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/register" element={<RegisterContainer />} />
        <Route path="/adminLogin" element={<AdminLogContainer />} />
        <Route path="/admin/films" element={<AdFilmContainer />} />
        <Route path="/admin/salles" element={<SalleContainer />} />
        <Route path="/admin/films/add" element={<AddFilmContainer />} />
        <Route path="/admin/films/edit/:id" element={<AddFilmContainer/>} /></Routes>
    </Router>
   
  );
}

export default App;
