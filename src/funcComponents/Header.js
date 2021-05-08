
import {Link} from 'react-router-dom';
import {Navbar,Nav,Form,FormControl} from 'react-bootstrap';
function Header()
{
    return(
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Covid-19</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link className="nav-link" to="/india">India</Link>
      <Link className="nav-link" to="/world">World</Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    </Form>
  </Navbar.Collapse>
</Navbar>
    )
}

export default Header;