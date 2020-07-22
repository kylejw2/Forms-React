import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Menu from './routes/Menu';
import DeployRoutes from './routes/DeployRoutes';

class App extends React.Component {
  state = {
    data: []
  }

  createUser(user) {
    this.setState({
      data: this.state.data.concat(user)},
      () => console.log(this.state)
    );
  }

  render() {
    return (
      <Router>
        <div>
          <DeployRoutes createUser={user => this.createUser(user)}/>
          <Menu />
        </div>
      </Router>
    );
  }
}

export default App;
