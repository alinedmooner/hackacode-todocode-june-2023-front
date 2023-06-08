import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={
      createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<App />} >
          <Route index={true} path="/" element={<Home />} />
        </Route>,
      ))}
    />
  </React.StrictMode>,
)
