import Board from "~/pages/Boards/_id";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "~/pages/Auth/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/board" element={<Board/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
