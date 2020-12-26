import React from 'react';
import './App.css';
import Weather from "./weather/Weather";
import local from "./localization/AppLocal";


function App() {
  return (
    <div className="app" lang={local.lang}>
      <Weather/>
    </div>
  );
}

export default App;
