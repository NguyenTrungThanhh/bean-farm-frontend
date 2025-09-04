import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { assets } from '@/assets/assets';

const SwiperSlider = () => {
    const slides = [
        { id: 1, img: assets.slider1 },
        { id: 2, img: assets.slider1 },
        { id: 3, img: assets.slider1 },
    ];

    return (
        <div className="relative z-0 mt-4">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="relative z-0 rounded-xl"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <img src={slide.img} alt={`Slide ${slide.id}`} className="w-full object-cover rounded-xl" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperSlider;
