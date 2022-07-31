import './App.css';
import Home from './pages/Home';
import Store from "./pages/Store";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (  
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/game/:appid' element={<Store/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;
