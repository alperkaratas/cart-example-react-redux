import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import CartSummary from "../cart/CartSummary";
import {Link} from 'react-router-dom';

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" style={{width: 1200}}>
        <NavbarBrand
          style={{ marginRight: "13rem", fontWeight: "bold", fontSize: 17 }}
        >
          React-redux - Category list, product list from category and add/delete
          chart example.
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <Link to={"/"} style={{marginRight: 20, fontWeight: 'bold', color: 'green', fontSize: 17}}>Main Page</Link>
          </Nav>
          <Nav className="mr-auto" navbar style={{marginRight: 120}}>
            <CartSummary />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
