import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPlane, faTicket, faShip, faTrain, faHome } from '@fortawesome/free-solid-svg-icons'


const Service = () =>{
    return(
        <div className="Service">
            <div className="title">
                <h3>FZ SERVICES</h3>
                <p>Elevate your travel experience with FZ Services. From seamless logistics to personalized attention, our comprehensive range ensures that every aspect of your journey is handled with care and excellence.</p>
            </div>

            <div className="serviceContent">
                <div className="card">
                        <div className="ServiceIcn">
                        <FontAwesomeIcon icon={faBed} />
                        </div>
                    <h3>HOTEL BOOKING</h3>
                    <p>Secure your stay effortlessly with our hassle-free hotel booking. Discover a curated selection of accommodations, ensuring comfort and convenience throughout your journey.</p>
                </div>
                <div className="card">
                        <div className="ServiceIcn">
                        <FontAwesomeIcon icon={faPlane} />
                        </div>
                    <h3>FLIGHT BOOKING</h3>
                    <p>Fly stress-free with our streamlined flight booking. Unlock a world of travel possibilities as we help you secure the best deals for your seamless journey.</p>
                </div>
                <div className="card">
                        <div className="ServiceIcn">
                        <FontAwesomeIcon icon={faTicket} />
                        </div>
                    <h3>TICKET BOOKING</h3>
                    <p>Book tickets with ease and convenience. Explore the world worry-free as we take care of your ticket booking, ensuring a smooth and enjoyable travel experience.</p>
                </div>
                <div className="card">
                        <div className="ServiceIcn">
                        <FontAwesomeIcon icon={faShip} />
                        </div>
                    <h3>CRUISES BOOKING</h3>
                    <p>Sail into adventure effortlessly with our cruise booking services. Explore the seas in style, as we navigate the perfect cruise experience tailored to your preferences.</p>
                </div>
                <div className="card">
                        <div className="ServiceIcn">
                        <FontAwesomeIcon icon={faTrain} />
                        </div>
                    <h3>TRAIN BOOKING</h3>
                    <p>Effortlessly plan your journey with our train booking service. Experience the ease of securing train tickets as we ensure a smooth and enjoyable travel experience.</p>
                </div>
                <div className="card">
                        <div className="ServiceIcn">
                        <FontAwesomeIcon icon={faHome} />
                        </div>
                    <h3>AMAZING ROOM</h3>
                    <p>Discover comfort beyond compare in our amazing rooms. Immerse yourself in a perfect blend of luxury and convenience, ensuring a delightful stay every time.</p>
                </div>
            </div>
        </div>
    )
}

export default Service