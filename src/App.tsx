import React from 'react';
import './App.css';

/** 
 * Entry point of the GitExpo project 
 * Would contain imports and custom components
 */

const App: React.FC = () => {
  return (
    <div className="gitexpo">
      <div className="intro-content"> GitExpo</div>
      <p className="sub-head">Github code explorer refined.</p>
    </div>
  );
}

export default App;
