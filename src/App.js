import { Route, Routes } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import {Product} from './Product';
import Contact from './Contact';
import AboutUs from './AboutUs';
import './index.css';
import Basket from './Basket';
import {useState} from 'react';

function App() {
  const [card, setCard] = useState([])
  function addToCard(product){
    setCard([...card, product])
  }
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element = {<Main addToCard={addToCard}/>}/>
        <Route path="/contact" element = {<Contact />}/>
        <Route path="/aboutus" element = {<AboutUs />}/>
        <Route path="/basket" element = {<Basket card = {card}/>}/>
        <Route path="/product/:id" element = {<Product />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
