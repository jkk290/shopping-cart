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
                <button>Cart</button>
            </div>
            
        </section>
    )

}

export default NavBar;