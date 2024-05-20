import "./App.css";
import { Carousel } from "./components/Carousel";
import{useEffect} from 'react';

import { slides } from "./data/carouselData.json";





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
      <Carousel data={slides} />
    </div>
  );
}

export default App;
