// Importeren React
import React from "react";

// Importren ReactDOM
import ReactDOM from "react-dom/client";

// Importeren App
import App from "./App";

// Importeren Browser router
import { BrowserRouter } from 'react-router-dom';

// Renderen de root
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
         <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
