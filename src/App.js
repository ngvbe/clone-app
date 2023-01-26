import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import NavSearch from "./Components/NavSearch/NavSearch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <NavSearch />
        <Routes>
          <Route path="/" exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
