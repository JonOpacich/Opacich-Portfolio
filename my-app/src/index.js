import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const fullpageOptions = {
    callbacks: ["onLeave"],
    verticalCentered:false,
    controlArrows:false,
    anchors:['Landing',"About","Portfolio","Contact"],
    menu:"#menu"
  };

ReactDOM.render(<App {...fullpageOptions} />, document.getElementById('root'));
registerServiceWorker();
