import { assets, product } from '@/assets/assets';
import { Link } from 'react-router-dom';

function CacLoaiSanPham() {
    const formatPrice = (price) => {
        return price?.toLocaleString('vi-VN') + '₫';
    };

    return (
        <div className="my-8">
            <div className="mb-10 overflow-hidden rounded-xl">
                <Link>
                    <img src={assets.uuDaiDacBietBanner} alt="" className=" rounded-xl hover:scale-105 duration-500" />
                </Link>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <div className="flex items-center justify-between border-b">
                        <Link>
                            <h1 className="text-[28px] font-bold border-b-[3px] border-[#bce3c9] hover:text-primary-green duration-300">
                                Đồ khô
                            </h1>
                        </Link>
                        <Link>
                            <p className="text-sm text-primary-green font-semibold hover:text-primary-yellow duration-300">
                                Xem thêm &gt;&gt;
                            </p>
                        </Link>
                    </div>
                    <div className="my-4 flex flex-col gap-4">
                        {product.slice(0, 3).map((item, index) => (
                            <div key={index} className="border rounded-xl flex">
                                <div className="relative">
                                    <Link>
                                        <img src={item.image} alt="" className="rounded-xl w-28 h-28" />
                                    </Link>
                                    {item.discount && (
                                        <div className="absolute top-3 left-1 bg-[#c90000] rounded-full px-2">
                                            <p className="text-sm text-white">{item.discount}%</p>
                                        </div>
                                    )}
                                </div>
                                <div className="p-2">
                                    <Link>
                                        <h1 className="font-semibold hover:text-primary-green duration-300">
                                            {item.name}
                                        </h1>
                                    </Link>
                                    <div className="flex items-center justify-center gap-4 mt-2">
                                        <p className="text-[#c90000] font-bold">{formatPrice(item.newPrice)}</p>
                                        <p className="line-through text-sm text-[#838383] font-medium">
                                            {item.oldPrice && formatPrice(item.oldPrice)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between border-b">
                        <Link>
                            <h1 className="text-[28px] font-bold border-b-[3px] border-[#bce3c9] hover:text-primary-green duration-300">
                                Thức uống
                            </h1>
                        </Link>
                        <Link>
                            <p className="text-sm text-primary-green font-semibold hover:text-primary-yellow duration-300">
                                Xem thêm &gt;&gt;
                            </p>
                        </Link>
                    </div>
                    <div className="my-4 flex flex-col gap-4">
                        {product.slice(0, 3).map((item, index) => (
                            <div key={index} className="border rounded-xl flex">
                                <div className="relative">
                                    <Link>
                                        <img src={item.image} alt="" className="rounded-xl w-28 h-28" />
                                    </Link>
                                    {item.discount && (
                                        <div className="absolute top-3 left-1 bg-[#c90000] rounded-full px-2">
                                            <p className="text-sm text-white">{item.discount}%</p>
                                        </div>
                                    )}
                                </div>
                                <div className="p-2">
                                    <Link>
                                        <h1 className="font-semibold hover:text-primary-green duration-300">
                                            {item.name}
                                        </h1>
                                    </Link>
                                    <div className="flex items-center justify-center gap-4 mt-2">
                                        <p className="text-[#c90000] font-bold">{formatPrice(item.newPrice)}</p>
                                        <p className="line-through text-sm text-[#838383] font-medium">
                                            {item.oldPrice && formatPrice(item.oldPrice)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between border-b">
                        <Link>
                            <h1 className="text-[28px] font-bold border-b-[3px] border-[#bce3c9] hover:text-primary-green duration-300">
                                Bún các loại
                            </h1>
                        </Link>
                        <Link>
                            <p className="text-sm text-primary-green font-semibold hover:text-primary-yellow duration-300">
                                Xem thêm &gt;&gt;
                            </p>
                        </Link>
                    </div>
                    <div className="my-4 flex flex-col gap-4">
                        {product.slice(0, 3).map((item, index) => (
                            <div key={index} className="border rounded-xl flex">
                                <div className="relative">
                                    <Link>
                                        <img src={item.image} alt="" className="rounded-xl w-28 h-28" />
                                    </Link>
                                    {item.discount && (
                                        <div className="absolute top-3 left-1 bg-[#c90000] rounded-full px-2">
                                            <p className="text-sm text-white">{item.discount}%</p>
                                        </div>
                                    )}
                                </div>
                                <div className="p-2">
                                    <Link>
                                        <h1 className="font-semibold hover:text-primary-green duration-300">
                                            {item.name}
                                        </h1>
                                    </Link>
                                    <div className="flex items-center justify-center gap-4 mt-2">
                                        <p className="text-[#c90000] font-bold">{formatPrice(item.newPrice)}</p>
                                        <p className="line-through text-sm text-[#838383] font-medium">
                                            {item.oldPrice && formatPrice(item.oldPrice)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CacLoaiSanPham;
