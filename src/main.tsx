import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import '@/assets/styles/scss/global.scss';
import {ConfigProvider} from "antd";
import {Provider} from "mobx-react";
import {BrowserRouter} from "react-router-dom";
import * as store from "@/stores";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ConfigProvider>
    <Provider {...store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </ConfigProvider>
)
