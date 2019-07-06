import React, { Component } from 'react';
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../logo.png'
import {ButtonContainer} from './Button'
import styled from 'styled-components'

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm bg-primary nav-dark px-sm-5">
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand" style={{width:'8vw'}}/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5"> 
                        <Link to='/product-list' className='nav-link' style={{color:'White'}}>
                           Products
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className='ml-auto'>
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-shopping-cart"></i> My cart
                        </span>
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
background:lightblue !important;
.nav-link{
    color:var(--mainwhite) !important;
    font-size:1.3rem;
    text-transform:capitalize !important;
}
li:hover{
    transform:scale(1.1);
}

`

export default Navbar;
