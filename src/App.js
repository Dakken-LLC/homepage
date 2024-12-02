import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import BusinessPage from './components/BusinessPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Business" element={<BusinessPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
