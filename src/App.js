import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Menu from './routes/Menu';
import DeployRoutes from './routes/DeployRoutes';

function App() {
  return (
    <Router>
      <div>
        <DeployRoutes />
        <nav>
          <Menu />
        </nav>
      </div>
    </Router>
  );
}

export default App;
