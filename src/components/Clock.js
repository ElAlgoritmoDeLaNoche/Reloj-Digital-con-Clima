import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import './../css/App.css'

const Clock = () => {

  const colorsBG = [
    {
      value: '#A7A5C6',
      label: 'Purple'
    },
    {
      value: '#072448',
      label: 'Blue'
    },
    {
      value: '#ED4551',
      label: 'Ruby'
    },
    {
      value: '#ffcb00',
      label: 'Yellow'
    },
    {
      value: '#54d2d2',
      label: 'Aqua'
    },
    {
      value: '#070707',
      label: 'Dark'
    }
  ]

  const colorsText = [
    {
      value: '#979EBC',
      label: 'Purple'
    },
    {
      value: '#54d2d2',
      label: 'Blue'
    },
    {
      value: '#ff6150',
      label: 'Ruby'
    },
    {
      value: '#f8aa4b',
      label: 'Yellow'
    },
    {
      value: '#ffffff',
      label: 'White'
    },

  ]

  const colorsWeatherTitles = [
    {
      value: '#979EBC',
      label: 'Purple'
    },
    {
      value: '#54d2d2',
      label: 'Blue'
    },
    {
      value: '#ff6150',
      label: 'Ruby'
    },
    {
      value: '#f8aa4b',
      label: 'Yellow'
    },
    {
      value: '#ffffff',
      label: 'White'
    },
    {
      value: '#333333',
      label: 'Black'
    },
  ]

  const colorsWeatherTemp = [
    {
      value: '#979EBC',
      label: 'Purple'
    },
    {
      value: '#54d2d2',
      label: 'Blue'
    },
    {
      value: '#ff6150',
      label: 'Ruby'
    },
    {
      value: '#f8aa4b',
      label: 'Yellow'
    },
    {
      value: '#ffffff',
      label: 'White'
    },
    {
      value: '#333333',
      label: 'Black'
    },
  ]

  const [time, setTime] = useState('')
  const [setBgColor, setSetBgColor] = useState(colorsBG.value)
  const [setTextColor, setSetTextColor] = useState(colorsText.value)
  const [setTextTitles, setSetTextTitles] = useState(colorsWeatherTitles.value)
  const [setTextWeather, setSetTextWeather] = useState(colorsWeatherTemp.value)

  const bacgroundHandler = (e) => {
    setSetBgColor(e.value)
  }

  const TextHandler = (e) => {
    setSetTextColor(e.value)
  }

  const TextWeatherHandler = (e) => {
    setSetTextWeather(e.value)
  }

  const TextTitlesHandler = (e) => {
    setSetTextTitles(e.value)
  }

  const formatTime = (val) => {
    if (val < 10) {
      return '0'
    } else {
      return ''
    }
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000)

    return function cleanup() {
      clearInterval(timerID)
    }
  }, [])

  const tick = () => {
    const d = new Date()
    const h = d.getHours()
    const m = d.getMinutes()
    const s = d.getSeconds()

    setTime(formatTime(h) + h + ':' + formatTime(m) + m + ':' + formatTime(s) + s);
  }

  return (
    <>
      <style>{'body, .clock {background-color:' + setBgColor + '; transition: ease-in 1s}'}</style>
      <style>{'p {color:' + setTextColor + '; transition: ease-in 1s}'}</style>
      <style>{'h3, h2 {color:' + setTextTitles + '; transition: ease-in 1s}'}</style>
      <style>{'b, h6 {color:' + setTextWeather + '; transition: ease-in 1s}'}</style>
      <div className="clock">
        <div className="dropdown">
          <button className="dropbtn">
            🔽
          </button>
          <div className="dropdown-content">
            <a href="#">
              Select Color background
              <Select
                className='select'
                options={colorsBG.map(color => ({ label: color.label, value: color.value }))}
                onChange={bacgroundHandler}
              ></Select>
            </a>
            <a href="#">
              Select Color Text
              <Select
                className='select'
                options={colorsText.map(color => ({ label: color.label, value: color.value }))}
                onChange={TextHandler}
              ></Select>
            </a>
            <a href="#">
              Select Color City
              <Select
                className='select'
                options={colorsWeatherTemp.map(color => ({ label: color.label, value: color.value }))}
                onChange={TextTitlesHandler}
              ></Select>
            </a>
            <a href="#">
              Select Color Temperature
              <Select
                className='select'
                options={colorsWeatherTemp.map(color => ({ label: color.label, value: color.value }))}
                onChange={TextWeatherHandler}
              ></Select>
            </a>
          </div>
        </div>
        <div className='clock1 no-seleccionable'>
          <div className="screen">
            <h1 className="time"><p>{time}</p></h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Clock