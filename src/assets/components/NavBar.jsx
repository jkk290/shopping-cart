import { Link } from 'react-router'

const NavBar = (itemCounter) => {
    return (
        <section>
            <div>
                <Link to='/'>Home</Link>
            </div>
            <div>
                <Link to='shop'>Shop</Link>
            </div>
            <div>
                {itemCounter > 0 ? itemCounter : null}
                <Link to='cart'>Cart</Link>
            </div>
            
        </section>
    )

}

export default NavBar;