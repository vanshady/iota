import React from 'react';
import { RaisedButton, TextField, Paper } from 'material-ui';
import axios from 'axios';

const centerStyle = {
  color: '#EEEEEE',
  fontFamily: 'Cabin,sans-serif',
  textOverflow: 'clipped',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  verticalAlign: 'middle',
  display: 'inline-block',
  paddingTop: '20%',
};

const bgStyle = {
  zIndex: '-5000',
};

const bgImageStyle = {
  filter: 'brightness(80%)',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleLogin() {
    // alert('A name was submitted: ' + this.state.email + this.state.password);

    axios.post('/login', { email: this.state.email, password: this.state.password });
    console.log('posted');
    // event.preventDefault();
  }

  handleSignup() {
    axios.post('/signup', { email: this.state.email, password: this.state.password, confirmPassword: this.state.password });
    console.log('posted');
  }

  render() {
    return (
    <div>
      <div className="centerdiv" style={bgStyle}>
        <img src="/img/bg.jpg" className="centerimg"
          style={bgImageStyle}
        />
      </div>
      <div className="container-fluid">
        <div className="row" style={{ position: 'absolute', height: '100%', width: '100%' }}>
          <div style={centerStyle} className="col-xs-offset-1 col-xs-5 text-left">
            <p style={{ fontSize: '70px', fontWeight: '800', marginBottom: '10px' }}>
              iota
          </p>
            <p style={{ fontSize: '55px', marginTop: '0px' }}>
              Iota work for odd jobs
          </p>
          </div>
          <div className="col-xs-offset-1 col-xs-4"
            style={{ textAlign: 'center', verticalAlign: 'middle', paddingTop: '15%' }}>
            <Paper style={{ background: 'rgba(230, 230, 230, .6)', paddingTop: '100px', paddingBottom: '100px' }} zDepth={3}>
              <form method="POST">
                <TextField
                  hintStyle={{ color: '#666666' }}
                  inputStyle={{ color: '#111111' }}
                  hintText="Email" name="email"
                  value={this.state.email}
                  onChange={this.handleChangeEmail}
                />
                <br />
                <TextField
                  hintStyle={{ color: '#666666' }}
                  inputStyle={{ color: '#111111' }}
                  hintText="Password" name="password"
                  value={this.state.password}
                  onChange={this.handleChangePassword}
                />
                <br />
                <RaisedButton label="Log in" style={{ marginRight: '12px' }}
                  onClick={this.handleSubmit}
                />
                 <RaisedButton label="Sign up" href="/signup" onClick={this.handleSubmit} /> 
              </form>
            </Paper>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default App;
