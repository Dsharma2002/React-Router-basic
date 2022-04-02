import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="Nav">
            <img src="/ds-logo.png" />
            <ul className="nav-links">
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/about'>
                    <li>About</li>
                </Link>
                <Link to='/shop'>
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;