import Navbar  from './components/Navbar'; 
import Hero from './components/Hero';
import Filter from './components/Filter';
import Products from './components/Products';
import Footer from './components/Footer';
import './App.css';
import { useState } from 'react';

function App() {
  const[showFilter,setShowFilter] = useState(false);


  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Filter setShowFilter={setShowFilter} showFilter={showFilter} />
      <Products showFilter={showFilter} />
      <Footer/>
         
    </div>
  );
}

export default App;
