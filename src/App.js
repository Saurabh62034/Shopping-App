import React, {Component} from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart/Cart";
import Modal from "./components/Modal"

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/Details" element={<Details/>} />
          <Route path="/Cart" element={<Cart/>} />
          <Route element={<Default/>} />
        </Routes>
        <Modal></Modal>
      </React.Fragment>
    )
  }
}
export default App;
