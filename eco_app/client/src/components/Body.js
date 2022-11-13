import ContactInfo from "./ContactInfo";
import EarnForm from "./EarnForm";

function Body() {
    return (
        <div>
            <div className="about">
                <h2>About</h2>
            </div>
            <EarnForm />
            <div className="contact">
                <h2>Contact Us</h2>
                <ul>
                    <li>
                        <ContactInfo
                            name="Aden Lu"
                            email="lu.ad@northeastern.edu"
                        />
                    </li>
                    <li>
                        <ContactInfo
                            name="Jack Miller"
                            email="dheeraj.valluru@gmail.com"
                        />
                    </li>
                    <li>
                        <ContactInfo
                            name="Dheeraj Valluru"
                            email="dheeraj.valluru@gmail.com"
                        />
                    </li>
                    <li>
                        <ContactInfo
                            name="Elijah Muraoka"
                            email="elijahmuraoka.services@gmail.com"
                        />
                    </li>
                    <li>
                        <ContactInfo
                            name="Mikko Tripakis"
                            email="tripakis.m@northeastern.edu"
                        />
                    </li>
                    <li>
                        <ContactInfo
                            name="Dheeraj Valluru"
                            email="dheeraj.valluru@gmail.com"
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Body;
