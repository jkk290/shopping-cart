import { Link } from 'react-router'
import { useContext } from 'react';
import { cartContext } from '../cartContext';

const NavBar = () => {
    const {items} = useContext(cartContext);
    const itemCount = items.length;

    return (
        <section>
            <div>
                <Link to='/'>Home</Link>
            </div>
            <div>
                <Link to='shop'>Shop</Link>
            </div>
            <div>
                {itemCount > 0 ? <span>{itemCount} </span> : null}
                <Link to='cart'>Cart</Link>
            </div>
            
        </section>
    )

}

export default NavBar;