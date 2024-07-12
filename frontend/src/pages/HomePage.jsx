import { useEffect } from "react";
import tracker from "../components/tracker";
import { Hero } from "../components/Hero";
import NavBar from "../components/NavBar";
import {Features} from "../components/Features";
import Footer from "../components/Footer";

const HomePage = () => {
  useEffect(() => {
    tracker("home_page");
  }, []);

  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <Footer />
      
    </>
  );
};

export default HomePage;
