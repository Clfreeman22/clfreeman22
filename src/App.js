import React from 'react';
import './App.css';
import About from './components/about';
import Nav from './components/nav';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import { useState } from 'react';

function App() {

  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {  

    switch (currentPage) {
      case "About":
        return <About />
      case "Contact":
        return <Contact />
      case "Portfolio":
        return <Portfolio />
      case "Resume":
        return <Resume />
      default:
        return <About />
    }
  };
  
  return (
    <div>
      <Nav currentPage={currentPage}
        setCurrentPage={setCurrentPage} />
      <main> 
        {renderPage(currentPage)}
      </main>
    </div>
  );
}

export default App;

