import React, { useEffect } from "react";
import "./Chart.scss";

export default function Chart() {
  useEffect(() => {
    const socketUrl =
      "wss://functionup.fintarget.in/ws?id=fintarget-functionup";

    const socket = new WebSocket(socketUrl);

    socket.addEventListener("open", (event) => {
      console.log("WebSocket connected:", event);
    });

    socket.addEventListener("message", (event) => {
      console.log("WebSocket message:", event.data);
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

      <div>div</div>
    </div>
  );
}
