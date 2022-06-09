import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';

function App() {
  
  const [mode, setMode] = useState('light'); // dark mode enable or not 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = (colorName)=>{
    if(colorName === 'light'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#272a2b';
      showAlert("Light mode has been enabled", "success");
    }else if(colorName === 'dark'){
      setMode('dark');
      document.body.style.backgroundColor = '#272a2b';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
    }else if (colorName === 'red'){
      setMode('red');
      document.body.style.backgroundColor = '#dc3545';
      document.body.style.color = 'white';
      showAlert("Red mode has been enabled", "success");
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter Text to analyze below Text" mode={mode} />}/>
          <Route path="/about" element={<About mode={mode} />}/>

          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
