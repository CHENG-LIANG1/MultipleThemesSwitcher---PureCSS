import './App.css';
import './switcher.css'
import React, {useState, useEffect} from 'react';
import PageContent from './pageContent';

function App() {

  const [colorTheme, setColorTheme] = useState('theme-white');

  useEffect( () => {
    const currentThemeColor = localStorage.getItem('theme-color');
    if ( currentThemeColor ) {
      setColorTheme(colorTheme);
    }
  }, []);


  const handleClick = (theme) => {
    setColorTheme(theme);
    localStorage.setItem('theme-color', theme);
  }


  return (
    <div className= {`App ${colorTheme}`} >
      <div className='theme-options'>
        <div id='theme-white'
        onClick={() => handleClick('theme-white')}
        ></div>
        <div id='theme-blue'
        onClick={() => handleClick('theme-blue')}
        ></div>
        <div id='theme-orange'
        onClick={() => handleClick('theme-orange')}
        ></div>
        <div id='theme-purple'
        onClick={() => handleClick('theme-purple')}
        ></div>
        <div id='theme-green'
        onClick={() => handleClick('theme-green')}
        ></div>
        <div id='theme-black'
        onClick={() => handleClick('theme-black')}
        ></div>
      </div>


      <PageContent />
    </div>
  );
}

export default App;
