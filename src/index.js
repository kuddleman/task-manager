import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


//import bootstrap from the node module:
  //when specifying the path, I do not have to
  // use the word 'node' as part of the path.
  // it is already assumed
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


