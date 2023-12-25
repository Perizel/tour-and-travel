import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Australia from '../assets/australia.jpg'
import Canada from '../assets/canada.jpg'
import France from '../assets/france.jpg'
import Germany from '../assets/german.jpg'
import Japan from '../assets/japan.jpg'
import Netherland from '../assets/german.jpg'




const Specials = () =>{
    return(
        <div className="Specials">
            <div className="title">
                <h3>Special Package</h3>
                <p>Unwrap extraordinary moments with our Special Package. Tailored for indulgence, it promises an enchanting journey filled with exclusive perks and unforgettable experiences.</p>
            </div>

            <div className="specialContent">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper">
                <SwiperSlide>
                    <div className="specialCard">
                        <div className="images">
                            <img src={Australia} alt=""/>
                        </div>
                        <div className="specialsTeks">
                            <h3>Australia</h3>
                            <h4>Starting From $100</h4>
                            <p>Explore Australia's wonders with us. Unforgettable adventures await Down Under.</p>
                            <div className="ratting">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            </div>
                            <button>5 Days 4 Night</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="specialCard">
                        <div className="images">
                            <img src={Canada} alt="" />
                        </div>
                        <div className="specialsTeks">
                            <h3>Canada</h3>
                            <h4>Starting From $100</h4>
                            <p>Discover Canada's beauty. Majestic landscapes and vibrant cities beckon your exploration.</p>
                            <div className="ratting">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            </div>
                            <button>5 Days 4 Night</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="specialCard">
                        <div className="images">
                            <img src={France}alt="" />
                        </div>
                        <div className="specialsTeks">
                            <h3>France</h3>
                            <h4>Starting From $100</h4>
                            <p>Experience France's charm. Rich history, art, and cuisine await your <br /> discovery.</p>
                            <div className="ratting">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            </div>
                            <button>5 Days 4 Night</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="specialCard">
                        <div className="images">
                            <img src={Germany} alt=""/>
                        </div>
                        <div className="specialsTeks">
                            <h3>Germany</h3>
                            <h4>Starting From $100</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, praesentium.</p>
                            <div className="ratting">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            </div>
                            <button>5 Days 4 Night</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="specialCard">
                        <div className="images">
                            <img src={Japan} alt=""/>
                        </div>
                        <div className="specialsTeks">
                            <h3>Japan</h3>
                            <h4>Starting From $100</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, praesentium.</p>
                            <div className="ratting">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            </div>
                            <button>5 Days 4 Night</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="specialCard">
                        <div className="images">
                            <img src={Netherland} alt=""/>
                        </div>
                        <div className="specialsTeks">
                            <h3>Netherland</h3>
                            <h4>Starting From $100</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, praesentium.</p>
                            <div className="ratting">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            </div>
                            <button>5 Days 4 Night</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    )
}

export default Specials
