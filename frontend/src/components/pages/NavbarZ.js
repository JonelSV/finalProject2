import React from "react"; 
import { Navbar, Nav, Container} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





const NavbarZ = () => {
  return (
//     <nav id="nav-bar">
//         <ul>
//             <li>
//             <Link to="/">Home</Link>
//             </li>
//             <li>
//             <Link to="/PriorityX">Priority-X</Link>
//             </li>                                             
//             <li>
//             <Link to="/GeoCheck">Geo-Check</Link>
//             </li>                        
//             <li>
//             <Link to="/Contacts">Contacts</Link>
//             </li>
//         </ul>
// </nav>
<header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>SWISS INTERNATIONAL EVENTS</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                <LinkContainer to='/GeoCheck'>
                  <Nav.Link>
                    {' '}
                    <FontAwesomeIcon icon="" /> Geo-Check
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/PriorityX'>
                  <Nav.Link>
                    {' '}
                    <FontAwesomeIcon icon={['fab', 'apple']}/> Priority-X
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/Contacts'>
                  <Nav.Link>
                    {' '}
                    <i className='fas fa-user'></i>Contacts
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </header>


  )
}

export default NavbarZ