import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./views/Homepage/Homepage";
import About from "./views/About/About";
import { ApiContextProvider } from "./context/ApiContext";

function App() {
  return (
    <>
      <ApiContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </ApiContextProvider>
    </>
  );
}

export default App;
