import Logo from '../assets/logo.png'
import {NavLink, Link} from 'react-router-dom'
import './Header.css'
import { useCart } from '../context/CartContext'

export const Header = () => {
  const {cartList} = useCart();
  return (
    <header>
        <Link to= "/" className='logo'>
            <img src={Logo} alt="Logo" />
            <span>G_headphones</span>
        </Link>
        <nav className='navigation'>
            <NavLink to="/" className="link" >Home</NavLink>
            <NavLink to ="/cart" className="link">Cart</NavLink>
        </nav>
        <Link to="/cart" className='items'>
            <span>Cart: {cartList.length}</span>
        </Link>
    </header>
  )
}
