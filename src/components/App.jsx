import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

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
          <p style={{ fontSize: '80px', fontWeight: '800', marginBottom: '10px' }}>
            iota
          </p>
          <p style={{ fontSize: '60px', marginTop: '0px' }}>
            Iota work for odd jobs
          </p>
        </div>
        <div className="col-xs-6"
          style={{ float: 'none', display: 'inline-block', verticalAlign: 'middle', paddingTop: '30%' }}>
            <RaisedButton label="Log in" style={{ marginRight: '12px' }} href="/login" />
            <RaisedButton label="Sign up" href="/signup" />
        </div>
      </div>
    </div>
  </div>
);

export default App;
