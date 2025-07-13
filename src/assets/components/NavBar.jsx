import { Link } from 'react-router'

const NavBar = ({ itemCount }) => {

    return (
        <section>
            <div>
                <Link to='/'>Home</Link>
            </div>
            <div>
                <Link to='shop'>Shop</Link>
            </div>
            <div>
                { itemCount > 0 ? <span>{itemCount} </span> : null }
                <Link to='cart'>Cart</Link>
            </div>
            
        </section>
    )

}

export default NavBar;