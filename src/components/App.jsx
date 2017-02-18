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

  /* Required for text-overflow to do anything */
  whiteSpace: 'nowrap',
  overflow: 'hidden',
};

const bgStyle = {
  position: 'absolute',
  top: '0',
  left: '0',
  zIndex: '-5000',
  filter: 'brightness(80%)'
};

const App = () => (
  <div>
    <img src="/img/bg.jpg" width="100%" height="100%"
      style={bgStyle}
    />
    <div style={centerStyle}>
      <p style={{ fontSize: '80px', fontWeight: '800', marginBottom: '10px' }}>iota</p>
      <p style={{ fontSize: '70px', marginTop: '0px' }}>Iota work for odd jobs</p>
    </div>
  </div>
);

export default App;
