import "./App.scss";
import Chart from "./Chart/Chart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">

      <BrowserRouter>

        <div className="webBody">

          <Routes>
            <Route path="/" element={<Chart />} />
          </Routes>

        </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
