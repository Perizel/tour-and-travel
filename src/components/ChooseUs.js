import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faEarth, faThumbsUp } from '@fortawesome/free-solid-svg-icons'




const ChooseUs = () => {
    return (
        <div className="chooseUs">
            <div className="title">
                <h3>Why Choose Us</h3>
                <p>Choose us for an unparalleled travel experience, where passion meets professionalism. We pride ourselves on crafting unforgettable journeys, offering personalized services, and ensuring your every travel aspiration is met with excellence. <br /> Discover the world with confidence, knowing that our commitment to quality and customer satisfaction sets us apart from the rest.</p>
            </div>

            <div className="chooseContent">
                <div className="card">
                    <div className="ChooseIcn">
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <h3>HANDPICKED HOTELS</h3>
                    <p>Indulge in curated luxury with our handpicked hotels. Each accommodation is chosen for its unique charm and exceptional service, promising a stay that exceeds your expectations.</p>
                </div>
                <div className="card">
                    <div className="ChooseIcn">
                        <FontAwesomeIcon icon={faEarth} />
                    </div>
                    <h3>WORLD CLASS SERVICE</h3>
                    <p>Experience world-class service that transcends boundaries. Our dedicated team is committed to providing you with unparalleled hospitality, ensuring your journey is not just a trip but a seamless and extraordinary adventure.</p>
                </div>
                <div className="card">
                    <div className="ChooseIcn">
                        <FontAwesomeIcon icon={faThumbsUp} />
                    </div>
                    <h3>BEST PRICE GUARANTEE</h3>
                    <p>Enjoy peace of mind with our Best Price Guarantee. We are committed to offering you the most competitive rates, ensuring that you get the best value for your travel investment.</p>
                </div>
            </div>
        </div>
    )
}

export default ChooseUs