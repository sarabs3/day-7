import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';
import {Navbar, Nav, NavItem, NavLink} from 'reactstrap';

const Navigation = () => (
    <>
    <Navbar>
        <Nav>
            <NavItem>
                <NavLink>
                    <Link to={{ pathname: '/users', state: { name: 'sarab' }}}>Home</Link>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink>
                    <Link to="/about/4">About</Link>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink>
                <Link to="/contact">Contact</Link>
                </NavLink>
            </NavItem>
        </Nav>
    </Navbar>
    <ul className="navigation">
        <li>
            <Link to={{ pathname: '/users', state: { name: 'sarab' }}}>Home</Link>
        </li>
        <li>
            <Link to="/about/4">About</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
    </ul>
    </>
);

export default Navigation;
