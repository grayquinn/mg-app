import smith from './img/Image 1.png';
import './Body.css'


const Body = () => {
    return(
        <div className="body">
            <div className='image-wrapper'>
                <img className="smith-img"  src={smith} alt="smithing" />
            </div>
            <div className="text-overlay">
                <h1>BUILT TO LAST</h1>
                <p>Our anvils come with a lifetime warranty.</p>
            </div>
        </div>
    )
}

export default Body


