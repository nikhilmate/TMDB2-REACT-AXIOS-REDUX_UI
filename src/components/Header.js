import React from 'react';

/*
import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
*/

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="container">
        <div class="logo">
          <h1>TMDB<span>2</span></h1>
        </div>
        <div className="nav">
          <div className="navbar">
            <ul>
              <li><a href="#">MOVIES</a></li>
              <li><a href="#">TV</a></li>
              <li><a href="#">FAVOURITES</a></li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Header;