import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, { useState } from 'react';
import Navbar1 from './components/Navbar1';
import Textarea1 from './components/Textarea1';
import Alert1 from './components/Alert1';
import Footer from './components/Footer';



function App() {
  const [text,settext] = useState('');
  const [alert,setalert] = useState(null);
  const [mode,setmode] = useState('light');


// For Changing the dark mode
  const togglemode = () => {
    if(mode === 'light'){
      setmode('dark');
      setalert('DarkMode Enabled');
      document.body.style.backgroundColor = '#042743'
    }
    else{
      setmode('light');
      setalert('LightMode Enabled');
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>

        <Navbar1 mode={mode} setmode={setmode} togglemode={togglemode}/>
        <Alert1 alert={alert}  setalert={setalert}/>
        <Textarea1 text={text} settext={settext} alert={alert}  setalert={setalert}  mode={mode}/>
        <Footer mode={mode}/>

    </>
  );
}

export default App;
