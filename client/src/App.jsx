import "./App.scss";
import Chart from "./Chart/Chart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Nav from "./Nav/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        <div className="webBody">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chart" element={<Chart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
