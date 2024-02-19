import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './component/login';
import Register from './component/register';
import Product from './component/product';

function App() {
  return (
    <div className="App">
      {/* <h1>kimim</h1> */}
      {/* <Routes>
        <Route path='/' element={<login />}/>
      </Routes> */}
       {/* <Register/>  */}

      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter> */}
        
      {/* <Login/> */}
      <Product/>
     
    </div>
  );
}

export default App;
