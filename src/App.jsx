import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import Navigation from "./Navigation";
import Jumbo from "./Jumbo";
import AnimatedCursor from "react-animated-cursor";
import AdaptiveScroll from "react-adaptive-scroll";

import './App.css';


function App() {
 
  return (
   <div className="hero">
      <BrowserRouter>
      <AdaptiveScroll />
        <Navigation/>
                    <AnimatedCursor
              innerSize={8}
              outerSize={35}
              innerScale={1}
              outerScale={2}
              outerAlpha={0}
              hasBlendMode={true}
              innerStyle={{
                backgroundColor: 'var(--cursor-color)'
              }}
              outerStyle={{
                border: '3px solid var(--cursor-color)'
              }}
            />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Jumbo" element={<Jumbo />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
