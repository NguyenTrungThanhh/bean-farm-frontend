import { assets } from '@/assets/assets';
import config from '@/configs';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faAnglesRight, faBell, faChevronUp, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    const popupContactRef = useRef(null);
    const popupNotifyRef = useRef(null);

    const [isVisible, setIsVisible] = useState(false);
    const [isContact, setIsContact] = useState(false);
    const [isPopupContactVisible, setIsPopupContactVisible] = useState(false);
    const [isNotify, setIsNotify] = useState(true);
    const [isPopupNotifyVisible, setIsPopupNotifyVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleContactPopup = () => {
        if (isContact) {
            setIsContact(false); // Bắt đầu animate out
            if (popupContactRef.current) {
                popupContactRef.current.classList.remove('animate-popupIn');
                popupContactRef.current.classList.add('animate-popupOut');
            }
            setTimeout(() => {
                setIsPopupContactVisible(false); // Ẩn sau animation
            }, 300);
        } else {
            setIsPopupContactVisible(true); // Hiện DOM trước
            requestAnimationFrame(() => {
                if (popupContactRef.current) {
                    popupContactRef.current.classList.remove('animate-popupOut');
                    popupContactRef.current.classList.add('animate-popupIn');
                }
                setIsContact(true); // đánh dấu đã mở
            });
        }
    };

    const toggleNotifyPopup = () => {
        if (isNotify) {
            setIsNotify(false); // Bắt đầu animate out
            if (popupNotifyRef.current) {
                popupNotifyRef.current.classList.remove('animate-popupIn');
                popupNotifyRef.current.classList.add('animate-popupOut');
            }
            setTimeout(() => {
                setIsPopupNotifyVisible(false); // Ẩn sau animation
            }, 300);
        } else {
            setIsPopupNotifyVisible(true); // Hiện DOM trước
            requestAnimationFrame(() => {
                if (popupNotifyRef.current) {
                    popupNotifyRef.current.classList.remove('animate-popupOut');
                    popupNotifyRef.current.classList.add('animate-popupIn');
                }
                setIsNotify(true);
            });
        }
    };

    return (
        <>
            {/* Nút quay lên đầu trang */}
            <div
                className={`
                    fixed bottom-40 right-6 w-10 h-10 bg-primary-green text-white text-[18px] rounded-md flex items-center justify-center 
                    hover:opacity-80 transition-all duration-300 ease-in-out
                    transform 
                    ${
                        isVisible
                            ? 'opacity-100 scale-100 pointer-events-auto'
                            : 'opacity-0 scale-90 pointer-events-none'
                    }
                `}
                onClick={scrollToTop}
            >
                <button className="w-full h-full">
                    <FontAwesomeIcon icon={faChevronUp} />
                </button>
            </div>

            {/* Button liên hệ */}
            <div className="fixed bottom-24 right-5 z-10">
                {/* Hiệu ứng beacon */}
                <div className="absolute inset-0 z-[-1] flex items-center justify-center">
                    <span className="absolute w-12 h-12 bg-green-600 rounded-full animate-beacon"></span>
                    <span className="absolute w-12 h-12 bg-green-600 rounded-full animate-beacon [animation-delay:1s]"></span>
                </div>

                {isPopupContactVisible && (
                    <div
                        ref={popupContactRef}
                        className="absolute bg-[#f5f6fa] -top-[150px] -left-52 shadow-md w-[225px] rounded-xl origin-bottom-right 
                        transition-transform duration-300 pointer-events-auto"
                    >
                        <div className="px-4 py-3">
                            <a href="tel:19006750" className="group flex items-center gap-4">
                                <div className="w-8 h-8 bg-[#e8434c] flex items-center justify-center rounded-full">
                                    <FontAwesomeIcon icon={faPhone} className="text-white" />
                                </div>
                                <p className="text-[13px] text-black flex-1 group-hover:text-primary-green">
                                    Gọi ngay cho chúng tôi
                                </p>
                            </a>
                        </div>
                        <div className="px-4 py-3 flex items-center gap-4 border-y-[1px] border-[#ecedf1] shadow-[0_1px_0_0_#fff,_0_-1px_0_0_#fff]">
                            <Link className="group flex items-center gap-4">
                                <div className="w-8 h-8 bg-[#3985f7] flex items-center justify-center rounded-full">
                                    <img src={assets.iconZalo} alt="" className="w-5 h-5" />
                                </div>
                                <p
                                    className="text-[13px] text-black flex-1 group-hover:text-primary-green"
                                    onClick={() => window.open('https://zalo.me/19006750', '_blank')}
                                >
                                    Chat với chúng tôi qua Zalo
                                </p>
                            </Link>
                        </div>
                        <div className="px-4 py-3">
                            <Link className="group flex items-center gap-4">
                                <div className="w-8 h-8  bg-gradient-to-b from-[#fecf72] via-[#fecf72] to-[#ef9f00] flex items-center justify-center rounded-full">
                                    <FontAwesomeIcon icon={faLocationDot} className="text-white" />
                                </div>
                                <Link to={config.routes.LienHe}>
                                    <p className="text-[13px] text-black flex-1 group-hover:text-primary-green">
                                        Thông tin cửa hàng
                                    </p>
                                </Link>
                            </Link>
                        </div>
                    </div>
                )}

                {/* Button luôn ở trên cùng */}
                <button
                    type="button"
                    aria-label="Chat support"
                    className="relative z-20 w-12 h-12 bg-primary-green text-white text-[18px] border border-white rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
                    onClick={toggleContactPopup}
                >
                    {isContact ? (
                        // Icon X
                        <svg viewBox="0 0 19 19" role="presentation" width="20" height="35" fill="white">
                            <path
                                d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z"
                                fillRule="evenodd"
                            ></path>
                        </svg>
                    ) : (
                        // Icon Liên hệ
                        <svg
                            width="34"
                            height="35"
                            viewBox="0 0 34 35"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                            className="animate-shake "
                        >
                            <path d="M4.35522 31V25.416H5.41122V30.064H7.61122V31H4.35522ZM8.97509 26.216C8.76176 26.216 8.60709 26.168 8.51109 26.072C8.42043 25.976 8.37509 25.8533 8.37509 25.704V25.544C8.37509 25.3947 8.42043 25.272 8.51109 25.176C8.60709 25.08 8.76176 25.032 8.97509 25.032C9.18309 25.032 9.33509 25.08 9.43109 25.176C9.52709 25.272 9.57509 25.3947 9.57509 25.544V25.704C9.57509 25.8533 9.52709 25.976 9.43109 26.072C9.33509 26.168 9.18309 26.216 8.97509 26.216ZM8.46309 26.824H9.48709V31H8.46309V26.824ZM12.834 24.712L13.842 25.944L13.33 26.344L12.37 25.424L11.41 26.344L10.898 25.944L11.906 24.712H12.834ZM12.362 31.096C12.0527 31.096 11.7754 31.0453 11.53 30.944C11.29 30.8373 11.0847 30.6907 10.914 30.504C10.7487 30.312 10.6207 30.0827 10.53 29.816C10.4394 29.544 10.394 29.24 10.394 28.904C10.394 28.5733 10.4367 28.2747 10.522 28.008C10.6127 27.7413 10.7407 27.5147 10.906 27.328C11.0714 27.136 11.274 26.9893 11.514 26.888C11.754 26.7813 12.026 26.728 12.33 26.728C12.6554 26.728 12.938 26.784 13.178 26.896C13.418 27.008 13.6154 27.16 13.77 27.352C13.9247 27.544 14.0394 27.768 14.114 28.024C14.194 28.2747 14.234 28.544 14.234 28.832V29.168H11.458V29.272C11.458 29.576 11.5434 29.8213 11.714 30.008C11.8847 30.1893 12.138 30.28 12.474 30.28C12.73 30.28 12.938 30.2267 13.098 30.12C13.2634 30.0133 13.41 29.8773 13.538 29.712L14.09 30.328C13.9194 30.568 13.6847 30.7573 13.386 30.896C13.0927 31.0293 12.7514 31.096 12.362 31.096ZM12.346 27.496C12.074 27.496 11.858 27.5867 11.698 27.768C11.538 27.9493 11.458 28.184 11.458 28.472V28.536H13.17V28.464C13.17 28.176 13.098 27.944 12.954 27.768C12.8154 27.5867 12.6127 27.496 12.346 27.496ZM15.135 31V26.824H16.159V27.52H16.199C16.2843 27.296 16.4176 27.1093 16.599 26.96C16.7856 26.8053 17.0416 26.728 17.367 26.728C17.799 26.728 18.1296 26.8693 18.359 27.152C18.5883 27.4347 18.703 27.8373 18.703 28.36V31H17.679V28.464C17.679 28.1653 17.6256 27.9413 17.519 27.792C17.4123 27.6427 17.2363 27.568 16.991 27.568C16.8843 27.568 16.7803 27.584 16.679 27.616C16.583 27.6427 16.495 27.6853 16.415 27.744C16.3403 27.7973 16.279 27.8667 16.231 27.952C16.183 28.032 16.159 28.128 16.159 28.24V31H15.135ZM21.7287 25.08H22.7527V27.52H22.7927C22.8781 27.296 23.0114 27.1093 23.1927 26.96C23.3794 26.8053 23.6354 26.728 23.9607 26.728C24.3927 26.728 24.7234 26.8693 24.9527 27.152C25.1821 27.4347 25.2967 27.8373 25.2967 28.36V31H24.2727V28.464C24.2727 28.1653 24.2194 27.9413 24.1127 27.792C24.0061 27.6427 23.8301 27.568 23.5847 27.568C23.4781 27.568 23.3741 27.584 23.2727 27.616C23.1767 27.6427 23.0887 27.6853 23.0087 27.744C22.9341 27.7973 22.8727 27.8667 22.8247 27.952C22.7767 28.032 22.7527 28.128 22.7527 28.24V31H21.7287V25.08ZM28.5918 24.712L29.5998 25.944L29.0878 26.344L28.1278 25.424L27.1678 26.344L26.6558 25.944L27.6638 24.712H28.5918ZM28.1198 31.096C27.8105 31.096 27.5332 31.0453 27.2878 30.944C27.0478 30.8373 26.8425 30.6907 26.6718 30.504C26.5065 30.312 26.3785 30.0827 26.2878 29.816C26.1972 29.544 26.1518 29.24 26.1518 28.904C26.1518 28.5733 26.1945 28.2747 26.2798 28.008C26.3705 27.7413 26.4985 27.5147 26.6638 27.328C26.8292 27.136 27.0318 26.9893 27.2718 26.888C27.5118 26.7813 27.7838 26.728 28.0878 26.728C28.4132 26.728 28.6958 26.784 28.9358 26.896C29.1758 27.008 29.3732 27.16 29.5278 27.352C29.6825 27.544 29.7972 27.768 29.8718 28.024C29.9518 28.2747 29.9918 28.544 29.9918 28.832V29.168H27.2158V29.272C27.2158 29.576 27.3012 29.8213 27.4718 30.008C27.6425 30.1893 27.8958 30.28 28.2318 30.28C28.4878 30.28 28.6958 30.2267 28.8558 30.12C29.0212 30.0133 29.1678 29.8773 29.2958 29.712L29.8478 30.328C29.6772 30.568 29.4425 30.7573 29.1438 30.896C28.8505 31.0293 28.5092 31.096 28.1198 31.096ZM28.1038 27.496C27.8318 27.496 27.6158 27.5867 27.4558 27.768C27.2958 27.9493 27.2158 28.184 27.2158 28.472V28.536H28.9278V28.464C28.9278 28.176 28.8558 27.944 28.7118 27.768C28.5732 27.5867 28.3705 27.496 28.1038 27.496ZM28.1038 32.552C27.8958 32.552 27.7465 32.5067 27.6558 32.416C27.5705 32.3307 27.5278 32.2213 27.5278 32.088V31.912C27.5278 31.7787 27.5705 31.6667 27.6558 31.576C27.7465 31.4907 27.8958 31.448 28.1038 31.448C28.3118 31.448 28.4585 31.4907 28.5438 31.576C28.6345 31.6667 28.6798 31.7787 28.6798 31.912V32.088C28.6798 32.2213 28.6345 32.3307 28.5438 32.416C28.4585 32.5067 28.3118 32.552 28.1038 32.552Z"></path>{' '}
                            <path d="M27.2212 0H10.7532C9.76511 0 8.97461 0.834345 8.97461 1.82643V12.334C8.97461 13.3487 9.78701 14.1604 10.7532 14.1604H22.1051L24.6741 16.8211C24.7839 16.9338 24.9157 17.0015 25.0693 17.0015C25.3768 17.0015 25.6402 16.7535 25.6402 16.4153V14.1604H27.2212C28.2092 14.1604 28.9997 13.3261 28.9997 12.334V1.82643C28.9997 0.811779 28.1873 0 27.2212 0ZM13.2783 9.04195C12.378 9.04195 11.6315 8.2753 11.6315 7.35077C11.6315 6.42631 12.378 5.65966 13.2783 5.65966C14.1785 5.65966 14.925 6.42631 14.925 7.35077C14.925 8.2753 14.2005 9.04195 13.2783 9.04195ZM19.0531 9.04195C18.1528 9.04195 17.4062 8.2753 17.4062 7.35077C17.4062 6.42631 18.1528 5.65966 19.0531 5.65966C19.9533 5.65966 20.6998 6.42631 20.6998 7.35077C20.6998 8.2753 19.9533 9.04195 19.0531 9.04195ZM24.8059 9.04195C23.9056 9.04195 23.1591 8.2753 23.1591 7.35077C23.1591 6.42631 23.9056 5.65966 24.8059 5.65966C25.7061 5.65966 26.4526 6.42631 26.4526 7.35077C26.4526 8.2753 25.7061 9.04195 24.8059 9.04195Z"></path>{' '}
                            <path d="M7.9649 12.3782V8.79297H6.16437C5.52762 8.79297 5.00066 9.33418 5.00066 9.98807V16.8878C4.97869 17.5868 5.50564 18.128 6.16437 18.128H7.19637V19.6162C7.19637 19.8192 7.37202 19.9995 7.56964 19.9995C7.67944 19.9995 7.76727 19.9544 7.83312 19.8868L9.52385 18.1505H16.9894C17.6261 18.1505 18.1531 17.6094 18.1531 16.9555V15.2418H10.7535C9.2165 15.2418 7.9649 13.9566 7.9649 12.3782Z"></path>
                        </svg>
                    )}
                </button>
            </div>

            {/* Button messenger */}
            <div
                className={`
                    fixed bottom-9 right-5 w-12 h-12 bg-primary-green text-white text-[18px] rounded-full flex items-center justify-center 
                    hover:opacity-80 transition-all duration-300 ease-in-out
                    transform 
                `}
            >
                <button className="w-full h-full">
                    <a href="https://m.me/sapo.vn" target="_blank">
                        <img src={assets.iconMessage} alt="" />
                    </a>
                </button>
            </div>

            {/* Nút thông báo */}
            <div className="fixed bottom-16 left-5 z-10">
                {isPopupNotifyVisible && (
                    <div
                        ref={popupNotifyRef}
                        className="absolute -top-[295px] left-6 w-[300px] bg-primary-green px-3 pt-5 pb-10 shadow-md rounded-xl origin-bottom-left transition-transform duration-300"
                    >
                        <div>
                            <h1 className="text-xl font-bold text-white mb-5">Tích hợp sẵn các ứng dụng</h1>
                        </div>
                        <ul className="flex flex-col gap-3 mb-5">
                            <li className="flex items-center gap-3 text-white">
                                <FontAwesomeIcon icon={faAnglesRight} />
                                <a
                                    href="https://apps.sapo.vn/danh-gia-san-pham-v2"
                                    target="_blank"
                                    className="text-sm hover:text-primary-yellow duration-300"
                                >
                                    Đánh giá sản phẩm
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-white">
                                <FontAwesomeIcon icon={faAnglesRight} />
                                <a
                                    href="https://apps.sapo.vn/mua-x-tang-y-v2"
                                    target="_blank"
                                    className="text-sm hover:text-primary-yellow duration-300"
                                >
                                    Mua X tặng Y
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-white">
                                <FontAwesomeIcon icon={faAnglesRight} />
                                <a
                                    href="https://apps.sapo.vn/quan-ly-affiliate-v2"
                                    target="_blank"
                                    className="text-sm hover:text-primary-yellow duration-300"
                                >
                                    Ứng dụng Affiliate
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-white">
                                <FontAwesomeIcon icon={faAnglesRight} />
                                <a
                                    href="https://apps.sapo.vn/ae-da-ngon-ngu"
                                    target="_blank"
                                    className="text-sm hover:text-primary-yellow duration-300"
                                >
                                    Đa ngôn ngữ
                                </a>
                            </li>
                        </ul>
                        <p className="text-white italic tracking-tight">
                            Lưu ý với các ứng dụng trả phí bạn cần cài đặt và mua ứng dụng này trên App store Sapo để sử
                            dụng ngay
                        </p>
                    </div>
                )}

                {/* Button */}
                <div
                    className="relative w-12 h-12 z-20 bg-primary-green text-[20px] border border-white rounded-full flex items-center justify-center cursor-pointer duration-200 shadow-lg animate-wiggle-glow-zalo"
                    onClick={toggleNotifyPopup}
                >
                    <FontAwesomeIcon icon={faBell} className="text-white animate-shake" size="lg" />
                </div>
            </div>

            {/* Footer content */}
            <div className="w-[83%] mx-auto my-10">
                <div className="w-full flex items-center gap-6">
                    <div className="bg-[#F2F3F4] flex items-center justify-center gap-4 w-[300px] py-2 rounded-xl">
                        <div>
                            <img src={assets.ser1} alt="" className="w-[46px] h-[46px]" />
                        </div>
                        <div>
                            <h1 className="text-primary-green font-semibold">Vận chuyển miễn phí</h1>
                            <p className="text-sm">Hóa đơn trên 5 triệu</p>
                        </div>
                    </div>
                    <div className="bg-[#F2F3F4] flex items-center justify-center gap-4 w-[300px] py-2 rounded-xl">
                        <div>
                            <img src={assets.ser2} alt="" className="w-[46px] h-[46px]" />
                        </div>
                        <div>
                            <h1 className="text-primary-green font-semibold">Đổi trả miễn phí</h1>
                            <p className="text-sm">Trong vòng 7 ngày</p>
                        </div>
                    </div>
                    <div className="bg-[#F2F3F4] flex items-center justify-center gap-4 w-[300px] py-2 rounded-xl">
                        <div>
                            <img src={assets.ser3} alt="" className="w-[46px] h-[46px]" />
                        </div>
                        <div>
                            <h1 className="text-primary-green font-semibold">100% Hoàn tiền</h1>
                            <p className="text-sm">Nếu sản phẩm lỗi</p>
                        </div>
                    </div>
                    <div className="bg-[#F2F3F4] flex items-center justify-center gap-4 w-[300px] py-2 rounded-xl">
                        <div>
                            <img src={assets.ser4} alt="" className="w-[46px] h-[46px]" />
                        </div>
                        <div>
                            <h1 className="text-primary-green font-semibold">Hotline: 1900 6750</h1>
                            <p className="text-sm">Hỗ trợ 24/7</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#f2f3f4]">
                <div className="w-[83%] mx-auto">
                    <div className="flex gap-16 pt-10 pb-8">
                        <div className="flex flex-col gap-4 w-[33%]">
                            <div>
                                <img src={assets.logo} alt="" className="w-[201px] h-[46px]" />
                            </div>
                            <div>
                                <h1 className="text-sm font-medium">
                                    Bean Farm- Siêu thị trực tuyến mua sắm nông sản, chất lượng, tươi xanh.
                                </h1>
                                <p className="font-semibold text-primary-green">Giá siêu tốt - Giao siêu tốc.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-medium">
                                    <b>Địa chỉ: </b>70 Lữ Gia, Phường 15, Quận 11, TP.HCM
                                </p>
                                <p className="text-sm">
                                    <b>Điện thoại: </b>
                                    <a
                                        href="tel:19006750"
                                        className="font-semibold text-primary-green text-base hover:text-primary-yellow duration-300"
                                    >
                                        1900 6750
                                    </a>
                                </p>
                                <p className="text-sm">
                                    <b>Email: </b>
                                    <a
                                        href="mailto:support@sapo.vn"
                                        className="font-semibold text-primary-green text-base hover:text-primary-yellow duration-300"
                                    >
                                        support@sapo.vn
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="w-[42%] flex gap-24">
                            <div>
                                <h1 className="text-lg font-bold text-primary-green uppercase mb-4">Chính sách</h1>
                                <ul className="text-sm">
                                    <li>
                                        <Link to={config.routes.ChinhSachThanhVien}>
                                            <p className="font-medium mb-4 hover:text-primary-yellow duration-300">
                                                Chính sách thành viên
                                            </p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={config.routes.ChinhSachThanhToan}>
                                            <p className="font-medium mb-4 hover:text-primary-yellow duration-300">
                                                Chính sách thanh toán
                                            </p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={config.routes.ChinhSachDoiSanPham}>
                                            <p className="font-medium mb-4 hover:text-primary-yellow duration-300">
                                                Chính sách đổi sản phẩm
                                            </p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={config.routes.ChinhSachBaoMat}>
                                            <p className="font-medium mb-4 hover:text-primary-yellow duration-300">
                                                Chính sách bảo mật
                                            </p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={config.routes.ChinhSachCongTacVien}>
                                            <p className="font-medium mb-4 hover:text-primary-yellow duration-300">
                                                Chính sách cộng tác viên
                                            </p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={config.routes.ChinhSachBaoHanh}>
                                            <p className="font-medium mb-4 hover:text-primary-yellow duration-300">
                                                Chính sách bảo hành
                                            </p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h1 className="text-lg font-bold text-primary-green uppercase mb-4">Hướng dẫn</h1>
                                <ul className="text-sm">
                                    <li>
                                        <Link to={config.routes.HuongDanMuaHang}>
                                            <p className="font-medium mb-4 hover:text-primary-yellow duration-300">
                                                Hướng dẫn mua hàng
                                            </p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={config.routes.HuongDanDoiTra}>
                                            <p className="font-medium mb-4 hover:text-primary-yellow duration-300">
                                                Hướng dẫn đổi trả
                                            </p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={config.routes.HuongDanThanhToan}>
                                            <p className="font-medium mb-4 hover:text-primary-yellow duration-300">
                                                Hướng dẫn thanh toán
                                            </p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={config.routes.ChuongTrinhCongTacVien}>
                                            <p className="font-medium mb-4 hover:text-primary-yellow duration-300">
                                                Chương trình cộng tác viên
                                            </p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={config.routes.Search}>
                                            <p className="font-medium mb-4 hover:text-primary-yellow duration-300">
                                                Tìm kiếm
                                            </p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={config.routes.LienHe}>
                                            <p className="font-medium mb-4 hover:text-primary-yellow duration-300">
                                                Liên hệ
                                            </p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-[25%]">
                            <h1 className="text-lg font-bold text-primary-green uppercase mb-4">
                                Kết nối với chúng tôi
                            </h1>
                            <div className="flex items-center gap-2 mb-4">
                                <a href="https://www.facebook.com/sapowebvietnam/" target="_blank">
                                    <div className="w-9 h-9 bg-[#1877f2] rounded-[4px] flex items-center justify-center hover:opacity-80 duration-300">
                                        <FontAwesomeIcon icon={faFacebookF} size="sm" className="text-white" />
                                    </div>
                                </a>
                                <a href="https://twitter.com/" target="_blank">
                                    <div className="w-9 h-9 bg-[#55acee] rounded-[4px] flex items-center justify-center hover:opacity-80 duration-300">
                                        <FontAwesomeIcon icon={faTwitter} size="sm" className="text-white" />
                                    </div>
                                </a>
                                <a href="https://www.youtube.com/" target="_blank">
                                    <div className="w-9 h-9 bg-[#b00] rounded-[4px] flex items-center justify-center hover:opacity-80 duration-300">
                                        <FontAwesomeIcon icon={faYoutube} size="sm" className="text-white" />
                                    </div>
                                </a>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <div
                                        className="w-9 h-9 rounded-[4px] flex items-center justify-center hover:opacity-80 duration-300"
                                        style={{
                                            background:
                                                'linear-gradient(29.61deg, #f38334 0%, #da2e7d 50.39%, #6b54c6 100%)',
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faInstagram} size="sm" className="text-white" />
                                    </div>
                                </a>
                            </div>
                            <div className="my-4">
                                <h1 className="text-lg font-bold text-primary-green uppercase mb-4">
                                    Hình thức thanh toán
                                </h1>
                                <div className="flex items-center gap-2">
                                    <img src={assets.payment1} alt="" className="w-[59px] h-[36px]" />
                                    <img src={assets.payment2} alt="" className="w-[59px] h-[36px]" />
                                    <img src={assets.payment3} alt="" className="w-[59px] h-[36px]" />
                                    <img src={assets.payment4} alt="" className="w-[59px] h-[36px]" />
                                </div>
                            </div>
                            <div>
                                <h1 className="text-lg font-bold text-primary-green uppercase mb-4">
                                    Mua hàng qua zalo
                                </h1>
                                <img src={assets.QRZalo} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer bottom */}
            <div className="text-center bg-primary-green py-3">
                <p className="text-white">
                    © Bản quyền thuộc về <span className="font-bold text-primary-yellow">Mr. Bean</span> Cung cấp bởi{' '}
                    <span className="text-primary-yellow font-medium hover:text-white duration-300 cursor-pointer">
                        Sapo
                    </span>
                </p>
            </div>
        </>
    );
}

export default Footer;
