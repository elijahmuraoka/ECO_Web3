import "../styles/Navbar.css";
import leafLogo from "../images/leafLogo.svg";
import profileIcon from "../images/profileIcon.svg";

function Navbar() {
    return (
        <div id="navbar">
            <ul id="nav-left">
                <li className="nav-button">
                    <a href="#about-section">About</a>
                </li>
                <li className="nav-button">
                    <a href="#contact-section">Contact</a>
                </li>
                <li>
                    <button
                        data-modal-target="#earn-pop-up"
                        className="nav-button"
                    >
                        Earn
                    </button>
                </li>
                <li>
                    <button className="nav-button">Shop</button>
                </li>
                <li>
                    <img id="leaf-logo" src={leafLogo} alt="Leaf Icon" />
                </li>
            </ul>
            <ul id="nav-right">
                <img
                    id="profile-icon"
                    className="nav-button"
                    src={profileIcon}
                    alt="Profile Icon"
                />
            </ul>
        </div>
    );
}

export default Navbar;
