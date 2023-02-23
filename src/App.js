import { Route, Routes } from 'react-router-dom';
import {useState} from 'react';
import {Product} from './components/product/Product';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Contact from './components/contact/Contact';
import AboutUs from './components/about_us/AboutUs';
import Basket from './components/basket/Basket';
import Main from "./Main";
import './index.css';


function App() {
  const [card, setCard] = useState([])
  function addToCard(product){
    setCard([...card, product])
  }
  return (
    <div className="all">
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
