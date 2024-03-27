import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import Navigation from "./Navigation";
import Jumbo from "./Jumbo";

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Jumbo" element={<Jumbo />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
