# This-Is-Business
This Is Business



Connect your frontend to the websocket server.
2. You can use socket.io or similar libraries on the frontend for that purpose.
3. Websocket url to connect:
wss://functionup.fintarget.in/ws?id=fintarget-functionup.
As soon as you connect to websocket you will start receiving ltp(last traded price) messages in string
format.
Details of the same are given below.
Websocket message: ( stringified )
{"Nifty": 19573.58, "BankNifty": 19886.0, "FinNifty": 19204.03}


I am using a Websocket url, which is wss://functionup.fintarget.in/ws?id=fintarget-functionup. This Websocket url response looks like this {"Nifty": 19573.58, "BankNifty": 19886.0, "FinNifty": 19204.03} . As soon as you connect to websocket you will start receiving last traded price messages in string format. Create a react app to show a  candle-stick chart for "BankNifty" stock.