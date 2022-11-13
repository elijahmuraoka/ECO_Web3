import "../styles/Header.css";
import leafLogo from "../images/leafLogo.svg";
import Navbar from "./Navbar";

function Header() {
    return (
        <div>
            <Navbar />
            <div id="header-container">
                <h1 id="title">ECO</h1>
                <p id="mission-statement">
                    Earn rewards.
                    <br />
                    Positively impact the world.
                    <br />
                    Be the Change.
                </p>
            </div>
        </div>
    );
}

export default Header;
