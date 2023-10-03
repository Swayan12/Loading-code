import React from 'react';
import "./index.css";
import App from './App';
import {createRoot } from 'react-dom/client';


const task =document.getElementById('root');
const root=createRoot(task);
root.render(
    <App/>
);