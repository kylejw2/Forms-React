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

  updatePassword(user) {
    let index = null;
    for (let i = 0; i < this.state.data.length; i++) {
      const current = this.state.data[i];
      if (current.username === user.username && current.email === user.email) {
        index = i;
        break;
      }
    }
    console.log(index);
    if (index !== null) {
      const modifiedStateData = this.state.data.slice();
      modifiedStateData[index].password = user.password;
      console.log(modifiedStateData)
      this.setState({
        data: modifiedStateData
      }, () => {console.log(this.state)})
    }
  }

  render() {
    return (
      <Router>
        <div>
          <DeployRoutes 
            createUser={user => this.createUser(user)} 
            validateUser={user => this.validateUser(user)}
            updatePassword={user => this.updatePassword(user)}
          />
          <Menu />
        </div>
      </Router>
    );
  }
}

export default App;
