import "./App.css";
import { Carousel } from "./components/Carousel";
import{useEffect} from 'react';
import { Homepage } from "./components/Homepage";
import { slides } from "./data/carouselData.json";
import Notfound from "./components/notfound";
import  {BrowserRouter ,Routes,Route } from "react-router-dom";
import { SignUp } from "./components/Signup";
import Login from "./components/Login";
import Personnalise from "./components/personalise/Personnalise";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {


  // useEffect(()=>{
  //   document.addEventListener('contextmenu',handlecontextmenu)
  //   return()=>{
  //     document.removeEventListener('contextlenu',handlecontextmenu)
  //   }
  // })

  // const handlecontextmenu=(e)=>{
  // e.preventDefault()
  // alert("right click not allowed")
  // }

  return (
   <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/personnalise" element={<Personnalise/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/" element={<Homepage/>} />
            <Route path="/banner" element={<Carousel data={slides}/>} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          
        </BrowserRouter>
        </>
 
  );
}

export default App;
