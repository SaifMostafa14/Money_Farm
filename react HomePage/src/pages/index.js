import React, {useState} from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Info from '../components/Info'
import { homeObjOne, homeObjTwo,} from '../components/Info/Data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = ()  => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Footer />
    </>
  )
}

export default Home;