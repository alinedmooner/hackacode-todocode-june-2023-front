import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App'
import Test from './pages/Test'
import Test2 from './pages/Test2'
import Home from './pages/Home'
import './styles/global.css'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="/" index={true} element={<Home />} />
    <Route path="/test/" element={<Test />} />
    <Route path="/test2/" element={<Test2 />} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
