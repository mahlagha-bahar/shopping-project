import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'
export function Navbar() {
const {openCart,cartQuantity}=useShoppingCart()

    return <NavbarBs sticky='top' className='mb-4 bg-white shadow-sm'>
        <Container>
            <Nav className='me-auto'>
                <Nav.Link to='/' as={NavLink}>
                    Home
                </Nav.Link>
                <Nav.Link to='/store' as={NavLink}>
                    Store
                </Nav.Link>
                <Nav.Link to='/about' as={NavLink}>
                    About
                </Nav.Link>
            </Nav>
            {cartQuantity>0 && (
            <button onClick={openCart} style={{width:'3rem', height:'3rem',position:'relative'}} className='rounded-circle'>
            <svg
xmlns="http://www.w3.org/2000/svg"
x="0px" y="0px"
width="20" height="20"
viewBox="0 0 172 172"

style={{fill: '#26e07f'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" 
strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><
    path d="M0,172v-172h172v172z" fill="none"></path><g fill="#1fb141"><path d="M21.5,21.5v129h64.5v-32.25v-64.5v-32.25zM86,53.75c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25c-17.7805,0 
    -32.25,14.4695 -32.25,32.25zM118.25,86c-17.7805,0 -32.25,14.4695 -32.25,32.25c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25z"></path></g></g></svg>
<div className='rounded-circle d-flex bg-danger justify-content-center align-items-center' 
style={{color:'white', width:'1rem',height:'1rem' ,position:'absolute',bottom:0,right:0,transform:'translate (25% ,25%'}}>{cartQuantity}</div>
      </button>)}
        </Container>
    </NavbarBs>
}