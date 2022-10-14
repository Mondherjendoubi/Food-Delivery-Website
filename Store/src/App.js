import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/About";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Products from "./components/products/Products";
import ProductFood from "./components/products/ProductFood";
import ProductDrinks from "./components/products/ProductDrinks";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/sign-in" element={<SignIn/>}/>
                    <Route path="/sign-up" element={<SignUp/>}/>
                    <Route path="/products-food" element={<ProductFood/>}/>
                    <Route path="/products-drinks" element={<ProductDrinks/>}/>
                    <Route path="/products" element={<ProductDrinks/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
