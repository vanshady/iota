import React from 'react';

const centerStyle = {
  height: 'auto',
  position: 'absolute',
  top: '50%',
  left: '50%',
  zIndex: '100',
  color: '#EEEEEE',
  transform: 'translate(-50%,-50%)',
  textAlign: 'center',
  fontFamily: 'Cabin,sans-serif',
  textOverflow: 'clipped',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
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
    <div style={centerStyle}>
      <p style={{ fontSize: '80px', fontWeight: '800', marginBottom: '10px' }}>iota</p>
      <p style={{ fontSize: '60px', marginTop: '0px' }}>Iota work for odd jobs</p>
    </div>
  </div>
);

export default App;
