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

  validateUser(user) {
    let userInfo = null;
    for (let i = 0; i < this.state.data.length; i++) {
      const current = this.state.data[i];
      if (current.username === user.username && current.password === user.password) {
        userInfo = current;
        break;
      }
    }
    console.log(userInfo);
  }

  render() {
    return (
      <Router>
        <div>
          <DeployRoutes createUser={user => this.createUser(user)} validateUser={user => this.validateUser(user)}/>
          <Menu />
        </div>
      </Router>
    );
  }
}

export default App;
