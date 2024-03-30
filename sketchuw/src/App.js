import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './component/login';
import Register from './component/register';
import Product from './component/product';
import All from './component/ALL';
import Foot from './component/Foot';
import Bag from './component/Bag';
import Access from './component/Access';
import User from './component/User';
import Cart from './component/cart';
import Show from './component/item';
import Payment from './component/Payment';

function App() {
  return (
    <div className="App">
      {/* <h1>kimim</h1> */}
      
      {/* <Routes>
        <Route path='/' element={<login />}/>
      </Routes> */}
       {/* <Register/>  */}

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Product />} />
        <Route path="/All" element={<All />} />
        <Route path="/Footwear" element={<Foot />} />
        <Route path="/Home" element={<Product />} />
        <Route path="/Bag" element={<Bag />} />
        <Route path="/access" element={<Access />} />
        <Route path="/account" element={<User />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/show" element={<Show/>} />
        <Route path="/Payment" element={<Payment/>} />












      </Routes>
    </BrowserRouter>
        
      {/* <Login/> */}
      {/* <Product/> */}
      {/* <All/> */}
     
    </div>
  );
}

export default App;
