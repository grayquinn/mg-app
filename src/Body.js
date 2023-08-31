import smith from '../img/Image 1.png';

const Body = () => {
    return(
        <div className="body">
            <img className="smith-img" from src={smith} alt="smithing" />
            <div className="text-overlay">
                <h1>BUILT TO LAST</h1>
                <p>Our anvils come with a lifetime warranty</p>
            </div>
        </div>
    )
}

export default Body