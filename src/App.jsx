import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ No BrowserRouter here

import NavigationBar from './components/NavigationBar';
import Home from './Pages/Home';  
import About from './Pages/About';
import Classes from './Pages/Classes';
import Page from './Pages/Page';
import Contact from './Pages/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/page" element={<Page />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
