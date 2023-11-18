import "./App.scss";
import CandlestickChart from "./Chart/Chart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">

      <BrowserRouter>

        <div className="webBody">

          <Routes>
            <Route path="/" element={<CandlestickChart />} />
          </Routes>

        </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
