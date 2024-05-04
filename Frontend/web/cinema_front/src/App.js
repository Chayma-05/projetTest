import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AdFilmContainer from './containers/AdFilmContainer';
import AddFilmContainer from './containers/AddFilmContainer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/films" element={<AdFilmContainer />} />
        <Route path="/admin/films/add" element={<AddFilmContainer />} />
        <Route path="/admin/films/edit/:id" element={<AddFilmContainer/>} />
      </Routes>
    </Router>
   
  );
}

export default App;
