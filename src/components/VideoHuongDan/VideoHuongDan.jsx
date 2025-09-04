import { useRef, useState } from 'react';
import Modal from 'react-modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { videos } from '@/assets/assets';

Modal.setAppElement('#root'); // tránh warning

function VideoHuongDan() {
    const swiperRef = useRef(null);

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedVideoId, setSelectedVideoId] = useState(null);

    const handleSlideChange = () => {
        const swiper = swiperRef.current?.swiper;
        if (swiper) {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
        }
    };

    const openModal = (videoId) => {
        setSelectedVideoId(videoId);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedVideoId(null);
    };

    return (
        <div className="my-10">
            <div className="w-full bg-[#f7f7f7] rounded-xl flex">
                <div className="my-4 mx-4 overflow-hidden">
                    <div className="flex items-center justify-between">
                        <div>
                            <Link>
                                <h1 className="text-[28px] font-bold hover:text-primary-green duration-300">
                                    Video hướng dẫn
                                </h1>
                            </Link>
                        </div>
                        <div className="flex items-center gap-1">
                            <div
                                className={`group w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                                    isBeginning
                                        ? 'bg-[#cfcfcf] opacity-50 hover:bg-[#008b4b]'
                                        : 'bg-[#cfcfcf] hover:bg-primary-green cursor-pointer'
                                }`}
                                onClick={() => {
                                    if (!isBeginning) swiperRef.current?.swiper?.slidePrev();
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faChevronLeft}
                                    size="lg"
                                    className={`${
                                        isBeginning ? 'text-[#7e7e7e]' : 'text-[#333] group-hover:text-white'
                                    }`}
                                />
                            </div>

                            <div
                                className={`group w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                                    isEnd
                                        ? 'bg-[#cfcfcf] opacity-50 hover:bg-[#008b4b]'
                                        : 'bg-[#cfcfcf] hover:bg-primary-green cursor-pointer'
                                }`}
                                onClick={() => {
                                    if (!isEnd) swiperRef.current?.swiper?.slideNext();
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faChevronRight}
                                    size="lg"
                                    className={`${isEnd ? 'text-[#7e7e7e]' : 'text-[#333] group-hover:text-white'}`}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <Swiper
                            ref={swiperRef}
                            onSlideChange={handleSlideChange}
                            modules={[Navigation, Pagination]}
                            slidesPerView={4}
                            spaceBetween={20}
                            className="rounded-xl overflow-hidden h-[290px]"
                        >
                            {videos.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="group cursor-pointer rounded-xl transition-shadow duration-300 overflow-hidden"
                                        onClick={() => openModal(item.videoId)}
                                    >
                                        <div className="relative overflow-hidden rounded-t-xl">
                                            <img
                                                src={item.thumbnail}
                                                alt={item.title}
                                                className="w-full h-48 object-cover rounded-t-xl transform transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition duration-300 rounded-t-xl"></div>
                                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                                <div className="h-10 w-10 border-[3px] rounded-full flex items-center justify-center">
                                                    <FontAwesomeIcon
                                                        icon={faCaretRight}
                                                        className="text-white"
                                                        size="2x"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-white rounded-b-xl">
                                            <h3 className="text-center font-semibold line-clamp-2 transition-colors duration-300 group-hover:text-green-600">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <button className="flex justify-center mx-auto mt-2 border border-primary-green rounded-full font-semibold text-primary-green px-6 py-1 hover:bg-primary-yellow hover:text-black hover:border-primary-yellow duration-300">
                        <Link>Xem tất cả</Link>
                    </button>

                    <Modal
                        isOpen={isOpen}
                        onRequestClose={closeModal}
                        contentLabel="Video Modal"
                        className="w-full max-w-4xl mx-auto mt-20 outline-none"
                        overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                    >
                        <div className="relative w-full pt-[56.25%] bottom-10">
                            <iframe
                                src={`https://www.youtube.com/embed/${selectedVideoId}`}
                                frameBorder="0"
                                allow="encrypted-media"
                                allowFullScreen
                                title="YouTube Video"
                                className="absolute top-0 left-0 w-full h-full rounded-lg"
                            />
                        </div>
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-black bg-white rounded-lg px-3 py-1 hover:opacity-80 transition"
                        >
                            Đóng
                        </button>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default VideoHuongDan;
