import axios from '@/api/axiosConfig';
import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faChevronLeft, faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules'; // thêm Thumbs
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { news, product } from '@/assets/assets';
import config from '@/configs';

function DisplayTinTuc() {
    const { slug } = useParams();

    const [tinTucData, setTinTucData] = useState(null);
    const [tinTucMoiData, setTinTucMoiData] = useState([]);
    const swiperOutstandRef = useRef(null);
    const swiperNewsRef = useRef(null);
    const [isBeginningOutstand, setIsBeginningOutstand] = useState(true);
    const [isEndOutstand, setIsEndOutstand] = useState(false);
    const [isBeginningNews, setIsBeginningNews] = useState(true);
    const [isEndNews, setIsEndNews] = useState(false);

    useEffect(() => {
        if (tinTucData?.name) {
            document.title = tinTucData.name;
        }
    }, [tinTucData?.name]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/api/v1/client/TinTuc/${slug}`);
                setTinTucData(res.data.news);
            } catch (error) {
                console.error('Lỗi khi load chi tiết tin tức:', error);
            }
        };
        fetchData();
        fetchTinTucMoi(1);
    }, [slug]);

    const fetchTinTucMoi = async (page = 1, category = 'Tin tức') => {
        try {
            const query = new URLSearchParams({
                page,
                limit: 5,
                category,
            });

            const res = await axios.get(`/api/v1/client/TinTuc/pagination?${query.toString()}`);

            if (res.data.success) {
                setTinTucMoiData(res.data.news);
            }
        } catch (error) {
            console.log('Lỗi khi fetch tin tức:', error);
        }
    };

    const handleSlideOutstandChange = () => {
        const swiper = swiperOutstandRef.current?.swiper;
        if (swiper) {
            setIsBeginningOutstand(swiper.isBeginningOutstand);
            setIsEndOutstand(swiper.isEndOutstand);
        }
    };

    const handleSlideNewsChange = () => {
        const swiper = swiperNewsRef.current?.swiper;
        if (swiper) {
            setIsBeginningNews(swiper.isBeginningNews);
            setIsEndNews(swiper.isEndNews);
        }
    };

    const formatPrice = (price) => {
        return price?.toLocaleString('vi-VN') + '₫';
    };

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
                        <Link to={config.routes.TinTuc}>
                            <h1 className="text-sm hover:text-primary-yellow">Tin tức</h1>
                        </Link>
                        <FontAwesomeIcon icon={faAngleRight} size="xs" />
                        <h1 className="text-sm text-primary-yellow">
                            Công dụng của gạo lứt tím hữu cơ và cách nấu gạo lứt tím
                        </h1>
                    </div>
                </div>
            </div>
            <div className="w-[83%] mx-auto">
                <div className="flex gap-4 items-start">
                    <div className="w-[75%]">
                        {tinTucData ? (
                            <>
                                <h1 className="font-bold text-[30px] mb-[15px]">{tinTucData.name}</h1>
                                <div className="flex items-center gap-2 mb-4">
                                    <FontAwesomeIcon icon={faClock} size="sm" className="text-primary-green" />
                                    <p className="text-sm">{tinTucData.date}</p>
                                </div>
                                <div
                                    className="content-news-area prose prose-sm md:prose-base max-w-none"
                                    dangerouslySetInnerHTML={{ __html: tinTucData.content }}
                                />
                            </>
                        ) : (
                            <>
                                <p>Đang tải nội dung bài viết...</p>
                            </>
                        )}
                        <div className="flex items-center justify-start mb-8">
                            <p className="text-sm font-semibold mr-2">Chia sẻ</p>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#336699] hover:opacity-70 cursor-pointer duration-300">
                                    <FontAwesomeIcon icon={faFacebookF} className="text-white" />
                                </div>
                                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#ca3333] hover:opacity-70 cursor-pointer duration-300">
                                    <FontAwesomeIcon icon={faPinterest} className="text-white" />
                                </div>
                                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#00acec] hover:opacity-70 cursor-pointer duration-300">
                                    <FontAwesomeIcon icon={faTwitter} className="text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[25%] sticky top-2">
                        <div className="flex flex-col gap-4">
                            <div className="w-full max-w-xs flex items-center border border-primary-green rounded-md overflow-hidden">
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm bài viết..."
                                    className="flex-1 px-3 h-10 text-sm focus:outline-none"
                                />
                                <button className="w-10 h-[38px] bg-primary-green text-white flex items-center justify-center rounded-md mr-[1px] hover:bg-primary-yellow duration-500">
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </div>
                            <div className="border border-[#eee] rounded-md">
                                <h1 className="px-3 py-3 bg-primary-green text-white text-sm font-bold uppercase rounded-t-md">
                                    Bài viết mới
                                </h1>
                                <div className="flex flex-col gap-4 p-3">
                                    {tinTucMoiData.map((item, index) => (
                                        <div className="flex gap-2" key={index}>
                                            <div>
                                                <img src={item.image} alt="" className="w-[100px] h-[63px]" />
                                            </div>
                                            <div className="flex-1">
                                                <h1 className="text-sm font-medium line-clamp-2 hover:text-primary-green duration-300">
                                                    {item.name}
                                                </h1>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[83%] mx-auto my-8">
                <div className="w-full bg-[#f7f7f7] rounded-xl flex">
                    <div className="my-4 mx-4 overflow-hidden">
                        <div className="flex items-center justify-between">
                            <div>
                                <Link>
                                    <h1 className="text-[28px] font-bold hover:text-primary-green duration-300">
                                        Sản phẩm nổi bật
                                    </h1>
                                </Link>
                            </div>
                            <div className="flex items-center gap-1">
                                <div
                                    className={`group w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                                        isBeginningOutstand
                                            ? 'bg-[#cfcfcf] opacity-50 hover:bg-[#008b4b]'
                                            : 'bg-[#cfcfcf] hover:bg-primary-green cursor-pointer'
                                    }`}
                                    onClick={() => {
                                        if (!isBeginningOutstand) swiperOutstandRef.current?.swiper?.slidePrev();
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon={faChevronLeft}
                                        size="lg"
                                        className={`${
                                            isBeginningOutstand
                                                ? 'text-[#7e7e7e]'
                                                : 'text-[#333] group-hover:text-white'
                                        }`}
                                    />
                                </div>

                                <div
                                    className={`group w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                                        isEndOutstand
                                            ? 'bg-[#cfcfcf] opacity-50 hover:bg-[#008b4b]'
                                            : 'bg-[#cfcfcf] hover:bg-primary-green cursor-pointer'
                                    }`}
                                    onClick={() => {
                                        if (!isEndOutstand) swiperOutstandRef.current?.swiper?.slideNext();
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon={faChevronRight}
                                        size="lg"
                                        className={`${
                                            isEndOutstand ? 'text-[#7e7e7e]' : 'text-[#333] group-hover:text-white'
                                        }`}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <Swiper
                                ref={swiperOutstandRef}
                                onSlideChange={handleSlideOutstandChange}
                                modules={[Navigation, Pagination]}
                                slidesPerView="auto"
                                spaceBetween={20}
                                className="rounded-xl overflow-hidden px-10 mx-12"
                            >
                                {product.map((item, index) => (
                                    <SwiperSlide key={index} className="!w-[230px] flex justify-center">
                                        <div className="w-full h-[330px] bg-white rounded-xl border border-[#f0f1f2] z-0">
                                            <div className="relative">
                                                <Link to={`/${item.slug}`}>
                                                    <img src={item.image} alt="" className="rounded-xl" />
                                                </Link>
                                                {item.discount && (
                                                    <div className="absolute top-3 left-1 bg-red-500 rounded-full px-2">
                                                        <p className="text-sm text-white">{item.discount}%</p>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="text-center">
                                                <Link to={`/${item.slug}`}>
                                                    <h1 className="font-semibold mb-2">{item.name}</h1>
                                                </Link>
                                                <div className="flex items-center justify-center gap-2">
                                                    <p className="line-through text-xs text-[#838383] font-medium">
                                                        {item.oldPrice && formatPrice(item.oldPrice)}
                                                    </p>
                                                    <p className="text-sm text-primary-green font-semibold">
                                                        {formatPrice(item.newPrice)}
                                                    </p>
                                                </div>
                                                <button className="text-sm bg-primary-green text-white font-semibold px-6 py-1 rounded-full my-2 hover:bg-primary-yellow hover:text-black duration-300">
                                                    Thêm vào giỏ
                                                </button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[83%] mx-auto my-8">
                <div className="w-full bg-[#f7f7f7] rounded-xl flex">
                    <div className="m-4 overflow-hidden">
                        <div className="flex items-center justify-between">
                            <div>
                                <Link>
                                    <h1 className="text-[28px] font-bold hover:text-primary-green duration-300">
                                        Tin liên quan
                                    </h1>
                                </Link>
                            </div>
                            <div className="flex items-center gap-1">
                                <div
                                    className={`group w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                                        isBeginningNews
                                            ? 'bg-[#cfcfcf] opacity-50 hover:bg-[#008b4b]'
                                            : 'bg-[#cfcfcf] hover:bg-primary-green cursor-pointer'
                                    }`}
                                    onClick={() => {
                                        if (!isBeginningNews) swiperNewsRef.current?.swiper?.slidePrev();
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon={faChevronLeft}
                                        size="lg"
                                        className={`${
                                            isBeginningNews ? 'text-[#7e7e7e]' : 'text-[#333] group-hover:text-white'
                                        }`}
                                    />
                                </div>

                                <div
                                    className={`group w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                                        isEndNews
                                            ? 'bg-[#cfcfcf] opacity-50 hover:bg-[#008b4b]'
                                            : 'bg-[#cfcfcf] hover:bg-primary-green cursor-pointer'
                                    }`}
                                    onClick={() => {
                                        if (!isEndNews) swiperNewsRef.current?.swiper?.slideNext();
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon={faChevronRight}
                                        size="lg"
                                        className={`${
                                            isEndNews ? 'text-[#7e7e7e]' : 'text-[#333] group-hover:text-white'
                                        }`}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <Swiper
                                ref={swiperNewsRef}
                                onSlideChange={handleSlideNewsChange}
                                modules={[Navigation, Pagination]}
                                slidesPerView={4}
                                spaceBetween={20}
                                className="rounded-xl overflow-hidden cursor-grab"
                            >
                                {tinTucMoiData.map((item, index) => {
                                    const dateParts = item.date.match(/(\d{1,2})\s*tháng\s*(\d{1,2})\s*(\d{4})/);
                                    let day = '',
                                        month = '',
                                        year = '';

                                    if (dateParts) {
                                        day = dateParts[1];
                                        month = dateParts[2];
                                        year = dateParts[3];
                                    }

                                    return (
                                        <SwiperSlide key={index}>
                                            <div className="bg-white h-80 rounded-xl">
                                                <div className="relative">
                                                    <Link>
                                                        <img src={item.image} alt="" className="rounded-xl" />
                                                    </Link>
                                                    <div className="absolute top-2 left-0 bg-primary-green w-[72px] h-11 rounded-tr-3xl rounded-br-3xl flex flex-col items-center justify-center text-white text-xs font-medium shadow-md">
                                                        <span className="text-lg font-bold leading-none">{day}</span>
                                                        <span>{`${month.padStart(2, '0')}/${year}`}</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2 p-3">
                                                    <Link>
                                                        <h1 className="h-12 line-clamp-2 font-semibold">{item.name}</h1>
                                                    </Link>
                                                    <p className="line-clamp-3 text-sm text-[#333]">{item.content}</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DisplayTinTuc;
