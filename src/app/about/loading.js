import React from 'react';

function Loading() {
  return (
    <div style={styles.loadingSpinner}>
      <div style={styles.spinner}></div>
      <div>Loading...</div>
    </div>
  );
}

const styles = {
  loadingSpinner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position:'absolute',
    top:'50%',
    left:'50%'
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '5px solid #f3f3f3',
    borderTop: '5px solid #3498db',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
};

export default Loading;
