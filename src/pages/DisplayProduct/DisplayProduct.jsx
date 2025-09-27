import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import config from '@/configs';
import { assets } from '@/assets/assets';

function DisplayProduct() {
    const { slug } = useParams();

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const images = [assets.hanhTay, assets.ngoRi, assets.dauCove, assets.caChuaHaLan, assets.biDao, assets.biDao];

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await axios.get(`/api/v1/client/TinTuc/${slug}`);
    //             setNewsData(res.data.news);
    //         } catch (error) {
    //             console.error('Lỗi khi load chi tiết tin tức:', error);
    //         }
    //     };

    //     fetchData();
    // }, [slug]);

    // useEffect(() => {
    //     document.title = newsData?.name;
    // }, [newsData]);

    return (
        <>
            {/* Breadcrumb */}
            <div className="bg-[#f5f5f5] w-full py-4 mb-5">
                <div className="w-[83%] mx-auto">
                    <div className="flex items-center gap-3">
                        <Link to={config.routes.home}>
                            <h1 className="text-sm hover:text-primary-yellow">Trang chủ</h1>
                        </Link>
                        <FontAwesomeIcon icon={faAngleRight} size="xs" />
                        <Link to={config.routes.home}>
                            <h1 className="text-sm hover:text-primary-yellow">Rau ăn củ</h1>
                        </Link>
                        <FontAwesomeIcon icon={faAngleRight} size="xs" />
                        <h1 className="text-sm text-primary-yellow">Hành tây</h1>
                    </div>
                </div>
            </div>
            <div className="w-[83%] mx-auto">
                <div className="flex gap-2">
                    <div className="w-2/4 px-[10px]">
                        <div className="w-28">
                            <Swiper
                                direction="vertical"
                                spaceBetween={10}
                                slidesPerView={4}
                                modules={[Navigation]}
                                className="h-[490px]"
                            >
                                {images.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={img}
                                            alt={`thumb-${index}`}
                                            className="w-[112px] h-[112px] object-cover border rounded-md cursor-pointer"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div>
                            <Swiper spaceBetween={10} slidesPerView={1} modules={[Navigation]} className="h-[490px]">
                                {images.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={img}
                                            alt={`thumb-${index}`}
                                            className="w-[112px] h-[112px] object-cover border rounded-md cursor-pointer"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className="bg-primary-yellow w-2/4 h-4 px-[10px]"></div>
                </div>
            </div>
        </>
    );
}

export default DisplayProduct;
