import React from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

const NavbarSW = () => {


  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/athlete/athletelist">Athletes</NavbarBrand>
        <NavbarBrand href="/athlete/uploadathlete">Upload Athlete</NavbarBrand>
      </Navbar>
    </div>
  );
}

export default NavbarSW;