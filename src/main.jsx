import React from 'react';
import ReactDOM from 'react-dom/client';
import
{
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider,
}
  from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import Employee from './pages/Employee';
import Administrator from './pages/Administrator';
import Sell from './pages/Sell';
import Check from './pages/Check';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={
      createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/administrator" element={<Administrator />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/check" element={<Check />} />
        </Route>,
      ))
    }
    />
  </React.StrictMode>,
);
