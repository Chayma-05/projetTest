import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogContainer from './containers/AdminLogContainer';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/register" element={<RegisterContainer />} />
        <Route path="/adminLogin" element={<AdminLogContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
