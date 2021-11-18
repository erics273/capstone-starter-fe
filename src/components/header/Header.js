import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, withRouter } from 'react-router-dom';
import UserNav from './UserNav';

function Header(props) {
  let homeLink = "/"
  if(props.isAuthenticated){
    homeLink="/map"
  }
  return (
    <div className="Navbar mb-3">
      <Navbar className="color-nav" variant="light" expand="lg" fixed="top">
        <Navbar.Brand as={Link} to={homeLink}>
        <img
        src="/logo.png"
        width="128"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
        />
          </Navbar.Brand>
        <Navbar.Brand className="w-50 text-center">UPS Northern CA Map</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav activeKey={props.location.pathname} className="ml-auto">
            <UserNav
              isAuthenticated={props.isAuthenticated}
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(Header);
