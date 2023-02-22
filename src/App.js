import { Route, Routes } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import {Product} from './Product';
import Contact from './Contact';
import AboutUs from './AboutUs';
import './index.css';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element = {<Main />}/>
        <Route path="/contact" element = {<Contact />}/>
        <Route path="/aboutus" element = {<AboutUs />}/>
        <Route path="/product/:id" element = {<Product />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
