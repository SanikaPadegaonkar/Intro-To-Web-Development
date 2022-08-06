import { useState,useEffect } from 'react'
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
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  const [guitars,setGuitarCount] = useState(0);
    useEffect(() => {
        console.log(`You have clicked the first button ${guitars} times`);
      }, [guitars]);
    
      const [drums, setDrumCount] = useState(0);
    
      useEffect(() => {
        console.log(`You have clicked the second button ${drums} times`)
      }, [drums]);

      const [cricketbats, setBatCount] = useState(0);
    
      useEffect(() => {
        console.log(`You have clicked the third button ${cricketbats} times`)
      }, [cricketbats]);

      const [balls, setBallCount] = useState(0);
    
      useEffect(() => {
        console.log(`You have clicked the fourth button ${balls} times`)
      }, [balls]);

      const [usb, setUSBCount] = useState(0);
    
      useEffect(() => {
        console.log(`You have clicked the fifth button ${usb} times`)
      }, [usb]);

      const [chargers, setChargerCount] = useState(0);
    
      useEffect(() => {
        console.log(`You have clicked the sixth button ${chargers} times`)
      }, [chargers]);

      
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
        <Route path='/ShoppingCart' element={<ShoppingCart/>} />
      </Routes>
      <h3>From the Music Inventory</h3>
      <button onClick={() => setGuitarCount(guitars + 1)}>Guitar Add</button>
      <button onClick={() => setGuitarCount(guitars - 1)}>Guitar Delete</button>
      <p>Guitar count : {guitars}</p>
      <button onClick={() => setDrumCount(drums + 1)}>Drums Add</button>
      <button onClick={() => setDrumCount(drums - 1)}>Drums Delete</button>
      <p>Drums count : {drums}</p>

      <h3>From the Sports Inventory</h3>
      <button onClick={() => setBatCount(cricketbats + 1)}>Cricket Bat Add</button>
      <button onClick={() => setBatCount(cricketbats - 1)}>Cricket Bat Delete</button>
      <p>Cricket Bat count : {cricketbats}</p>
      <button onClick={() => setBallCount(balls + 1)}>Tennis Balls Add</button>
      <button onClick={() => setBallCount(balls - 1)}>Tennis Balls Delete</button>
      <p>Tennis Balls count : {balls}</p>

      <h3>From the Tech Inventory</h3>
      <button onClick={() => setUSBCount(usb + 1)}>USB Add</button>
      <button onClick={() => setUSBCount(usb - 1)}>USB Delete</button>
      <p>USB count : {usb}</p>
      <button onClick={() => setChargerCount(chargers + 1)}>Laptop Charger Add</button>
      <button onClick={() => setChargerCount(chargers - 1)}>Laptop Charger Delete</button>
      <p>Laptop Charger count : {chargers}</p>

      <h3>Total items issued : {guitars+drums+cricketbats+balls+usb+chargers}</h3>
      <div style={{
        display: 'contents',
        justifyContent: 'Center',
        alignItems: 'Center',
        height: '100vh'
      }}>
        <h2>Top User Testimonials</h2>
        <li>User1: It has been an amazing experience.</li>
        <li>User2: Very easy to use</li>
        </div>
    </Router>
  );
}

export default App
