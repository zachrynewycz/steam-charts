import './App.css';
import Home from './pages/Home';
import Game from "./pages/Game";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//for getting a specific game: https://store.steampowered.com/api/appdetails?appids=10
const App = () => {

  return (  
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/game/:appid' element={<Game/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;
