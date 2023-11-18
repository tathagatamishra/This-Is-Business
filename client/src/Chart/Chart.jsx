import React, { useEffect, useState } from "react";
import "./Chart.scss";

export default function Chart() {
  const [trading, setTrading] = useState(null);
  

  useEffect(() => {
    const socketUrl =
      "wss://functionup.fintarget.in/ws?id=fintarget-functionup";

    const socket = new WebSocket(socketUrl);

    socket.addEventListener("open", (event) => {
      console.log("WebSocket connected:", event);
    });

    socket.addEventListener("message", (event) => {
      console.log("WebSocket message:", event.data);
      setTrading(event.data);
    });

    socket.addEventListener("close", (event) => {
      console.log("WebSocket closed:", event);
    });

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="Chart">
      <h1>candle-stick</h1>

      <div>{JSON.stringify(trading)}</div>
    </div>
  );
}
