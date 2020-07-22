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
    const userInfo = this.state.data.filter(ele => {
      if (ele.username === user.username && ele.password === user.password) {
        return ele;
      }
    });
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
