import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './views/Home/Home/Home'
import Module1_lesson1 from './views/Course/Modules/Module1/Module1_lesson1.jsx'
import Module1_lesson2 from './views/Course/Modules/Module1/Module1_lesson2.jsx'
import Module1_end from './views/Course/Modules/Module1/Module1_end.jsx'
import Module2_lesson1 from './views/Course/Modules/Module2/Module2_lesson1.jsx'
import Module2_lesson2 from './views/Course/Modules/Module2/Module2_lesson2.jsx'
import Module2_end from './views/Course/Modules/Module2/Module2_end.jsx'
import Module3_lesson1 from './views/Course/Modules/Module3/Module3_lesson1.jsx'
import Module3_lesson2 from './views/Course/Modules/Module3/Module3_lesson2.jsx'
import Module3_end from './views/Course/Modules/Module3/Module3_end.jsx'
import NotFound from './views/NotFound/NotFound'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />

          <Route path='/module1/lesson1' element={<Module1_lesson1 />} />
          <Route path='/module1/lesson2' element={<Module1_lesson2 />} />
          <Route path='/module1/end' element={<Module1_end />} />

          <Route path='/module2/lesson1' element={<Module2_lesson1 />} />
          <Route path='/module2/lesson2' element={<Module2_lesson2 />} />
          <Route path='/module2/end' element={<Module2_end />} />

          <Route path='/module3/lesson1' element={<Module3_lesson1 />} />
          <Route path='/module3/lesson2' element={<Module3_lesson2 />} />
          <Route path='/module3/end' element={<Module3_end />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)