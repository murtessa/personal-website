import React from 'react'
import Header from "./Components/header/Header";
import Nav from "./Components/nav/Nav";
import About from  "./Components/about/About";
import Experience from "./Components/expereince/Experience";
import Serviece  from  "./Components/servieces/Serviece"
import Portfolio from './Components/portfolio/Portfolio';
import Testmonials from './Components/testmonial/Testmonials';
import Contact from './Components/contact/Contact';
import  Footer from './Components/footer/Footer';
 const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Serviece />
    <Portfolio />
    <Testmonials />
    <Contact />
    <Footer />

    </>
  )
}
export default App;
