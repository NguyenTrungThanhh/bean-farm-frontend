import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { assets, product } from '@/assets/assets';

function KhuyenMaiDacBiet() {
    const endDateRef = useRef(null);

    // chỉ set 1 lần lúc component mount
    useEffect(() => {
        const storedEndDate = localStorage.getItem('specialOfferEndDate');
        if (storedEndDate) {
            endDateRef.current = new Date(storedEndDate);
        } else {
            const d = new Date();
            d.setMonth(d.getMonth() + 2);
            endDateRef.current = d;
            localStorage.setItem('specialOfferEndDate', d.toISOString());
        }
    }, []);

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = endDateRef.current - now;

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            if (endDateRef.current) {
                setTimeLeft(calculateTimeLeft());
            }
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="my-8">
            <div className="bg-primary-green p-3 flex items-center justify-between rounded-tl-xl rounded-tr-xl h-20">
                <div>
                    <div className="flex items-center gap-1">
                        <h1 className="text-[26px] font-bold text-primary-yellow mb-0">Khuyến mãi đặc biệt</h1>
                        <img src={assets.flash} alt="" className="animate-wiggleScale w-6" />
                    </div>
                    <p className="text-lg font-medium text-white">Đừng bỏ lỡ cơ hội giảm giá đặc biệt!</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-11 h-11 rounded-md flex flex-col items-center bg-white">
                        <h1 className="text-primary-green font-semibold">{timeLeft.days}</h1>
                        <p className="text-sm">Ngày</p>
                    </div>
                    <div className="w-11 h-11 rounded-md flex flex-col items-center bg-white">
                        <h1 className="text-primary-green font-semibold">{timeLeft.hours}</h1>
                        <p className="text-sm">Giờ</p>
                    </div>
                    <div className="w-11 h-11 rounded-md flex flex-col items-center bg-white">
                        <h1 className="text-primary-green font-semibold">{timeLeft.minutes}</h1>
                        <p className="text-sm">Phút</p>
                    </div>
                    <div className="w-11 h-11 rounded-md flex flex-col items-center bg-white">
                        <h1 className="text-primary-green font-semibold">{timeLeft.seconds}</h1>
                        <p className="text-sm">Giây</p>
                    </div>
                </div>
            </div>
            <div className="h-[400px] bg-[#f7f7f7] p-3 border-2 border-t-0 border-dashed border-primary-green rounded-bl-xl rounded-br-xl">
                <div className="grid grid-cols-3 gap-6">
                    {product.slice(0, 6).map((item, index) => {
                        const percentSold = Math.round((item.sold / item.stock) * 100);

                        return (
                            <div key={index} className="flex bg-white rounded-xl">
                                <div className="relative">
                                    <img src={item.image} alt="" className="w-40 rounded-xl" />
                                    {item.discount && (
                                        <div className="absolute top-3 left-1 bg-red-500 rounded-full px-2">
                                            <p className="text-sm text-white">{item.discount}%</p>
                                        </div>
                                    )}
                                </div>
                                <div className="p-3 flex-1">
                                    <div>
                                        <Link>
                                            <h1 className="font-semibold hover:text-primary-green duration-300">
                                                {item.name}
                                            </h1>
                                        </Link>
                                    </div>
                                    <div>
                                        <div className="relative w-full h-[5px] bg-[#e9ecef] rounded-full overflow-hidden mt-2">
                                            <div
                                                className="absolute top-0 left-0 h-full animate-progressMove rounded-full"
                                                style={{
                                                    width: percentSold + '%',
                                                    backgroundColor: '#008b4b',
                                                    backgroundImage:
                                                        'linear-gradient(45deg, rgba(255, 255, 255, 0.25) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.25) 75%, transparent 75%, transparent)',
                                                    backgroundSize: '40px 40px',
                                                }}
                                            />
                                        </div>
                                        <div className="text-xs text-[#333] flex items-center justify-between">
                                            <h1>
                                                Đã bán: {item.sold}/{item.stock}
                                            </h1>
                                            <p className="text-primary-green">{percentSold}%</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <p className="text-xs line-through text-[#838383] font-medium">
                                            {item.oldPrice && <>{item?.oldPrice?.toLocaleString('vi-VN') + '₫'}</>}
                                        </p>
                                        <p className="text-sm text-primary-green font-semibold">
                                            {item?.newPrice?.toLocaleString('vi-VN') + '₫'}
                                        </p>
                                    </div>
                                    <button className="text-sm bg-primary-green text-white font-semibold px-6 py-1 rounded-full my-2 hover:bg-primary-yellow hover:text-black duration-300">
                                        Thêm vào giỏ
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default KhuyenMaiDacBiet;
