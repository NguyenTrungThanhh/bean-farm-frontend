import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faClock, faEnvelope, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import config from '@/configs';
import { useEffect, useState } from 'react';

function LienHe() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        document.title = 'Liên hệ';
    });

    return (
        <div>
            <div className="bg-[#f5f5f5] w-full py-4 mb-5">
                <div className="w-[83%] mx-auto">
                    <div className="flex items-center gap-3">
                        <Link to={config.routes.home}>
                            <h1 className="text-sm hover:text-primary-yellow">Trang chủ</h1>
                        </Link>
                        <FontAwesomeIcon icon={faAngleRight} size="xs" />
                        <h1 className="text-sm text-primary-yellow">Liên hệ</h1>
                    </div>
                </div>
            </div>
            <div className="w-[83%] mx-auto">
                <div className="flex gap-8">
                    <div className="w-1/2 flex flex-col gap-3">
                        <h1 className="font-bold uppercase">Nơi giải đáp toàn bộ thắc mắc của bạn?</h1>
                        <p className="text-sm">
                            Bean Farm - Siêu thị trực tuyến mua sắm nông sản, chất lượng, tươi xanh. <br />
                            <span className="font-bold text-primary-green">Giá siêu tốt - Giao siêu tốc.</span>
                        </p>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 p-1 mb-6">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 border border-primary-green rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon={faLocationDot} className="text-primary-green" />
                                </div>
                                <div className="text-sm flex-1">
                                    <h1 className="font-bold">Địa chỉ</h1>
                                    <p>70 Lữ Gia, Phường 15, Quận 11, TP.HCM</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 border border-primary-green rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon={faClock} className="text-primary-green" />
                                </div>
                                <div className="text-sm flex-1">
                                    <h1 className="font-bold">Thời gian làm việc</h1>
                                    <p>8h - 22h từ thứ 2 đến chủ nhật </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 border border-primary-green rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon={faPhoneVolume} className="text-primary-green" />
                                </div>
                                <div className="text-sm flex-1">
                                    <h1 className="font-bold">Hotline</h1>
                                    <a href="tel:19006750" className="hover:text-primary-green duration-300">
                                        1900 6750
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 border border-primary-green rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-primary-green" />
                                </div>
                                <div className="text-sm flex-1">
                                    <h1 className="font-bold">Email</h1>
                                    <a href="mailto:support@sapo.vn" className="hover:text-primary-green duration-300">
                                        support@sapo.vn
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h1 className="font-bold uppercase">Liên hệ với chúng tôi</h1>
                            <p className="text-sm">
                                Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng tôi sẽ liên lạc lại
                                với bạn sớm nhất có thể.
                            </p>
                            <form action="" className="flex flex-col gap-3">
                                <input
                                    value={name}
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Họ và tên"
                                    className="w-full px-5 py-1 border border-[#e6e6e6] rounded-lg focus:outline-none focus:border-primary-green transition-colors duration-300"
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    value={email}
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="w-full px-5 py-1 border border-[#e6e6e6] rounded-lg focus:outline-none focus:border-primary-green transition-colors duration-300"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    value={phone}
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="Số điện thoại"
                                    className="w-full px-5 py-1 border border-[#e6e6e6] rounded-lg focus:outline-none focus:border-primary-green transition-colors duration-300"
                                    required
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                <textarea
                                    value={content}
                                    name="content"
                                    id="content"
                                    placeholder="Nội dung"
                                    className="w-full px-5 py-2 border border-[#e6e6e6] rounded-lg focus:outline-none focus:border-primary-green transition-colors duration-300"
                                    onChange={(e) => setContent(e.target.value)}
                                ></textarea>
                                <button
                                    type="submit"
                                    className="text-start w-[122px] h-[35px] flex items-center justify-center bg-primary-green rounded-full text-sm text-white hover:bg-primary-yellow hover:text-black duration-300"
                                >
                                    Gửi thông tin
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="w-[640px] h-[608px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3723.9042716018666!2d105.815878!3d21.036516!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab1946cc7e23%3A0x87ab3917166a0cd5!2zUGjhuqduIG3hu4FtIHF14bqjbiBsw70gYsOhbiBow6BuZyAtIFNhcG8gUE9T!5e0!3m2!1svi!2sus!4v1748928093568!5m2!1svi!2sus"
                                className="w-full h-full rounded-xl"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LienHe;
