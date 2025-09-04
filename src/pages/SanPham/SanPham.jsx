import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDoubleDown,
    faAngleDoubleUp,
    faAngleRight,
    faArrowDownWideShort,
    faChevronDown,
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { assets, product } from '@/assets/assets';
import config from '@/configs';
import ProductCategoryList from '@/components/ProductCategoryList';
import SidebarBoLoc from '@/components/SidebarBoLoc';
import ProductItem from '@/components/ProductItem';

const danhMucSanPhamData = [
    {
        title: 'Rau củ quả',
        slug: config.routes.RauCuQua,
        children: [
            {
                title: 'Rau ăn lá',
                slug: config.routes.RauAnLa,
                children: [
                    { title: 'Rau muống', slug: config.routes.RauMuong },
                    { title: 'Rau dền', slug: config.routes.RauDen },
                    { title: 'Rau mầm', slug: config.routes.RauMam },
                ],
            },
            {
                title: 'Rau ăn củ',
                slug: config.routes.RauAnCu,
                children: [
                    { title: 'Khoai lang', slug: config.routes.KhoaiLang },
                    { title: 'Khoai tây', slug: config.routes.KhoaiTay },
                    { title: 'Cà rốt', slug: config.routes.CaRot },
                ],
            },
            {
                title: 'Rau ăn quả',
                slug: config.routes.RauAnQua,
                children: [
                    { title: 'Dưa leo', slug: config.routes.DuaLeo },
                    { title: 'Mướp đắng', slug: config.routes.MuopDang },
                    { title: 'Bí đao', slug: config.routes.BiDao },
                ],
            },
            {
                title: 'Rau gia vị',
                slug: config.routes.RauGiaVi,
            },
        ],
    },
    {
        title: 'Trái cây',
        slug: config.routes.TraiCay,
        children: [
            {
                title: 'Trái cây trong nước',
                slug: config.routes.TraiCayTrongNuoc,
            },
            {
                title: 'Trái cây nhập khẩu',
                slug: config.routes.TraiCayNhapKhau,
            },
            {
                title: 'Trái cây dông lạnh',
                slug: config.routes.TraiCayDongLanh,
            },
            {
                title: 'Trái cây sấy',
                slug: config.routes.TraiCaySay,
            },
        ],
    },
    {
        title: 'Thịt và hải sản',
        slug: config.routes.ThitVaHaiSan,
        children: [
            {
                title: 'Thịt heo',
                slug: config.routes.ThitHeo,
            },
            {
                title: 'Thịt bò',
                slug: config.routes.ThitBo,
            },
            {
                title: 'Thịt nhập khẩu',
                slug: config.routes.ThitNhapKhau,
            },
            {
                title: 'Thủy hải sản',
                slug: config.routes.ThuyHaiSan,
            },
        ],
    },
    {
        title: 'Đồ khô',
        slug: config.routes.DoKho,
        children: [
            {
                title: 'Gạo các loại',
                slug: config.routes.GaoCacLoai,
            },
            {
                title: 'Hạt các loại',
                slug: config.routes.HatCacLoai,
            },
            {
                title: 'Đậu các loại',
                slug: config.routes.DauCacLoai,
            },
            {
                title: 'Trà các loại',
                slug: config.routes.TraCacLoai,
            },
        ],
    },
    {
        title: 'Thức uống',
        slug: config.routes.ThucUong,
        children: [
            {
                title: 'Thức uống đóng chai',
                slug: config.routes.ThucUongDongChai,
            },
            {
                title: 'Sữa thực vật',
                slug: config.routes.SuaThucVat,
            },
            {
                title: 'Nước ép và sinh tố',
                slug: config.routes.NuocEpVaSinhTo,
            },
            {
                title: 'Sữa động vật',
                slug: config.routes.SuaDongVat,
            },
        ],
    },
    {
        title: 'Sản phẩm chế biến',
        slug: config.routes.SanPhamCheBien,
        children: [
            {
                title: 'Bánh mì đông lạnh',
                slug: config.routes.BanhMiDongLanh,
            },
            {
                title: 'Bún các loại',
                slug: config.routes.BunCacLoai,
            },
            {
                title: 'Nước ép và sinh tố',
                slug: config.routes.NuocEpVaSinhTo,
            },
            {
                title: 'Thực phẩm đông lạnh',
                slug: config.routes.ThucPhamDongLanh,
            },
        ],
    },
];

const mucGiaData = [
    'Dưới 100.000đ',
    'Từ 100.000đ - 200.000đ',
    'Từ 200.000đ - 300.000đ',
    'Từ 300.000đ - 500.000đ',
    'Từ 500.000đ - 1 triệu',
    'Từ 1 triệu - 2 triệu',
    'Từ 2 triệu - 5 triệu',
    'Từ 5 triệu - 10 triệu',
    'Trên 10 triệu',
];

