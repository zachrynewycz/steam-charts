import "./App.css";
import Home from "./pages/Home";
import Game from "./pages/Game";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/game/:appid" element={<Game />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
