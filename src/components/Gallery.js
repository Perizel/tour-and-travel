import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Gallery1 from '../assets/gallery1.jpg'
import Gallery2 from '../assets/gallery2.jpg'
import Gallery3 from '../assets/gallery3.jpg'
import Gallery4 from '../assets/gallery4.jpg'



const Gallery = () => {
    return(
        <div className="Gallery">
            <div className="title">
                <h3>Gallery</h3>
                <p>Immerse yourself in the visual allure of our Gallery. Browse through captivating images that showcase the breathtaking destinations and unique experiences awaiting you on your next extraordinary journey.</p>
            </div>

            <div className="contentGallery">
            <Swiper
                pagination={{
                dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper">
                <SwiperSlide>
                    <div className="images">
                        <img src={Gallery1} alt="" />
                        <div className="teks">
                            <h3>TOURS</h3>
                            <p>Embark on unforgettable adventures with our diverse range of tours. From cultural escapades to thrilling expeditions, each tour promises an immersive experience that will leave you with lasting memories.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="images">
                        <img src={Gallery2} alt="" />
                        <div className="teks">
                            <h3>HOTELS</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut laborum tempore quos aperiam! Consectetur reiciendis laborum culpa, dolores cupiditate tenetur! Similique nulla illo rem neque?</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="images">
                        <img src={Gallery3} alt="" />
                        <div className="teks">
                            <h3>CRUISES</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut laborum tempore quos aperiam! Consectetur reiciendis laborum culpa, dolores cupiditate tenetur! Similique nulla illo rem neque?</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="images">
                        <img src={Gallery4} alt="" />
                        <div className="teks">
                            <h3>CITY</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut laborum tempore quos aperiam! Consectetur reiciendis laborum culpa, dolores cupiditate tenetur! Similique nulla illo rem neque?</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    )
}

export default Gallery