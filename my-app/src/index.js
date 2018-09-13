import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const fullpageOptions = {
    callbacks: ["onLeave"],
    verticalCentered:false,
    controlArrows:false
  };

ReactDOM.render(<App {...fullpageOptions} />, document.getElementById('root'));
registerServiceWorker();
