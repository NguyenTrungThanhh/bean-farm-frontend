import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import config from '@/configs';
import { assets } from '@/assets/assets';
import { useRef, useState } from 'react';

function MenuHeader() {
    const location = useLocation();
    const timeoutRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 200);
    };

    return (
        <div className="border-b border-[#f7f7f7]">
            <div className="w-[83%] mx-auto py-3 flex items-center gap-[159px]">
                <div className="relative group w-[236px]">
                    <div className="flex items-center justify-center gap-3 h-[40px] bg-primary-yellow rounded-[4px] cursor-pointer">
                        <FontAwesomeIcon icon={faBars} />
                        <h1 className="text-sm font-semibold">Danh mục sản phẩm</h1>
                    </div>

                    {/* Menu cấp 2 */}
                    <div className="absolute left-0 top-full w-full hidden group-hover:block bg-white shadow-md z-10">
                        <ul>
                            <li className="relative group/item hover:bg-primary-yellow px-2 py-2 cursor-pointer flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img src={assets.iconMegaMenu1} alt="" className="w-6" />
                                    <p className="text-sm">Rau củ quả</p>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                                </div>

                                {/* Menu cấp 3 */}
                                <div className="absolute top-0 left-full hidden group-hover/item:block w-[800px] h-[240px] bg-white z-20 shadow-[4px_4px_10px_rgba(0,0,0,0.1)]">
                                    <ul className="p-4 grid grid-cols-3 gap-4 gap-y-2">
                                        <li className="p-2 rounded cursor-pointer text-sm">
                                            <p className="text-primary-green font-semibold hover:text-primary-yellow">
                                                Rau ăn lá
                                            </p>
                                            <ul className="mt-4 flex flex-col gap-2">
                                                <li className="hover:text-primary-yellow">
                                                    <p>Rau muống</p>
                                                </li>
                                                <li className="hover:text-primary-yellow">
                                                    <p>Rau dền</p>
                                                </li>
                                                <li className="hover:text-primary-yellow">
                                                    <p>Rau mầm</p>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="p-2 rounded cursor-pointer text-sm">
                                            <p className="text-primary-green font-semibold hover:text-primary-yellow">
                                                Rau ăn củ
                                            </p>
                                            <ul className="mt-4 flex flex-col gap-2">
                                                <li className="hover:text-primary-yellow">
                                                    <p>Khoai lang</p>
                                                </li>
                                                <li className="hover:text-primary-yellow">
                                                    <p>Khoai tây</p>
                                                </li>
                                                <li className="hover:text-primary-yellow">
                                                    <p>Cà rốt</p>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="p-2 rounded cursor-pointer text-sm">
                                            <p className="text-primary-green font-semibold hover:text-primary-yellow">
                                                Rau ăn quả
                                            </p>
                                            <ul className="mt-4 flex flex-col gap-2">
                                                <li className="hover:text-primary-yellow">
                                                    <p>Dưa leo</p>
                                                </li>
                                                <li className="hover:text-primary-yellow">
                                                    <p>Mướp đắng</p>
                                                </li>
                                                <li className="hover:text-primary-yellow">
                                                    <p>Bí đao</p>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="p-2 rounded cursor-pointer text-sm">
                                            <p className="text-primary-green font-semibold hover:text-primary-yellow">
                                                Rau gia vị
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="group/item hover:bg-primary-yellow px-2 py-2 cursor-pointer flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img src={assets.iconMegaMenu2} alt="" className="w-6" />
                                    <p className="text-sm">Trái cây</p>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                                </div>

                                {/* Menu cấp 3 */}
                                <div className="absolute top-0 left-full hidden group-hover/item:block w-[800px] h-[240px] bg-white z-20 shadow-[4px_4px_10px_rgba(0,0,0,0.1)]">
                                    <ul className="p-4 grid grid-cols-3 gap-4 gap-y-1">
                                        <li className="p-2 rounded cursor-pointer text-sm">
                                            <p className="text-primary-green font-semibold hover:text-primary-yellow">
                                                Trái cây trong nước
                                            </p>
                                        </li>
                                        <li className="p-2 rounded cursor-pointer text-sm">
                                            <p className="text-primary-green font-semibold hover:text-primary-yellow">
                                                Trái cây nhập khẩu
                                            </p>
                                        </li>
                                        <li className="p-2 rounded cursor-pointer text-sm">
                                            <p className="text-primary-green font-semibold hover:text-primary-yellow">
                                                Trái cây đông lạnh
                                            </p>
                                        </li>
                                        <li className="p-2 rounded cursor-pointer text-sm">
                                            <p className="text-primary-green font-semibold hover:text-primary-yellow">
                                                Trái cây sấy
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="group/item hover:bg-primary-yellow px-2 py-2 cursor-pointer flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img src={assets.iconMegaMenu3} alt="" className="w-6" />
                                    <p className="text-sm">Thịt và hải sản</p>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                                </div>

                                {/* Menu cấp 3 */}
                                <div className="absolute top-0 left-full hidden group-hover/item:block w-[800px] h-[240px] bg-white z-20 shadow-[4px_4px_10px_rgba(0,0,0,0.1)]">
                                    <ul className="p-4 grid grid-cols-3 gap-4 gap-y-1">
                                        <li className="p-2 rounded cursor-pointer text-sm">
                                            <p className="text-primary-green font-semibold hover:text-primary-yellow">
                                                Thịt heo
                                            </p>
                                        </li>
                                        <li className="p-2 rounded cursor-pointer text-sm">
                                            <p className="text-primary-green font-semibold hover:text-primary-yellow">
                                                Thịt bò
                                            </p>
                                        </li>
                                        <li className="p-2 rounded cursor-pointer text-sm">
                                            <p className="text-primary-green font-semibold hover:text-primary-yellow">
                                                Thịt nhập khẩu
                                            </p>
                                        </li>
                                        <li className="p-2 rounded cursor-pointer text-sm">
                                            <p className="text-primary-green font-semibold hover:text-primary-yellow">
                                                Thủy hải sản
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="group/item hover:bg-primary-yellow px-2 py-2 cursor-pointer flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img src={assets.iconMegaMenu4} alt="" className="w-6" />
                                    <p className="text-sm">Đồ khô</p>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                                </div>

                                {/* Menu cấp 3 */}
                                <div className="absolute top-0 left-full hidden group-hover/item:block w-[800px] h-[240px] bg-white z-20 shadow-[4px_4px_10px_rgba(0,0,0,0.1)]">
                                    <ul className="p-4 grid grid-cols-3 gap-4 gap-y-1">
                                        <li className="p-2 rounded cursor-pointer text-sm">
                                            <p className="text-primary-green font-semibold hover:text-primary-yellow">
                                                Gạo các loại
                                            </p>
                                        </li>
                                        <li className="p-2 rounded cursor-pointer text-sm">
                                            <p className="text-primary-green font-semibold hover:text-primary-yellow">
                                                Hạt các loại
                                            </p>
                                        </li>
                                        <li className="p-2 rounded cursor-pointer text-sm">
                                            <p className="text-primary-green font-semibold hover:text-primary-yellow">
                                                Đậu các loại
                                            </p>
                                        </li>
                                        <li className="p-2 rounded cursor-pointer text-sm">
                                            <p className="text-primary-green font-semibold hover:text-primary-yellow">
                                                Trà các loại
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="group/item hover:bg-primary-yellow px-2 py-2 cursor-pointer flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img src={assets.iconMegaMenu5} alt="" className="w-6" />
                                    <p className="text-sm">Thức uống</p>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                                </div>

                                {/* Menu cấp 3 */}
                                <div className="absolute top-0 left-full hidden group-hover/item:block w-[800px] h-[240px] bg-white z-20 shadow-[4px_4px_10px_rgba(0,0,0,0.1)]">
                                    <ul className="p-4 grid grid-cols-3 gap-4 gap-y-1">
                                        <li className="p-2 rounded cursor-pointer text-sm">
                                            <p className="text-primary-green font-semibold hover:text-primary-yellow">
                                                Thức uống đóng chai
                                            </p>
                                        </li>
                                        <li className="p-2 rounded cursor-pointer text-sm">
                                            <p className="text-primary-green font-semibold hover:text-primary-yellow">
                                                Sữa thực vật
                                            </p>
                                        </li>
                                        <li className="p-2 rounded cursor-pointer text-sm">
                                            <p className="text-primary-green font-semibold hover:text-primary-yellow">
                                                Nước ép và sinh tố
                                            </p>
                                        </li>
                                        <li className="p-2 rounded cursor-pointer text-sm">
                                            <p className="text-primary-green font-semibold hover:text-primary-yellow">
                                                Sữa động vật
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="group/item hover:bg-primary-yellow px-2 py-2 cursor-pointer flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img src={assets.iconMegaMenu6} alt="" className="w-6" />
                                    <p className="text-sm">Sản phẩm chế biến</p>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                                </div>

                                {/* Menu cấp 3 */}
                                <div className="absolute top-0 left-full hidden group-hover/item:block w-[800px] h-[240px] bg-white z-20 shadow-[4px_4px_10px_rgba(0,0,0,0.1)]">
                                    <ul className="p-4 grid grid-cols-3 gap-4 gap-y-1">
                                        <li className="p-2 rounded cursor-pointer text-sm">
                                            <p className="text-primary-green font-semibold hover:text-primary-yellow">
                                                Bánh mì đông lạnh
                                            </p>
                                        </li>
                                        <li className="p-2 rounded cursor-pointer text-sm">
                                            <p className="text-primary-green font-semibold hover:text-primary-yellow">
                                                Bún các loại
                                            </p>
                                        </li>
                                        <li className="p-2 rounded cursor-pointer text-sm">
                                            <p className="text-primary-green font-semibold hover:text-primary-yellow">
                                                Mì các loại
                                            </p>
                                        </li>
                                        <li className="p-2 rounded cursor-pointer text-sm">
                                            <p className="text-primary-green font-semibold hover:text-primary-yellow">
                                                Thực phẩm đông lạnh
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Link to={config.routes.home}>
                        <div
                            className={`px-4 py-1 rounded-full text-sm font-semibold hover:bg-primary-green hover:text-white duration-300 hover:bg-primary-green hover:text-white duration-300 ${
                                location.pathname === config.routes.home
                                    ? 'bg-primary-green text-white'
                                    : 'bg-[#F1FAF6] text-black'
                            }`}
                        >
                            <p>Trang chủ</p>
                        </div>
                    </Link>
                    <Link to={config.routes.GioiThieu}>
                        <div
                            className={`px-4 py-1 rounded-full text-sm font-semibold hover:bg-primary-green hover:text-white duration-300 ${
                                location.pathname === config.routes.GioiThieu
                                    ? 'bg-primary-green text-white'
                                    : 'bg-[#F1FAF6] text-black'
                            }`}
                        >
                            <p>Giới thiệu</p>
                        </div>
                    </Link>

                    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Link to={config.routes.SanPham}>
                            <div
                                className={`group flex items-center gap-2 px-4 py-1 rounded-full text-sm font-semibold hover:bg-primary-green hover:text-white duration-300 ${
                                    location.pathname === config.routes.SanPham
                                        ? 'bg-primary-green text-white'
                                        : 'bg-[#F1FAF6] text-black'
                                }`}
                            >
                                <p>Sản phẩm</p>
                                <FontAwesomeIcon
                                    icon={faCaretDown}
                                    className={`transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                />
                            </div>
                        </Link>

                        <div
                            className={`absolute w-[1004px] left-full top-full mt-2 transform -translate-x-1/2 bg-white shadow-lg rounded-md p-4 z-50 flex gap-6 transition-all duration-300 ease-out ${
                                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                            }`}
                        >
                            <div className="w-[70%]">
                                <ul className="grid grid-cols-3 gap-8 gap-y-2">
                                    <li className="p-2 rounded cursor-pointer">
                                        <Link to={config.routes.RauCuQua}>
                                            <p className="text-primary-green font-semibold hover:text-primary-yellow">
                                                Rau củ quả
                                            </p>
                                        </Link>
                                        <ul className="mt-3 flex flex-col gap-1">
                                            <li className="hover:text-primary-yellow">
                                                <Link to={config.routes.RauAnLa}>
                                                    <p>Rau ăn lá</p>
                                                </Link>
                                            </li>
                                            <li className="hover:text-primary-yellow">
                                                <Link to={config.routes.RauAnCu}>
                                                    <p>Rau ăn củ</p>
                                                </Link>
                                            </li>
                                            <li className="hover:text-primary-yellow">
                                                <Link to={config.routes.RauAnQua}>
                                                    <p>Rau ăn quả</p>
                                                </Link>
                                            </li>
                                            <li className="hover:text-primary-yellow">
                                                <Link to={config.routes.RauGiaVi}>
                                                    <p>Rau gia vị</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="p-2 rounded cursor-pointer">
                                        <Link to={config.routes.TraiCay}>
                                            <p className="text-primary-green font-semibold hover:text-primary-yellow">
                                                Trái cây
                                            </p>
                                        </Link>
                                        <ul className="mt-3 flex flex-col gap-1">
                                            <li className="hover:text-primary-yellow">
                                                <Link to={config.routes.TraiCayTrongNuoc}>
                                                    <p>Trái cây trong nước</p>
                                                </Link>
                                            </li>
                                            <li className="hover:text-primary-yellow">
                                                <Link to={config.routes.TraiCayNhapKhau}>
                                                    <p>Trái cây nhập khẩu</p>
                                                </Link>
                                            </li>
                                            <li className="hover:text-primary-yellow">
                                                <Link to={config.routes.TraiCayDongLanh}>
                                                    <p>Trái cây đông lạnh</p>
                                                </Link>
                                            </li>
                                            <li className="hover:text-primary-yellow">
                                                <Link to={config.routes.TraiCaySay}>
                                                    <p>Trái cây sấy</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="p-2 rounded cursor-pointer">
                                        <Link to={config.routes.ThitVaHaiSan}>
                                            <p className="text-primary-green font-semibold hover:text-primary-yellow">
                                                Thịt và hải sản
                                            </p>
                                        </Link>
                                        <ul className="mt-3 flex flex-col gap-1">
                                            <li className="hover:text-primary-yellow">
                                                <Link to={config.routes.ThitHeo}>
                                                    <p>Thịt heo</p>
                                                </Link>
                                            </li>
                                            <li className="hover:text-primary-yellow">
                                                <Link to={config.routes.ThitBo}>
                                                    <p>Thịt bò</p>
                                                </Link>
                                            </li>
                                            <li className="hover:text-primary-yellow">
                                                <Link to={config.routes.ThitNhapKhau}>
                                                    <p>Thịt nhập khẩu</p>
                                                </Link>
                                            </li>
                                            <li className="hover:text-primary-yellow">
                                                <Link to={config.routes.ThuyHaiSan}>
                                                    <p>Thủy hải sản</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="p-2 rounded cursor-pointer">
                                        <Link to={config.routes.DoKho}>
                                            <p className="text-primary-green font-semibold hover:text-primary-yellow">
                                                Đồ khô
                                            </p>
                                        </Link>
                                        <ul className="mt-3 flex flex-col gap-1">
                                            <li className="hover:text-primary-yellow">
                                                <Link to={config.routes.GaoCacLoai}>
                                                    <p>Gạo các loại</p>
                                                </Link>
                                            </li>
                                            <li className="hover:text-primary-yellow">
                                                <Link to={config.routes.HatCacLoai}>
                                                    <p>Hạt các loại</p>
                                                </Link>
                                            </li>
                                            <li className="hover:text-primary-yellow">
                                                <Link to={config.routes.DauCacLoai}>
                                                    <p>Đậu các loại</p>
                                                </Link>
                                            </li>
                                            <li className="hover:text-primary-yellow">
                                                <Link to={config.routes.TraCacLoai}>
                                                    <p>Trà các loại</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="p-2 rounded cursor-pointer">
                                        <Link to={config.routes.ThucUong}>
                                            <p className="text-primary-green font-semibold hover:text-primary-yellow">
                                                Thức uống
                                            </p>
                                        </Link>
                                        <ul className="mt-3 flex flex-col gap-1">
                                            <li className="hover:text-primary-yellow">
                                                <Link to={config.routes.ThucUongDongChai}>
                                                    <p>Thức uống đóng chai</p>
                                                </Link>
                                            </li>
                                            <li className="hover:text-primary-yellow">
                                                <Link to={config.routes.SuaThucVat}>
                                                    <p>Sữa thực vật</p>
                                                </Link>
                                            </li>
                                            <li className="hover:text-primary-yellow">
                                                <Link to={config.routes.NuocEpVaSinhTo}>
                                                    <p>Nước ép và sinh tố</p>
                                                </Link>
                                            </li>
                                            <li className="hover:text-primary-yellow">
                                                <Link to={config.routes.SuaDongVat}>
                                                    <p>Sữa động vật</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="p-2 rounded cursor-pointer">
                                        <Link to={config.routes.SanPhamCheBien}>
                                            <p className="text-primary-green font-semibold hover:text-primary-yellow">
                                                Sản phẩm chế biến
                                            </p>
                                        </Link>
                                        <ul className="mt-3 flex flex-col gap-1">
                                            <li className="hover:text-primary-yellow">
                                                <Link to={config.routes.BanhMiDongLanh}>
                                                    <p>Bánh mì đông lạnh</p>
                                                </Link>
                                            </li>
                                            <li className="hover:text-primary-yellow">
                                                <Link to={config.routes.BunCacLoai}>
                                                    <p>Bún các loại</p>
                                                </Link>
                                            </li>
                                            <li className="hover:text-primary-yellow">
                                                <Link to={config.routes.MiCacLoai}>
                                                    <p>Mì các loại</p>
                                                </Link>
                                            </li>
                                            <li className="hover:text-primary-yellow">
                                                <Link to={config.routes.ThucPhamDongLanh}>
                                                    <p>Thực phẩm đông lạnh</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div className="w-[30%]">
                                <img
                                    src={assets.megaMenuBanner}
                                    alt="Banner"
                                    className="h-80 mx-auto rounded-md object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <Link to={config.routes.CauHoiThuongGap}>
                        <div
                            className={`px-4 py-1 rounded-full text-sm font-semibold hover:bg-primary-green hover:text-white duration-300 ${
                                location.pathname === config.routes.CauHoiThuongGap
                                    ? 'bg-primary-green text-white'
                                    : 'bg-[#F1FAF6] text-black'
                            }`}
                        >
                            <p>Câu hỏi thường gặp</p>
                        </div>
                    </Link>
                    <Link to={config.routes.TinTuc}>
                        <div
                            className={`px-4 py-1 rounded-full text-sm font-semibold hover:bg-primary-green hover:text-white duration-300 ${
                                location.pathname === config.routes.TinTuc
                                    ? 'bg-primary-green text-white'
                                    : 'bg-[#F1FAF6] text-black'
                            }`}
                        >
                            <p>Tin tức</p>
                        </div>
                    </Link>
                    <Link to={config.routes.LienHe}>
                        <div
                            className={`px-4 py-1 rounded-full text-sm font-semibold hover:bg-primary-green hover:text-white duration-300 ${
                                location.pathname === config.routes.LienHe
                                    ? 'bg-primary-green text-white'
                                    : 'bg-[#F1FAF6] text-black'
                            }`}
                        >
                            <p>Liên hệ</p>
                        </div>
                    </Link>
                    <Link to={config.routes.MuaHangNhanh}>
                        <div
                            className={`px-4 py-1 rounded-full text-sm text-white font-semibold bg-red-500 hover:bg-primary-green hover:text-white duration-300 animate-zoomHea ${
                                location.pathname === config.routes.MuaHangNhanh
                                    ? 'bg-primary-green text-white'
                                    : 'bg-[#F1FAF6] text-black'
                            }`}
                        >
                            <p>Mua hàng nhanh</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MenuHeader;
