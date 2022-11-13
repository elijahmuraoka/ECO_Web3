import '../styles/Navbar.css'
import leafLogo from '../images/leafLogo.svg'

function Navbar() {
    return(
        <ul>
            <div className="left">
            <li>About</li>
            <li>Contact</li>
            </div>
            <div className='center'>
                <li>
                    <img src={leafLogo} alt="Leaf Icon"/>
                </li>
            </div>
            <div className="right">
            <li>Profile</li>
            </div>
        </ul>
    )
}

export default Navbar;