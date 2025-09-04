import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import 'react-datepicker/dist/react-datepicker.css';
import config from '@/configs';
import { product } from '@/assets/assets';
import DatePicker from 'react-datepicker';

function MuaHangNhanh() {
    const [isRauCu, setIsRauCu] = useState(true);
    const [isTraiCay, setIsTraiCay] = useState(false);
    const [isDoKho, setIsDoKho] = useState(false);
    const [isThitNhapKhau, setIsThitNhapKhau] = useState(false);
    const [isHaiSan, setIsHaiSan] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');

    useEffect(() => {
        document.title = 'Mua hàng nhanh';
    });

    const formatPrice = (price) => {
        return price?.toLocaleString('vi-VN') + '₫';
    };

    return (
        <div>
            <div className="bg-[#f5f5f5] w-full py-4 mb-5">
                <div className="w-[83%] mx-auto">
                    <div className="flex items-center gap-3">
                        <Link to={config.routes.home}>
                            <h1 className="text-sm hover:text-primary-yellow">Trang chủ</h1>
                        </Link>
                        <FontAwesomeIcon icon={faAngleRight} size="xs" />
                        <h1 className="text-sm text-primary-yellow">Mua hàng nhanh</h1>
                    </div>
                </div>
            </div>
            <div className="w-[83%] mx-auto">
                <div className="flex gap-4 items-start">
                    <div className="w-[75%]">
                        <div className="flex gap-4">
                            <div
                                className={`${
                                    isRauCu
                                        ? 'bg-primary-green text-white'
                                        : 'bg-[#f7f7f7] text-black hover:bg-primary-green hover:text-white'
                                } px-[10px] py-[7px] rounded-md cursor-pointer`}
                                onClick={() => {
                                    setIsRauCu(true);
                                    setIsTraiCay(false);
                                    setIsDoKho(false);
                                    setIsThitNhapKhau(false);
                                    setIsHaiSan(false);
                                }}
                            >
                                <h1 className="font-semibold">Rau củ</h1>
                            </div>
                            <div
                                className={`${
                                    isTraiCay
                                        ? 'bg-primary-green text-white'
                                        : 'bg-[#f7f7f7] text-black hover:bg-primary-green hover:text-white'
                                } px-[10px] py-[7px] rounded-md cursor-pointer`}
                                onClick={() => {
                                    setIsRauCu(false);
                                    setIsTraiCay(true);
                                    setIsDoKho(false);
                                    setIsThitNhapKhau(false);
                                    setIsHaiSan(false);
                                }}
                            >
                                <h1 className="font-semibold">Trái cây</h1>
                            </div>
                            <div
                                className={`${
                                    isDoKho
                                        ? 'bg-primary-green text-white'
                                        : 'bg-[#f7f7f7] text-black hover:bg-primary-green hover:text-white'
                                } px-[10px] py-[7px] rounded-md cursor-pointer`}
                                onClick={() => {
                                    setIsRauCu(false);
                                    setIsTraiCay(false);
                                    setIsDoKho(true);
                                    setIsThitNhapKhau(false);
                                    setIsHaiSan(false);
                                }}
                            >
                                <h1 className="font-semibold">Đồ khô</h1>
                            </div>
                            <div
                                className={`${
                                    isThitNhapKhau
                                        ? 'bg-primary-green text-white'
                                        : 'bg-[#f7f7f7] text-black hover:bg-primary-green hover:text-white'
                                } px-[10px] py-[7px] rounded-md cursor-pointer`}
                                onClick={() => {
                                    setIsRauCu(false);
                                    setIsTraiCay(false);
                                    setIsDoKho(false);
                                    setIsThitNhapKhau(true);
                                    setIsHaiSan(false);
                                }}
                            >
                                <h1 className="font-semibold">Thịt nhập khẩu</h1>
                            </div>
                            <div
                                className={`${
                                    isHaiSan
                                        ? 'bg-primary-green text-white'
                                        : 'bg-[#f7f7f7] text-black hover:bg-primary-green hover:text-white'
                                } px-[10px] py-[7px] rounded-md cursor-pointer`}
                                onClick={() => {
                                    setIsRauCu(false);
                                    setIsTraiCay(false);
                                    setIsDoKho(false);
                                    setIsThitNhapKhau(false);
                                    setIsHaiSan(true);
                                }}
                            >
                                <h1 className="font-semibold">Hải sản</h1>
                            </div>
                        </div>
                        <div className="my-4">
                            {isRauCu && (
                                <div className="grid grid-cols-4 gap-y-8">
                                    {product.slice(0, 8).map((item, index) => (
                                        <div
                                            key={index}
                                            className="w-[217px] h-[323px] bg-white rounded-xl border border-[#f0f1f2] z-0"
                                        >
                                            <div className="relative">
                                                <img src={item.image} alt="" className="rounded-xl" />
                                                {item.discount && (
                                                    <div className="absolute top-3 left-1 bg-red-500 rounded-full px-2">
                                                        <p className="text-sm text-white">{item.discount}%</p>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="text-center">
                                                <h1 className="font-semibold mb-2">{item.name}</h1>
                                                <div className="flex items-center justify-center gap-2">
                                                    <p className="line-through text-xs text-[#838383] font-medium">
                                                        {item.oldPrice && formatPrice(item.oldPrice)}
                                                    </p>
                                                    <p className="text-sm text-primary-green font-semibold">
                                                        {formatPrice(item.newPrice)}
                                                    </p>
                                                </div>
                                                <button className="text-sm bg-primary-green text-white font-semibold px-6 py-1 rounded-full my-2 hover:bg-primary-yellow hover:text-black duration-300">
                                                    Đặt ngay
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {isTraiCay && (
                                <div className="grid grid-cols-4 gap-y-8">
                                    {product.slice(0, 8).map((item, index) => (
                                        <div
                                            key={index}
                                            className="w-[217px] h-[323px] bg-white rounded-xl border border-[#f0f1f2] z-0"
                                        >
                                            <div className="relative">
                                                <img src={item.image} alt="" className="rounded-xl" />
                                                {item.discount && (
                                                    <div className="absolute top-3 left-1 bg-red-500 rounded-full px-2">
                                                        <p className="text-sm text-white">{item.discount}%</p>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="text-center">
                                                <h1 className="font-semibold mb-2">{item.name}</h1>
                                                <div className="flex items-center justify-center gap-2">
                                                    <p className="line-through text-xs text-[#838383] font-medium">
                                                        {item.oldPrice && formatPrice(item.oldPrice)}
                                                    </p>
                                                    <p className="text-sm text-primary-green font-semibold">
                                                        {formatPrice(item.newPrice)}
                                                    </p>
                                                </div>
                                                <button className="text-sm bg-primary-green text-white font-semibold px-6 py-1 rounded-full my-2 hover:bg-primary-yellow hover:text-black duration-300">
                                                    Đặt ngay
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {isDoKho && (
                                <div className="grid grid-cols-4 gap-y-8">
                                    {product.slice(0, 8).map((item, index) => (
                                        <div
                                            key={index}
                                            className="w-[217px] h-[323px] bg-white rounded-xl border border-[#f0f1f2] z-0"
                                        >
                                            <div className="relative">
                                                <img src={item.image} alt="" className="rounded-xl" />
                                                {item.discount && (
                                                    <div className="absolute top-3 left-1 bg-red-500 rounded-full px-2">
                                                        <p className="text-sm text-white">{item.discount}%</p>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="text-center">
                                                <h1 className="font-semibold mb-2">{item.name}</h1>
                                                <div className="flex items-center justify-center gap-2">
                                                    <p className="line-through text-xs text-[#838383] font-medium">
                                                        {item.oldPrice && formatPrice(item.oldPrice)}
                                                    </p>
                                                    <p className="text-sm text-primary-green font-semibold">
                                                        {formatPrice(item.newPrice)}
                                                    </p>
                                                </div>
                                                <button className="text-sm bg-primary-green text-white font-semibold px-6 py-1 rounded-full my-2 hover:bg-primary-yellow hover:text-black duration-300">
                                                    Đặt ngay
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {isThitNhapKhau && (
                                <div className="grid grid-cols-4 gap-y-8">
                                    {product.slice(0, 8).map((item, index) => (
                                        <div
                                            key={index}
                                            className="w-[217px] h-[323px] bg-white rounded-xl border border-[#f0f1f2] z-0"
                                        >
                                            <div className="relative">
                                                <img src={item.image} alt="" className="rounded-xl" />
                                                {item.discount && (
                                                    <div className="absolute top-3 left-1 bg-red-500 rounded-full px-2">
                                                        <p className="text-sm text-white">{item.discount}%</p>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="text-center">
                                                <h1 className="font-semibold mb-2">{item.name}</h1>
                                                <div className="flex items-center justify-center gap-2">
                                                    <p className="line-through text-xs text-[#838383] font-medium">
                                                        {item.oldPrice && formatPrice(item.oldPrice)}
                                                    </p>
                                                    <p className="text-sm text-primary-green font-semibold">
                                                        {formatPrice(item.newPrice)}
                                                    </p>
                                                </div>
                                                <button className="text-sm bg-primary-green text-white font-semibold px-6 py-1 rounded-full my-2 hover:bg-primary-yellow hover:text-black duration-300">
                                                    Đặt ngay
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {isHaiSan && (
                                <div className="grid grid-cols-4 gap-y-8">
                                    {product.slice(0, 8).map((item, index) => (
                                        <div
                                            key={index}
                                            className="w-[217px] h-[323px] bg-white rounded-xl border border-[#f0f1f2] z-0"
                                        >
                                            <div className="relative">
                                                <img src={item.image} alt="" className="rounded-xl" />
                                                {item.discount && (
                                                    <div className="absolute top-3 left-1 bg-red-500 rounded-full px-2">
                                                        <p className="text-sm text-white">{item.discount}%</p>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="text-center">
                                                <h1 className="font-semibold mb-2">{item.name}</h1>
                                                <div className="flex items-center justify-center gap-2">
                                                    <p className="line-through text-xs text-[#838383] font-medium">
                                                        {item.oldPrice && formatPrice(item.oldPrice)}
                                                    </p>
                                                    <p className="text-sm text-primary-green font-semibold">
                                                        {formatPrice(item.newPrice)}
                                                    </p>
                                                </div>
                                                <button className="text-sm bg-primary-green text-white font-semibold px-6 py-1 rounded-full my-2 hover:bg-primary-yellow hover:text-black duration-300">
                                                    Đặt ngay
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <Link
                                to={
                                    (isRauCu && config.routes.RauCuQua) ||
                                    (isTraiCay && config.routes.TraiCay) ||
                                    (isDoKho && config.routes.DoKho) ||
                                    (isThitNhapKhau && config.routes.ThitNhapKhau) ||
                                    (isHaiSan && config.routes.ThuyHaiSan)
                                }
                            >
                                <button className="w-[135px] h-9 mt-8 border rounded-full border-primary-green font-semibold text-primary-green flex justify-center items-center mx-auto hover:bg-primary-yellow hover:text-black hover:border-primary-yellow duration-500">
                                    Xem tất cả
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="w-[25%] sticky top-2">
                        <div className="p-3 bg-[#f7f7f7] rounded-md">
                            <div className="flex flex-col justify-center items-center mb-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 201.387 201.387"
                                    xmlSpace="preserve"
                                    className="w-5 h-w-5 my-4"
                                >
                                    <g>
                                        <g>
                                            <path d="M129.413,24.885C127.389,10.699,115.041,0,100.692,0C91.464,0,82.7,4.453,77.251,11.916 c-1.113,1.522-0.78,3.657,0.742,4.77c1.517,1.109,3.657,0.78,4.768-0.744c4.171-5.707,10.873-9.115,17.93-9.115 c10.974,0,20.415,8.178,21.963,19.021c0.244,1.703,1.705,2.932,3.376,2.932c0.159,0,0.323-0.012,0.486-0.034 C128.382,28.479,129.679,26.75,129.413,24.885z" />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M178.712,63.096l-10.24-17.067c-0.616-1.029-1.727-1.657-2.927-1.657h-9.813c-1.884,0-3.413,1.529-3.413,3.413 s1.529,3.413,3.413,3.413h7.881l6.144,10.24H31.626l6.144-10.24h3.615c1.884,0,3.413-1.529,3.413-3.413s-1.529-3.413-3.413-3.413 h-5.547c-1.2,0-2.311,0.628-2.927,1.657l-10.24,17.067c-0.633,1.056-0.648,2.369-0.043,3.439s1.739,1.732,2.97,1.732h150.187 c1.231,0,2.364-0.662,2.97-1.732S179.345,64.15,178.712,63.096z" />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M161.698,31.623c-0.478-0.771-1.241-1.318-2.123-1.524l-46.531-10.883c-0.881-0.207-1.809-0.053-2.579,0.423 c-0.768,0.478-1.316,1.241-1.522,2.123l-3.509,15c-0.43,1.835,0.71,3.671,2.546,4.099c1.835,0.43,3.673-0.71,4.101-2.546 l2.732-11.675l39.883,9.329l-6.267,26.795c-0.43,1.835,0.71,3.671,2.546,4.099c0.263,0.061,0.524,0.09,0.782,0.09 c1.55,0,2.953-1.062,3.318-2.635l7.045-30.118C162.328,33.319,162.176,32.391,161.698,31.623z" />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M102.497,39.692l-3.11-26.305c-0.106-0.899-0.565-1.72-1.277-2.28c-0.712-0.56-1.611-0.816-2.514-0.71l-57.09,6.748 c-1.871,0.222-3.209,1.918-2.988,3.791l5.185,43.873c0.206,1.737,1.679,3.014,3.386,3.014c0.133,0,0.27-0.009,0.406-0.024 c1.87-0.222,3.208-1.918,2.988-3.791l-4.785-40.486l50.311-5.946l2.708,22.915c0.222,1.872,1.91,3.202,3.791,2.99 C101.379,43.261,102.717,41.564,102.497,39.692z" />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M129.492,63.556l-6.775-28.174c-0.212-0.879-0.765-1.64-1.536-2.113c-0.771-0.469-1.696-0.616-2.581-0.406L63.613,46.087 c-1.833,0.44-2.961,2.284-2.521,4.117l3.386,14.082c0.44,1.835,2.284,2.964,4.116,2.521c1.833-0.44,2.961-2.284,2.521-4.117 l-2.589-10.764l48.35-11.626l5.977,24.854c0.375,1.565,1.775,2.615,3.316,2.615c0.265,0,0.533-0.031,0.802-0.096 C128.804,67.232,129.932,65.389,129.492,63.556z" />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M179.197,64.679c-0.094-1.814-1.592-3.238-3.41-3.238H25.6c-1.818,0-3.316,1.423-3.41,3.238l-6.827,133.12 c-0.048,0.934,0.29,1.848,0.934,2.526c0.645,0.677,1.539,1.062,2.475,1.062h163.84c0.935,0,1.83-0.384,2.478-1.062 c0.643-0.678,0.981-1.591,0.934-2.526L179.197,64.679z M22.364,194.56l6.477-126.293h143.701l6.477,126.293H22.364z" />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M126.292,75.093c-5.647,0-10.24,4.593-10.24,10.24c0,5.647,4.593,10.24,10.24,10.24c5.647,0,10.24-4.593,10.24-10.24 C136.532,79.686,131.939,75.093,126.292,75.093z M126.292,88.747c-1.883,0-3.413-1.531-3.413-3.413s1.531-3.413,3.413-3.413 c1.882,0,3.413,1.531,3.413,3.413S128.174,88.747,126.292,88.747z" />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M75.092,75.093c-5.647,0-10.24,4.593-10.24,10.24c0,5.647,4.593,10.24,10.24,10.24c5.647,0,10.24-4.593,10.24-10.24 C85.332,79.686,80.739,75.093,75.092,75.093z M75.092,88.747c-1.882,0-3.413-1.531-3.413-3.413s1.531-3.413,3.413-3.413 s3.413,1.531,3.413,3.413S76.974,88.747,75.092,88.747z" />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M126.292,85.333h-0.263c-1.884,0-3.413,1.529-3.413,3.413c0,0.466,0.092,0.911,0.263,1.316v17.457 c0,12.233-9.953,22.187-22.187,22.187s-22.187-9.953-22.187-22.187V88.747c0-1.884-1.529-3.413-3.413-3.413 s-3.413,1.529-3.413,3.413v18.773c0,15.998,13.015,29.013,29.013,29.013s29.013-13.015,29.013-29.013V88.747 C129.705,86.863,128.176,85.333,126.292,85.333z" />
                                        </g>
                                    </g>
                                </svg>
                                <p className="text-sm text-center">Không có sản phẩm nào trong giỏ hàng của bạn</p>
                            </div>
                            <div>
                                <h1 className="font-bold text-lg mb-2">Thời gian giao hàng</h1>
                                <div className="flex gap-2">
                                    {/* Input chọn ngày (dùng react-datepicker) */}
                                    <div className="w-1/2">
                                        <DatePicker
                                            selected={selectedDate}
                                            onChange={(date) => setSelectedDate(date)}
                                            placeholderText="Chọn ngày"
                                            dateFormat="dd/MM/yyyy"
                                            className="w-full border border-gray-300 rounded-md p-2 text-sm"
                                        />
                                    </div>

                                    {/* Select khung giờ */}
                                    <div className="w-1/2">
                                        <select
                                            value={selectedTime}
                                            onChange={(e) => setSelectedTime(e.target.value)}
                                            className="w-full border border-gray-300 rounded-md p-2 text-sm"
                                        >
                                            <option value="">Chọn thời gian</option>
                                            <option value="08h - 12h">08h00 - 12h00</option>
                                            <option value="14h - 18h">14h00 - 18h00</option>
                                            <option value="19h - 21h">19h00 - 21h00</option>
                                        </select>
                                    </div>
                                </div>
                                <button className="w-full bg-primary-green my-2 text-white rounded-full py-2 hover:bg-primary-yellow hover:text-black duration-300">
                                    Thanh toán
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MuaHangNhanh;
