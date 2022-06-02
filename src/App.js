import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="Global" aboutText="About Global"/>
      <TextForm heading="Enter Text to analyze below"/>
    </>
  );
}

export default App;
