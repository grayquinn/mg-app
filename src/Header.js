import logo from './logo[4020].svg'; 

const Header = () => {
    return (
        <div className="logo">
            <img className="logo-img" src={logo} alt="Company Logo" />
            <ul className="nav-list">
                <li>OurGuarantee</li>
                <li>Testimonials</li>
                <li>News</li>
                <li>WorkHere</li>
                <li>AboutUs</li>
                <li>BuyAnvils</li>
            </ul>
        </div>
        
    );
};

export default Header;