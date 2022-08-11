// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper";

const Carousel = ({ images }) => {
    return (  
    <div>
        <Swiper navigation={true} slidesPerView={5} loop={true} spaceBetween={20} modules={[Pagination, Navigation]}>
            {images.map(image => <SwiperSlide key={image.id}><img src={image.path_full}/></SwiperSlide>)}
        </Swiper>
    </div>
    );
}
 
export default Carousel;