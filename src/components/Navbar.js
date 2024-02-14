import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";

export default class Navbar extends Component {
    
    render() {
        
        return (
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand me-auto" href="#"><i className="home fa-solid fa-house"></i>Home</Link>
                    
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link mx-lg-2 active" aria-current="page" href="#">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Electronics" className="nav-link mx-lg-2" href="#">Electronics</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Sports" className="nav-link mx-lg-2" href="#">Sports</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Fashion
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Men's wear</a></li>
                                        <li><a className="dropdown-item" href="#">Women Ethnic</a></li>
                                        
                                        <li><a className="dropdown-item" href="#">Women Western</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Furnitures" className="nav-link mx-lg-2" href="#">Furnitures</Link>
                                </li>  
                            </ul> 
                        </div>
                    </div>
                    <Link to="Cart" className='ml-auto'>
                        <button className='cart'>
                            <span className="mr-2">
                                <i className='fas fa-cart-plus' />
                            </span>
                            Kart
                        </button>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        )
    }
}