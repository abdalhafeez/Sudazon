import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import { Provider } from "react-redux"
import App from "./App"
import store from "./store/store"
import axios from "axios"

axios.defaults.baseURL = "/api"
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
