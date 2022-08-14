// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
// import required modules
import { Pagination, FreeMode, Navigation } from "swiper";

const Carousel = ({ images }) => {
    //If user clicks on image, show a full sized reference in new tab
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (  
    <div>
        <Swiper 
            navigation={true} 
            slidesPerView={3} 
            loop={true} 
            spaceBetween={20} 
            modules={[FreeMode, Pagination, Navigation]}
        >
            {images.map(image => 
                <SwiperSlide key={image.id} onClick={() => openInNewTab(image.path_full)}>
                    <img className="rounded-md cursor-pointer" src={image.path_full}/>
                </SwiperSlide>
            )}
        </Swiper>
    </div>
    );
}
 
export default Carousel;