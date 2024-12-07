import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.jsx'
import './index.css'
import Dashbord from "./assets/Pages/dashpordpage/Dashbord"
import TeamPage from "./assets/Pages/teampage/TeamPage"
import ContactPage from "./assets/Pages/contactpage/ContactPage"
import InvoicesPage from "./assets/Pages/invoices/InvoicesPage"
import FormPage from "./assets/Pages/form/FormPage"

import CalendarPage from "./assets/Pages/calendar/CalendarPage"
import FAQPage from "./assets/Pages/faq/FAQPage"
import BarPage from "./assets/Pages/bar/BarPage"
import Pie from "./assets/Pages/pie/Pie"
import LineChart from "./assets/Pages/lineChart/LineChart";
import Geography from "./assets/Pages/geography/Geography";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route  index element={<Dashbord/>} />
      <Route  path='team' element={<TeamPage/>} />
      <Route  path='contacts' element={<ContactPage/>} />
      <Route  path='invoices' element={<InvoicesPage/>} />
      <Route  path='form' element={<FormPage/>} />
      <Route  path='calendar' element={<CalendarPage/>} />
      <Route  path='faq' element={<FAQPage/>} />
      <Route  path='bar' element={<BarPage/>} />
      <Route  path='pie' element={<Pie/>} />
      <Route path="line" element={<LineChart />} />
      <Route path="geography" element={<Geography />} />
    
    </Route>
  )
);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
