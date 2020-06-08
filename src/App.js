import React from 'react';
import Header from './components/shared/Header/Header.jsx'
import TaskManager from './components/shared/TaskManager/TaskManager.jsx'
import Footer from './components/shared/Footer/Footer.jsx'

import './App.css';

function App() {
  return (
    <div className="container">
      <p>Hello from APP</p>
      <div className="row">
        <div className="col">
          <Header /> 
        </div>
      </div>
      <div className="row">
        <div className="col"> 
          <TaskManager />
        </div>
      </div>
      <div className="row">
         <div className="col">
           <Footer />
         </div>
      </div>  
    </div>
  );
}

export default App;