const loaiData = [
    'Nấm các loại',
    'Thịt gà',
    'Dầu thực vật',
    'Trứng các loại',
    'Bún các loại',
    'Thức uống khác',
    'Sữa thực vật',
    'Đồ uống đóng chai',
    'Hạt các loại',
    'Đậu các loại',
    'Gạo các loại',
    'Bột làm bánh',
    'Chả mực',
    'Thủy hải sản',
    'Thịt bò',
    'Thịt heo',
    'Trái cây đông lạnh',
    'Trái cây nhập khẩu',
    'Trái cây trong nước',
    'Rau gia vị',
    'Rau ăn quả',
    'Rau ăn củ',
    'Rau ăn lá',
];

const thuongHieuData = [
    'Bean Milk',
    'Bean Drink',
    'Bean Sea',
    'Bean Kobe',
    'Bean Karst',
    'Bean Juliet',
    'Bean Fruit',
    'Nông sản sạch',
    'Bean Team',
    'Bean Farm',
];

const options = ['Mặc định', 'A → Z', 'Z → A', 'Giá tăng dần', 'Giá giảm dần', 'Hàng mới nhất', 'Hàng cũ nhất'];

function SanPham() {
    const [isShow, setIsShow] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState('Mặc định');

    useEffect(() => {
        document.title = 'Tất cả sản phẩm';
    });

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 24;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = product.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(product.length / itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <div className="relative">
                <div>
                    <img src={assets.bannerSanPham} alt="" className="h-[350px] object-cover w-full" />
                    <div className="absolute inset-0 bg-black opacity-20 rounded-tr-xl rounded-br-xl"></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <h1 className="text-primary-green text-[35px] font-bold">Tất cả sản phẩm</h1>
                    <div className="flex items-center gap-3 text-[14px]">
                        <Link to={config.routes.home}>
                            <h1 className="text-white py-4 hover:text-primary-yellow">Trang chủ</h1>
                        </Link>
                        <FontAwesomeIcon icon={faAngleRight} className="text-white" size="xs" />
                        <h1 className="text-primary-yellow py-4">Tất cả sản phẩm</h1>
                    </div>
                    <ProductCategoryList />
                </div>
            </div>
            <div className="w-[83%] mx-auto mt-5">
                <div className="flex gap-6 items-start">
                    <div className="w-[25%] sticky top-2">
                        <SidebarBoLoc
                            danhMuc={danhMucSanPhamData}
                            mucGia={mucGiaData}
                            loai={loaiData}
                            thuongHieu={thuongHieuData}
                        />
                    </div>
                    <div className="w-[75%]">
                        <div className="w-full bg-[#f7f8f9] p-2.5 mb-4 rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.08)] flex justify-between items-center">
                            <h1 className="font-bold uppercase">Tất cả sản phẩm</h1>

                            {/* Icon + Label */}
                            <div className="flex items-center gap-1 text-[#777]">
                                <FontAwesomeIcon icon={faArrowDownWideShort} />
                                <span className="text-sm mr-4">Sắp xếp:</span>

                                {/* Dropdown Sort - chỉ hover vào "Mặc định" mới ra */}
                                <div className="relative group cursor-pointer inline-block">
                                    {/* Nút hiển thị */}
                                    <div className="flex items-center gap-1">
                                        <span className="text-sm font-medium">{selectedFilter}</span>
                                        <FontAwesomeIcon icon={faChevronDown} size="xs" />
                                    </div>

                                    {/* Menu */}
                                    <div className="absolute right-0 top-full mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                                        <ul className="text-sm text-gray-700">
                                            {options.map((opt) => (
                                                <li
                                                    key={opt}
                                                    onClick={() => setSelectedFilter(opt)}
                                                    className={`px-3 py-2 hover:bg-gray-100 cursor-pointer ${
                                                        selectedFilter === opt ? 'bg-gray-100 font-medium' : ''
                                                    }`}
                                                >
                                                    {opt}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-4 gap-y-4 gap-x-6">
                            {currentItems.map((item, index) => (
                                <ProductItem
                                    key={index}
                                    slug={item.slug}
                                    name={item.name}
                                    image={item.image}
                                    oldPrice={item.oldPrice}
                                    newPrice={item.newPrice}
                                    discount={item.discount}
                                />
                            ))}
                        </div>
                        <div className="flex justify-center items-center mt-6">
                            {currentPage > 1 && (
                                <button
                                    onClick={prevPage}
                                    className="bg-white text-primary-rose w-10 h-9 rounded-lg border hover:bg-primary-green hover:text-white duration-500"
                                >
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </button>
                            )}

                            <div className="flex gap-2 mx-2">
                                {pageNumbers.map((number) => (
                                    <button
                                        key={number}
                                        onClick={() => setCurrentPage(number)}
                                        className={`w-10 h-9 rounded-lg hover:bg-primary-green font-medium hover:text-white duration-500 ${
                                            currentPage === number
                                                ? 'bg-primary-green border border-transparent text-white'
                                                : 'bg-white border border-[#e5e5e5]'
                                        }`}
                                    >
                                        {number}
                                    </button>
                                ))}
                            </div>

                            {currentPage < totalPages && (
                                <button
                                    onClick={nextPage}
                                    className="bg-white text-primary-rose w-10 h-9 rounded-lg border hover:bg-primary-green hover:text-white duration-500"
                                >
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            )}
                        </div>
                        <div className="mt-16">
                            <div
                                className={`${
                                    isShow ? '' : 'max-h-[260px] overflow-hidden'
                                } relative text-sm flex flex-col gap-4`}
                            >
                                <p>
                                    Nhiều người đặt niềm tin vào thực phẩm sạch, nhưng có người lại tin tưởng vào thực
                                    phẩm hữu cơ Bean Farm. Vậy thực phẩm sạch và thực phẩm hữu cơ Bean Farm có gì khác
                                    nhau?
                                </p>
                                <p>
                                    <strong>Thực phẩm sạch</strong>
                                </p>
                                <p>
                                    Theo các chuyên gia, thực phẩm sạch là thực phẩm thu được từ nguồn nuôi trồng, vẫn
                                    sử dụng các “đầu vào” là hóa chất như thuốc trừ sâu, chất hóa học tổng hợp… Nhưng
                                    việc sử dụng hóa chất được thực hiện đúng quy trình để sản phẩm ra thị trường chỉ
                                    còn dư lượng độc hại dưới mức cho phép, không gây hại cho sức khỏe người tiêu dùng.
                                    Cũng vì thế chúng được gọi là sản phẩm “an toàn”.
                                </p>
                                <img src={assets.tatCaSanPham1} alt="" />
                                <p>
                                    <strong>Thực phẩm hữu cơ Bean Farm</strong>
                                </p>
                                <p>
                                    Ở Việt Nam, khái niệm thực phẩm hữu cơ Bean Farm không còn mới mẻ nhưng nó chưa được
                                    biết đến rộng rãi và mọi người cũng chưa hiểu hết được ý nghĩa cũng như tầm quan
                                    trọng của nó đối với đời sống và sức khỏe. Khi được hỏi: là một bà mẹ thông thái,
                                    vậy bạn có biêt đến thực phẩm hữu cơ Bean Farm hay không? ½ trong số đó đều lắc đầu
                                    và nhầm lẫn cho rằng: ồ nó cũng chỉ là thực phẩm sạch thôi mà.
                                </p>
                                <p>
                                    Tuy nhiên, điều đó không phải vậy. Bởi câu chuyện về thực phẩm hữu cơ Bean Farm rất
                                    dài. Nó không phải là từ những câu nói truyền miệng hay phóng đại bởi câu chữ mà
                                    được kiểm nghiệm từ thực tế bởi chính những đôi bàn tay và cái tâm của những nhà
                                    nghiên cứu thực phẩm đã làm ra.
                                </p>
                                <p>
                                    Thực phẩm hữu cơ là thực phẩm bao gồm rau củ quả, trái cây, ngũ cốc, thịt, các sản
                                    phẩm từ sữa, trứng, mật ong… Và thực phẩm được gọi là hữu cơ Bean Farm là thực phẩm
                                    phải thu từ nguồn sản xuất không sử dụng bất kỳ hóa chất nào.
                                </p>
                                <img src={assets.tatCaSanPham2} alt="" />
                                <p>
                                    Sản xuất thực phẩm hữu cơ đòi hỏi thực hiện trong một hệ sinh thái đảm bảo, không
                                    được gần các nhà máy công nghiệp, không gần quốc lộ, tại vùng đất nền và nguồn nước
                                    có dư lượng kim loại và các chất độc tự nhiên thấp. Nguồn nước tưới và chăn nuôi
                                    phải là nước giếng sạch, không phải nước sông.
                                </p>
                                <p>
                                    Có thể nhận thấy sự khác biệt giữa thịt hữu cơ và thịt sạch đó là thịt hữu cơ bắt
                                    buộc là thịt từ những động vật được nuôi trong điều kiện thức ăn tiêu chuẩn, hoàn
                                    toàn tự nhiên và hữu cơ. Trong khi đó, thịt sạch không bắt buộc là sản phẩm được
                                    nuôi lớn trong điều kiện hữu cơ mà có thể cho ăn bằng nhiều nguồn thức ăn khác
                                    nhau.Trẻ sơ sinh và trẻ nhỏ là đối tượng rất nhạy cảm, vì thế thức ăn đạt chuẩn Bean
                                    Farm là sự lựa chọn lý tưởng cho chế độ ăn của bé.
                                </p>
                                {!isShow && (
                                    <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff00] to-white"></div>
                                )}
                            </div>
                        </div>
                        <div className="text-center">
                            <button
                                className="border border-black rounded-full px-7 py-1 mt-8 text-lg font-semibold hover:bg-primary-green hover:text-white hover:border-white duration-500"
                                onClick={() => setIsShow(!isShow)}
                            >
                                {isShow ? 'Thu gọn' : 'Xem thêm'}
                                <FontAwesomeIcon
                                    icon={isShow ? faAngleDoubleUp : faAngleDoubleDown}
                                    size="xs"
                                    className="ml-2"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SanPham;
