import "./App.css";
import { Carousel } from "./components/Carousel";
import{useEffect} from 'react';
import { Homepage } from "./components/homepage";
import { slides } from "./data/carouselData.json";
import  {BrowserRouter ,Routes,Route } from "react-router-dom";




function App() {


  useEffect(()=>{
    document.addEventListener('contextmenu',handlecontextmenu)
    return()=>{
      document.removeEventListener('contextlenu',handlecontextmenu)
    }
  })

  const handlecontextmenu=(e)=>{
  e.preventDefault()
  alert("right click not allowed")
  }

  return (
    <div className="App">
      {
        <BrowserRouter>
          <Routes>
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/banner" element={<Carousel />} />
            <Route path="*" element={<notfound />} />
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
