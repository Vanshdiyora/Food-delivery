import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Signup from './Components/Signup'
import Restuarant from './Components/Restuarant';
import AboutUs from './Components/AboutUs';
import Food from './Components/Food';
import Protected from './Components/Protected';
import Logout from './Components/Logout';
import AddToCart from './Components/AddToCart';
import { CartProvider } from 'react-use-cart';
function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>   
      
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Signup/>}></Route>
      <Route path='/restuarant' element={<Protected Cmp={Restuarant}/>}></Route>
      <Route path='/about' element={<Protected Cmp={AboutUs}/>}></Route>
      <Route path='/food' element={<Protected Cmp={Food}/>}></Route>
      <Route path='/logout' element={<Protected Cmp={Logout}/>}></Route>
      <Route path='/cart' element={<Protected Cmp={AddToCart}/>}></Route>



      </Routes>
      </BrowserRouter>
      </CartProvider>
      
    </div>
  );
}

export default App;