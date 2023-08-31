import logo from './logo[4020].svg'; 

const Header = () => {
    return (
        <div className="logo">
            <img className="logo-img" src={logo} alt="Company Logo" />
            <ul className="nav-list">
                <li>Our Guarantee</li>
                <li>Testimonials</li>
                <li>News</li>
                <li>Work Here</li>
                <li>About Us</li>
                <li>Buy Anvils</li>
            </ul>
        </div>
        
    );
};

export default Header;