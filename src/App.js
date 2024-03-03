import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import Alert from "./Components/Alert";
// import { BrowserRouter, Routes,Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({message : message,type : type});
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark mode is set","success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is set","success");
    }
  };

  return (
    <>
      {/* <BrowserRouter> */}
        <NavBar
          title="Home"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/"
              // element={
              // }
            ></Route>
          </Routes> */}
                <TextForm heading="Enter the text to analyze" mode={mode} />
        </div>
        {/* <About/> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
