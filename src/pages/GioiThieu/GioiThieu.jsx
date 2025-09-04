import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { assets } from '@/assets/assets';
import config from '@/configs';

function GioiThieu() {
    useEffect(() => {
        document.title = 'Giới thiệu';
    });

    return (
        <div className="pb-10">
            <div className="bg-[#f5f5f5] w-full py-4">
                <div className="w-[83%] mx-auto">
                    <div className="flex items-center gap-3">
                        <Link to={config.routes.home}>
                            <h1 className="text-sm hover:text-primary-yellow">Trang chủ</h1>
                        </Link>
                        <FontAwesomeIcon icon={faAngleRight} size="xs" />
                        <h1 className="text-sm text-primary-yellow">Giới thiệu</h1>
                    </div>
                </div>
            </div>
            <div className="my-10 w-[83%] mx-auto">
                <div className="flex flex-col gap-10">
                    <div className="flex items-center gap-5">
                        <div className="w-1/2">
                            <img src={assets.bannerGioiThieu1} alt="" className="rounded-xl" />
                        </div>
                        <div className="w-1/2">
                            <h1 className="uppercase text-[22px] font-bold text-primary-yellow">Bean Farm</h1>
                            <p className="text-primary-green font-semibold text-[30px]">Chất lượng và tươi xanh</p>
                            <p className="text-[#565656] tracking-[0.05px]">
                                - Thực phẩm sạch, hay còn gọi là thực phẩm hữu cơ (organic) đang được ưa chuộng tại các
                                nước phát triển. Các chuyên gia sức khỏe cộng đồng cho rằng tại Mỹ đã có những đột phá
                                mang tính cách mạng trong thói quen ăn uống. <br />- Trong vòng 10 năm qua các loại thực
                                phẩm hữu cơ chỉ được bán tại một số cửa hàng nông sản ít ỏi, còn các nhà kinh doanh siêu
                                thị cũng chẳng có khái niệm “thực phẩm hữu cơ”. Nhưng hiện nay, loại thực phẩm này đã
                                được bán đại trà khắp nơi. <br />- Tại châu Âu các loại thực phẩm hữu cơ được coi là
                                biểu tượng của thực phẩm cho sức khỏe, có rất nhiều trang trại nông nghiệp thực hiện
                                nuôi trồng các sản phẩm nông nghiệp theo những quy định thực phẩm hữu cơ.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="w-1/2">
                            <h1 className="uppercase text-[22px] font-bold">Tầm nhìn</h1>
                            <p className="text-primary-green font-semibold text-[30px]">Tầm nhìn của chúng tôi</p>
                            <p className="text-[#565656] tracking-[0.05px]">
                                Hiểu được vấn đề ấy, tôi và những người bạn đã tâm huyết thành lập công ty nông sản Bean
                                Farm hữu cơ, với mong muốn nhập được nhiều sản phẩm tốt, chất lượng, có chứng nhận hữu
                                cơ về cung cấp cho các nhà phân phối tại Việt Nam. Các thương hiệu lớn được chúng tôi đã
                                tìm hiểu, phù hợp với tập quán sử dụng, mức thu nhập của người Việt Nam.
                            </p>
                        </div>
                        <div className="w-1/2">
                            <img src={assets.bannerGioiThieu2} alt="" className="rounded-xl" />
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="w-1/2">
                            <img src={assets.bannerGioiThieu3} alt="" className="rounded-xl" />
                        </div>
                        <div className="w-1/2">
                            <h1 className="uppercase text-[22px] font-bold">Mục tiêu</h1>
                            <p className="text-primary-green font-semibold text-[30px]">Mục tiêu của chúng tôi</p>
                            <p className="text-[#565656] tracking-[0.05px]">
                                Thật may mắn, hiện tại chúng tôi đã kết nối và phân phối cho các đối tác lớn ở Tp. Hồ
                                Chí Mình và Hà Nội. Trong tương lai gần, chúng sẽ tôi sẽ đẩy mạnh phân phối sản phẩm về
                                các tỉnh thành khác.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5 bg-primary-green mb-10">
                <div className="w-[83%] mx-auto">
                    <div className="flex justify-around items-center">
                        <div className="flex flex-col items-center">
                            <h1 className="text-5xl font-bold text-primary-yellow">2</h1>
                            <p className="text-lg text-white tracking-widest">Năm Kinh Nghiệm</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="text-5xl font-bold text-primary-yellow">200</h1>
                            <p className="text-lg text-white tracking-widest">Nhân Viên</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="text-5xl font-bold text-primary-yellow">3000+</h1>
                            <p className="text-lg text-white tracking-widest">Khách Hàng</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="text-5xl font-bold text-primary-yellow">8</h1>
                            <p className="text-lg text-white tracking-widest">Cửa Hàng</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[83%] mx-auto">
                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-4xl font-semibold text-primary-yellow">Tại sao chọn chúng tôi</h1>
                    <p className="text-center w-[60%] mb-6">
                        Với nhiều năm kinh nghiệm trong lĩnh vực nông sản. Chúng tôi tự hào đang là đơn vị cung cấp nông
                        sản chất lượng - tươi sạch. Cam kết về phân phối, sản phẩm, chất lượng đảm bảo và uy tín
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <div className="p-10 bg-white shadow-[rgba(0,0,0,0.24)_0px_3px_8px] rounded-lg">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-[90px] h-[90px] border-2 border-primary-green border-dashed rounded-full flex items-center justify-center">
                                <img src={assets.dichVu1} alt="" className="w-[60px] h-[60px]" />
                            </div>
                            <h1 className="text-[22px] font-semibold uppercase">Phân phối</h1>
                            <p className="text-lg text-center">
                                Bean Farm luôn hướng đến xây dựng chuỗi cung ứng nông sản hàng đầu tại Việt Nam.
                            </p>
                        </div>
                    </div>
                    <div className="p-10 bg-white shadow-[rgba(0,0,0,0.24)_0px_3px_8px] rounded-lg">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-[90px] h-[90px] border-2 border-primary-green border-dashed rounded-full flex items-center justify-center">
                                <img src={assets.dichVu2} alt="" className="w-[60px] h-[60px]" />
                            </div>
                            <h1 className="text-[22px] font-semibold uppercase">Sản phẩm</h1>
                            <p className="text-lg text-center">
                                Bean Farm luôn tìm kiếm và nhập sản phẩm hữu cơ chất lượng từ thị trường Châu Âu, Mỹ.
                            </p>
                        </div>
                    </div>
                    <div className="p-10 bg-white shadow-[rgba(0,0,0,0.24)_0px_3px_8px] rounded-lg">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-[90px] h-[90px] border-2 border-primary-green border-dashed rounded-full flex items-center justify-center">
                                <img src={assets.dichVu3} alt="" className="w-[60px] h-[60px]" />
                            </div>
                            <h1 className="text-[22px] font-semibold uppercase">Chất lượng</h1>
                            <p className="text-lg text-center">
                                Chỉ phân phối nông sản được chứng nhận uy tín: Demeter, EU Organic, USDA, AIAB, Vegan.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GioiThieu;
