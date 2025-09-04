import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import config from '@/configs';
import { BeanFarmContext } from '@/context/BeanFarmContext';

function CauHoiThuongGap() {
    const { displayText } = useContext(BeanFarmContext);

    const [isSanPham, setIsSanPham] = useState(true);
    const [isTinTuc, setIsTinTuc] = useState(false);

    useEffect(() => {
        document.title = 'Tìm kiếm';
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
                        <h1 className="text-sm text-primary-yellow">Tìm kiếm</h1>
                    </div>
                </div>
            </div>
            <div className="w-[83%] mx-auto">
                <div className="flex gap-2">
                    <div
                        className={`${
                            isSanPham
                                ? 'bg-primary-yellow text-black border-primary-yellow'
                                : 'bg-white text-primary-green border-primary-green hover:bg-primary-yellow hover:text-black hover:border-primary-yellow duration-500'
                        } px-4 py-1 border rounded-full cursor-pointer`}
                        onClick={() => {
                            setIsSanPham(true);
                            setIsTinTuc(false);
                        }}
                    >
                        Sản phẩm
                    </div>
                    <div
                        className={`${
                            isTinTuc
                                ? 'bg-primary-yellow text-black border-primary-yellow'
                                : 'bg-white text-primary-green border-primary-green hover:bg-primary-yellow hover:text-black hover:border-primary-yellow duration-500'
                        } px-4 py-1 border rounded-full cursor-pointer`}
                        onClick={() => {
                            setIsSanPham(false);
                            setIsTinTuc(true);
                        }}
                    >
                        Tin tức
                    </div>
                </div>
                <div className="mb-8">
                    <h1 className="text-2xl my-4">Nhập từ khóa để tìm kiếm</h1>
                    <div className="w-full flex items-center border border-primary-green rounded-md overflow-hidden">
                        <input
                            type="text"
                            placeholder={displayText}
                            className="flex-1 px-3 h-10 text-sm focus:outline-none"
                        />
                        <button className="w-10 h-[38px] bg-primary-green text-white flex items-center justify-center rounded-md mr-[1px] hover:bg-primary-yellow duration-500">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CauHoiThuongGap;
