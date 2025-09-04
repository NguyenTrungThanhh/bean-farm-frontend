import { assets } from '@/assets/assets';

function BannerGioiThieu() {
    return (
        <div className="grid grid-cols-3 gap-6 my-10">
            <div>
                <div className="relative">
                    <img src={assets.banner1} alt="" className="rounded-xl object-cover" />

                    <div className="absolute top-1/2 -translate-y-1/2 px-8">
                        <h1 className="text-2xl font-semibold mb-4">
                            Nông sản tươi mới <br /> Sản phẩm 100% từ <br /> Thiên nhiên
                        </h1>
                        <button className="bg-primary-green text-white font-semibold px-6 py-1 rounded-md hover:bg-primary-yellow hover:text-black duration-300">
                            Xem ngay
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div className="relative">
                    <img src={assets.banner2} alt="" className="rounded-xl object-cover" />

                    <div className="absolute top-1/2 -translate-y-1/2 px-8">
                        <h1 className="text-2xl font-semibold mb-4">
                            Bữa sáng lành mạnh <br /> Sữa tươi nguyên chất <br /> Tiệt trùng
                        </h1>
                        <button className="bg-primary-green text-white font-semibold px-6 py-1 rounded-md hover:bg-primary-yellow hover:text-black duration-300">
                            Xem ngay
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div className="relative">
                    <img src={assets.banner3} alt="" className="rounded-xl object-cover" />

                    <div className="absolute top-1/2 -translate-y-1/2 px-8">
                        <h1 className="text-2xl font-semibold mb-4">
                            Rau củ hữu cơ 100% <br /> Sạch sẻ và an toàn <br /> Chất lượng
                        </h1>
                        <button className="bg-primary-green text-white font-semibold px-6 py-1 rounded-md hover:bg-primary-yellow hover:text-black duration-300">
                            Xem ngay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerGioiThieu;
