import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Pagination, FreeMode, Navigation } from "swiper";

const Carousel = ({ images }) => {
    const openImageInNewTab = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <>
            <Swiper
                navigation={true}
                slidesPerView={3}
                loop={true}
                spaceBetween={20}
                modules={[FreeMode, Pagination, Navigation]}
            >
                {images.map((image) => (
                    <SwiperSlide key={image.id} onClick={() => openImageInNewTab(image.path_full)}>
                        <img className="rounded-md cursor-pointer" src={image.path_full} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Carousel;
