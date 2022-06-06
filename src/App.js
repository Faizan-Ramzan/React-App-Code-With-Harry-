import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'

function App() {
  
  const [mode, setMode] = useState('light'); // dark mode enable or not 

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#272a2b';
      document.body.style.color = 'white';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#272a2b';
    }
  }

  return (
    <>
      <Navbar title="Global" aboutText="About Global" mode={mode} toggleMode={toggleMode} />
      <TextForm heading="Enter Text to analyze below" mode={mode} />
      {/* <About /> */}
    </>
  );
}

export default App;
