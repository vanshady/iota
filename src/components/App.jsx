
import React from 'react';
import { RaisedButton, TextField, Paper } from 'material-ui';

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

const App = () => (
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
          <Paper style={{ background: 'rgba(230, 230, 230, .5)', paddingTop: '50px', paddingTop: '100px', paddingBottom: '100px'}} zDepth="3">
            <TextField hintStyle={{ color: '#666666'}} inputStyle={{ color: '#111111'}} hintText="Email" />
            <br />
            <TextField hintStyle={{ color: '#666666'}} inputStyle={{ color: '#111111'}} hintText="Password" />
            <br />
            <RaisedButton label="Log in" style={{ marginRight: '12px' }} href="/login" />
            <RaisedButton label="Sign up" href="/signup" />
          </Paper>
        </div>
      </div>
    </div>
  </div>
);

export default App;
