import "./App.scss";
// import CandlestickChart from "./Chart/Chart";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {

//   return (
//     <div className="App">

//       <BrowserRouter>

//         <div className="webBody">

//           <Routes>
//             <Route path="/" element={<CandlestickChart />} />
//           </Routes>

//         </div>
        
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import Websocket from 'react-websocket';

const CandlestickChart = ({ data }) => {
  const series = [{
    name: 'BankNifty',
    data: data.map(entry => ({
      x: new Date(entry.timestamp),
      y: [entry.open, entry.high, entry.low, entry.close]
    }))
  }];

  const options = {
    chart: {
      type: 'candlestick',
    },
    xaxis: {
      type: 'datetime',
    },
  };

  return <Chart options={options} series={series} type="candlestick" height={350} />;
};

const App = () => {
  const [bankNiftyData, setBankNiftyData] = useState([]);

  const handleData = (data) => {
    try {
      const parsedData = JSON.parse(data);
      setBankNiftyData(prevData => [...prevData, { ...parsedData, timestamp: new Date() }]);
    } catch (error) {
      console.error('Error parsing WebSocket data:', error);
    }
  };

  useEffect(() => {
    const newData = bankNiftyData.filter(entry => new Date() - entry.timestamp < 24 * 60 * 60 * 1000);
    setBankNiftyData(newData);
  }, [bankNiftyData]);

  return (
    <div className="App">
      <Websocket
        url="wss://functionup.fintarget.in/ws?id=fintarget-functionup"
        onMessage={handleData}
      />
      <CandlestickChart data={bankNiftyData} />
    </div>
  );
};

export default App;
