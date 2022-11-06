import React from "react";
import ReactDOM from "react-dom";
import ParticlesBg from 'particles-bg';
import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";

ReactDOM.render(
  <>
  <TransactionsProvider>
  <div className="gradient-bg-welcome" >
    <App />
    </div>
  </TransactionsProvider>
  <div className="bubbles">
  </div>
  <ParticlesBg type="cobweb" color="#1087e7" bg={true} />
  </>
  ,
  document.getElementById("root"),
);
