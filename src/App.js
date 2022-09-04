import React from 'react'
import Clock from './components/Clock'
import WeatherPanel from './components/Weather/WeatherPanel';
import './css/App.css'

function App() {
  return (
    <>
      <Clock />
      <WeatherPanel />
    </>
  );
}

export default App;
