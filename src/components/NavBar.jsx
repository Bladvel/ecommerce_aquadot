import { Container, Navbar,Nav} from 'react-bootstrap';
import CartWidget from './CartWidget';
import aqua_logo from '../aqua-logo.svg'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () =>{

    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to='/ecommerce_aquadot'>
              <img 
                  src={aqua_logo}
                  height='44'
                  width='106'
                  alt='AquaDot logo'
                />
            </Link>
              
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
            <Nav >
              <Nav.Link className='px-3'>
                <NavLink to='ecommerce_aquadot/category/Tazas' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                  Tazas
                </NavLink>
              </Nav.Link>
              <Nav.Link className='px-3'>
                <NavLink to='ecommerce_aquadot/category/Vasos' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                  Vasos
                </NavLink>
              </Nav.Link>
              <Nav.Link className='px-3'>
                <NavLink to='ecommerce_aquadot/category/Cuadernos' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                  Cuadernos
                </NavLink>
              </Nav.Link>
              <Nav.Link className='px-3'>
                <NavLink to='ecommerce_aquadot/category/Lapiceros' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                  Lapiceros
                </NavLink>
              </Nav.Link>
              <Nav.Link className='px-3'>
                <NavLink to='ecommerce_aquadot/category/Mousepads' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                  Mousepads
                </NavLink>
              </Nav.Link>
              <Nav.Link className='px-3'>
                <NavLink to='ecommerce_aquadot/cart' className={'nav-link'}>
                  <CartWidget />
                </NavLink>
                
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar