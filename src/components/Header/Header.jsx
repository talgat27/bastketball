import logo from '../../images/Logo.png'
import search from '../../images/Search.png'
import heart from '../../images/Heart.png'
import cart from '../../images/Cart.png'
import './Header.scss'

export default function Header() {
    return (
        <header className='header-container'>
            <nav>
                <img src={logo} alt="logo" />
                <div className='header-navbar'>
                    <a href="#">Man</a>
                    <a href="#">Woman</a>
                    <a href="#">Jersey</a>
                    <a href="#">Teams</a>
                    <a href="#">App</a>
                </div>
                <div className='header-icons'>
                    <img src={search} alt="search" />
                    <img src={heart} alt="heart" />
                    <img src={cart} alt="cart" />
                </div>
            </nav>
        </header>
    )
}