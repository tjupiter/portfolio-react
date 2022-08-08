import { Route, Routes, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import Header from './components/elements/Header';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import { AnimatePresence } from 'framer-motion';

function App() {
  // get location information that will be needed fro AnimatePresence/'farmer-motion'
  const location = useLocation()
  const isFirstRender = useRef(true);

  return (
    <>
      <Header />
      
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path='/' 
            element={<Home isFirstRender={isFirstRender} />} />

          <Route path='/projects' 
            element={<Projects />} />

          <Route path='contact' 
            element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
