import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Music from './pages/Music';
import Sports from './pages/Sports';
import Tech from './pages/Tech';
import ContactUs from './pages/ContactUs';
import Signin from './pages/Signin';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar  />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Music' element={<Music/>} />
        <Route path='/Sports' element={<Sports/>} />
        <Route path='/Tech' element={<Tech/>} />
        <Route path='/ContactUs' element={<ContactUs/>} />
        <Route path='/Signin' element={<Signin/>} />
      </Routes>
      <div style={{
        display: 'contents',
        justifyContent: 'Center',
        alignItems: 'Center',
        height: '100vh'
      }}>
        <h1>Top User Testimonials</h1>
        <li>User1: It has been an amazing experience.</li>
        <li>User2: Very easy to use</li>
        </div>
    </Router>
  );
}

export default App
