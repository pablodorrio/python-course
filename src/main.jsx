import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './views/Home/Home/Home'
import Course from './views/Course/Course'
import NotFound from './views/NotFound/NotFound.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)