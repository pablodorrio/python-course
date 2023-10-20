import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './views/Home/Home/Home'
import Module1_lesson1 from './views/Course/Modules/Module1/Module1_lesson1.jsx'
import Module1_lesson2 from './views/Course/Modules/Module1/Module1_lesson2.jsx'
import Module1_lesson3 from './views/Course/Modules/Module1/Module1_lesson3.jsx'
import Module1_lesson4 from './views/Course/Modules/Module1/Module1_lesson4.jsx'
import Module1_lesson5 from './views/Course/Modules/Module1/Module1_lesson5.jsx'
import Module1_lesson6 from './views/Course/Modules/Module1/Module1_lesson6.jsx'
import Module1_lesson7 from './views/Course/Modules/Module1/Module1_lesson7.jsx'
import Module1_lesson8 from './views/Course/Modules/Module1/Module1_lesson8.jsx'
import Module1_end from './views/Course/Modules/Module1/Module1_end.jsx'
import Module2_lesson1 from './views/Course/Modules/Module2/Module2_lesson1.jsx'
import Module2_lesson2 from './views/Course/Modules/Module2/Module2_lesson2.jsx'
import Module2_lesson3 from './views/Course/Modules/Module2/Module2_lesson3.jsx'
import Module2_lesson4 from './views/Course/Modules/Module2/Module2_lesson4.jsx'
import Module2_lesson5 from './views/Course/Modules/Module2/Module2_lesson5.jsx'
import Module2_lesson6 from './views/Course/Modules/Module2/Module2_lesson6.jsx'
import Module2_lesson7 from './views/Course/Modules/Module2/Module2_lesson7.jsx'
import Module2_end from './views/Course/Modules/Module2/Module2_end.jsx'
import Module3_lesson1 from './views/Course/Modules/Module3/Module3_lesson1.jsx'
import Module3_lesson2 from './views/Course/Modules/Module3/Module3_lesson2.jsx'
import Module3_lesson3 from './views/Course/Modules/Module3/Module3_lesson3.jsx'
import Module3_lesson4 from './views/Course/Modules/Module3/Module3_lesson4.jsx'
import Module3_lesson5 from './views/Course/Modules/Module3/Module3_lesson5.jsx'
import Module3_lesson6 from './views/Course/Modules/Module3/Module3_lesson6.jsx'
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
          <Route path='/module1/lesson3' element={<Module1_lesson3 />} />
          <Route path='/module1/lesson4' element={<Module1_lesson4 />} />
          <Route path='/module1/lesson5' element={<Module1_lesson5 />} />
          <Route path='/module1/lesson6' element={<Module1_lesson6 />} />
          <Route path='/module1/lesson7' element={<Module1_lesson7 />} />
          <Route path='/module1/lesson8' element={<Module1_lesson8 />} />
          <Route path='/module1/end' element={<Module1_end />} />

          <Route path='/module2/lesson1' element={<Module2_lesson1 />} />
          <Route path='/module2/lesson2' element={<Module2_lesson2 />} />
          <Route path='/module2/lesson3' element={<Module2_lesson3 />} />
          <Route path='/module2/lesson4' element={<Module2_lesson4 />} />
          <Route path='/module2/lesson5' element={<Module2_lesson5 />} />
          <Route path='/module2/lesson6' element={<Module2_lesson6 />} />
          <Route path='/module2/lesson7' element={<Module2_lesson7 />} />
          <Route path='/module2/end' element={<Module2_end />} />

          <Route path='/module3/lesson1' element={<Module3_lesson1 />} />
          <Route path='/module3/lesson2' element={<Module3_lesson2 />} />
          <Route path='/module3/lesson3' element={<Module3_lesson3 />} />
          <Route path='/module3/lesson4' element={<Module3_lesson4 />} />
          <Route path='/module3/lesson5' element={<Module3_lesson5 />} />
          <Route path='/module3/lesson6' element={<Module3_lesson6 />} />
          <Route path='/module3/end' element={<Module3_end />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)