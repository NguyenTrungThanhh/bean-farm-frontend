import SwiperSlider from '@/components/SwiperSlider';
import DanhMucNoiBat from '@/components/DanhMucNoiBat';
import SanPhamBanChay from '@/components/SanPhamBanChay';
import BannerIntroduce from '@/components/BannerGioiThieu';
import KhuyenMaiDacBiet from '@/components/KhuyenMaiDacBiet';
import SanPhamNoiBat from '@/components/SanPhamNoiBat';
import SanPhamMoi from '@/components/SanPhamMoi';
import ThitNhapKhau from '@/components/ThitNhapKhau';
import HaiSanTuoi from '@/components/HaiSanTuoi';
import VideoHuongDan from '@/components/VideoHuongDan';
import CacLoaiSanPham from '@/components/CacLoaiSanPham';
import TinTucMoiNhat from '@/components/TinTucMoiNhat';
import DoiTac from '@/components/DoiTac';
import { useEffect } from 'react';

function Home() {
    useEffect(() => {
        document.title = 'Bean Farm';
    });

    return (
        <div className="w-[83%] mx-auto">
            <SwiperSlider />
            <DanhMucNoiBat />
            <SanPhamBanChay />
            <BannerIntroduce />
            <KhuyenMaiDacBiet />
            <SanPhamNoiBat />
            <SanPhamMoi />
            <ThitNhapKhau />
            <HaiSanTuoi />
            <VideoHuongDan />
            <CacLoaiSanPham />
            <TinTucMoiNhat />
            <DoiTac />
        </div>
    );
}

export default Home;
