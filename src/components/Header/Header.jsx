import React from "react";
import { Navbar, Container} from "react-bootstrap"

const Header = () => {
    return (
      <Navbar className="justify-content-center header">
        <Container>
          <Navbar.Brand>
            <h1>Shauna McCord ASL Interpreting</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  };
  
  export default Header;