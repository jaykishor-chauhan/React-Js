import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import Alert from "./components/Alert";
import { useState } from "react";
function App() {

  // Alert 
  const [alerts, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  }

  // mode toggle
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(80 82 82)';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  
  return (
    <>
    <Navbar title="TextUtils" toggleMode={toggleMode} mode={mode}/>
    <Alert alert={alerts} />
    <TextBox heading='Enter your text to Analysis.' showAlert={showAlert} mode={mode} />
    </>
  );
}

export default App;
