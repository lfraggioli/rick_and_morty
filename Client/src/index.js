import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  
  <StrictMode>
    <Provider store = {store}>
     <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
  
);


