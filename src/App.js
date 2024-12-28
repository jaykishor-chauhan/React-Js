import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import Alert from "./components/Alert";
import { useState } from "react";
function App() {
  
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  }

  return (
    <>
    <Navbar title="TextUtils" />
    <Alert alert={alert} />
    <TextBox heading='Enter your text to Analysis.' showAlert={showAlert} />
    </>
  );
}

export default App;
