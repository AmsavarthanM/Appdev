import React from "react";
import "./Home.css"
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import SlideShow from "./components/Slide";
import FaqSection from "./components/qa";
import Exercise from "./components/exercise";
import Track from "./components/Trackers";

const Home = () =>{
  return(
   <div style={{backgroundColor:'white'}}>
    <NavBar/>
    <SlideShow/>
    <Track/>
   <Exercise/>
   <FaqSection/>
    <Footer/> 
   </div>
  );
}
export default Home;
