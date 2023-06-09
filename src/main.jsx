import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={
      createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<App />} >
          <Route index={true} path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>,
      ))}
    />
  </React.StrictMode>,
)
