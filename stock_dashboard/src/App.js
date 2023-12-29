import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRouter from './privateRouter';
import HomePage from './HomePage';
import DashboardPage from './DashboardPage';


function App() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };
  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboardPage*" element={<PrivateRouter><DashboardPage /></PrivateRouter>} Toggle={Toggle} />
      </Routes>
    </Router>
  );
}

export default App;
