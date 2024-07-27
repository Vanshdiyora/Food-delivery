import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Link } from 'react-router-dom';
import addToCart from '../images/add-to-cart.png'
import AddToCart from './AddToCart';
import {useState,useEffect} from 'react'

function Headers(props) {
    const [upcount,setUpcount]=useState(0)
    const [not,setNot]=useState(false)
    
    useEffect(() => {
        setUpcount(props.count);
    }, [props.count]);
    
    const name = localStorage.getItem('user-det')
    console.log(name)
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand >Food Delivery</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link ><Link to='/' className='headers-left'>Home</Link></Nav.Link>

                            {
                                localStorage.getItem('user-det') ?
                                    <>
                                        <Nav.Link ><Link to='/restuarant' className='headers-left'>Restuarant</Link></Nav.Link>
                                        <Nav.Link ><Link to='/food' className='headers-left'>Food</Link></Nav.Link>
                                        <Nav.Link ><Link to='/about' className='headers-left'>About us</Link></Nav.Link>
                                    </> : null
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
                {
                    localStorage.getItem('user-det') ?
                        <>

                            <Link to='/cart'>
                                <div style={{ position: 'relative', display: 'inline-block' }}>
                                    <img src={addToCart} className='cart-img' alt='Add to Cart' />
                                    
                                                                 
                                </div>
                            </Link>


                            <NavDropdown title={name} id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Payment
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">History</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Feedback</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.5">
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </> :
                        null
                }

                {
                    localStorage.getItem('user-det') ?
                        <NavLink to='/logout' className='headers-right'>Logout</NavLink> : <>
                            <NavLink to='/login' className='headers-right'>Login</NavLink>

                            <NavLink to='/register' className='headers-right'>Register</NavLink>
                        </>
                }


            </Navbar>

        </>

    );
}

export default Headers;



