import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
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

  // const toggleMode = (colorName)=>{
  //   if(mode === 'light'){
  //     setMode('dark');
  //     console.log(colorName.target.attributes.datacolor.nodeValue);
  //     document.body.style.backgroundColor = '#272a2b';
  //     document.body.style.color = 'white';
  //     showAlert("Dark mode has been enabled", "success");
  //   }else{
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     document.body.style.color = '#272a2b';
  //     showAlert("Light mode has been enabled", "success");
  //   }
  // }

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
      <Navbar title="Global" aboutText="About Global" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading="Enter Text to analyze below" mode={mode} />
      {/* <About /> */}
    </>
  );
}

export default App;
