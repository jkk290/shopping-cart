import { Link } from 'react-router'

const NavBar = () => {
    return (
        <section>
            <div>
                <Link to='/'>Home</Link>
            </div>
            <div>
                <Link to='shop'>Shop</Link>
            </div>
            <div>
                10{/* <ItemCounter /> */}
                <button>Cart</button>
            </div>
            
        </section>
    )

}

export default NavBar;