import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Register from './component/register';
import Login from './component/login';

function App() {
  return (
    <div className="App">
      {/* <h1>kimim</h1> */}
      {/* <Routes>
        <Route path='/' element={<login />}/>
      </Routes> */}
      {/* <register/> */}
      <Login/>
    </div>
  );
}

export default App;
