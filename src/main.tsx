import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ConfigProvider} from "antd";
import {Provider} from "mobx-react";
import {BrowserRouter} from "react-router-dom";
import * as store from "@/stores";
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ConfigProvider>
        <Provider {...store}>
            <React.StrictMode>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </React.StrictMode>
        </Provider>
    </ConfigProvider>

)
