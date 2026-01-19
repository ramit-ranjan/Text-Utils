import { useState } from 'react'
import './App.css'
// import About from './components/About'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

  const[mode,setMode]=useState('light');  //whether dark mode is enabled or not
  const[alert,setAlert]=useState(null);  //we make alert to object

  const showAlert=(message,type)=>{
   setAlert({
    msg:message,
    type:type,
   })
   setTimeout(()=>{
   setAlert(null)
   },1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode enabled!","success");
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled!","success");
    }
  }

  return (
    <>
    {/* <Router> */}
     <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
     <div className="container mt-3">
         {/* <Routes> */}
         {/* <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={ */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          {/* } /> */}
        {/* </Routes> */}
     </div>
     {/* </Router> */}
    </>
  )
}

export default App
