import { Link } from 'react-router';
import * as styles from './navbar.module.css';

const NavBar = ({ itemCount }) => {

    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='shop'>Shop</Link></li>
                <li><Link to='cart'>Cart</Link> { itemCount > 0 ? <span> {itemCount}</span> : null } </li>
            </ul>
        </nav>
    )

}

export default NavBar;