import { Container, Navbar,Nav} from 'react-bootstrap';
import aqua_logo from '../images/aqua-logo.svg';
import CartWidget from './CartWidget';


const NavBar = () =>{

    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
              <img 
                src={aqua_logo}
                height='44'
                width='106'
                alt='AquaDot logo'
               />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
            <Nav >
              <Nav.Link className='px-3' href="#Tazas">Tazas</Nav.Link>
              <Nav.Link className='px-3' href="#Vasos">Vasos</Nav.Link>
              <Nav.Link className='px-3' href='#uadernos'>Cuadernos</Nav.Link>
              <Nav.Link className='px-3' href='#Lapiceros'>Lapiceros</Nav.Link>
              <Nav.Link className='px-3' href='#Mousepads'>Mousepads</Nav.Link>
              <Nav.Link className='px-3' href='#Cart'><CartWidget /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar