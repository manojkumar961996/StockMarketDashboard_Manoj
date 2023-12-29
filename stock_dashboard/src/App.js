import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRouter from './privateRouter';
import HomePage from './HomePage';
import DashboardPage from './DashboardPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboardPage" element={<DashboardPage />} />

        <Route path="/dashboard/*" element={<PrivateRouter><DashboardPage /></PrivateRouter>} />
      </Routes>
    </Router>
  );
}

export default App;
