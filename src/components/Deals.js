import Tour1 from '../assets/tour1.jpg'
import Tour2 from '../assets/tour2.jpg'
import Tour3 from '../assets/tour3.jpg'
import Tour4 from '../assets/tour4.jpg'
import Tour5 from '../assets/tour5.jpg'
import Tour6 from '../assets/tour6.jpg'

const Deals = () =>{
    return(
        <div className="Deals">
            <div className="title">
                <h3>Top Deals</h3>
                <p>Unlock unbeatable savings with our Top Deals. Explore exclusive offers and discounts on top-notch travel experiences, making your dream getaway more accessible than ever.</p>
            </div>
            <div className="dealsContent">
                <div className="images">
                    <img src={Tour1} alt="" />
                    <div className="overlay"></div>
                </div>
                <div className="images">
                    <img src={Tour2} alt="" />
                    <div className="overlay"></div>
                </div>
                <div className="images">
                    <img src={Tour3} alt="" />
                    <div className="overlay"></div>
                </div>
                <div className="images">
                    <img src={Tour4} alt="" />
                    <div className="overlay"></div>
                </div>
                <div className="images">
                    <img src={Tour5} alt="" />
                    <div className="overlay"></div>
                </div>
                <div className="images">
                    <img src={Tour6} alt="" />
                    <div className="overlay"></div>
                </div>
            </div>
        </div>
    )
}

export default Deals