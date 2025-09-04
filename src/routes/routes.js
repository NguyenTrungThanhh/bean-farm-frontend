import { lazy } from 'react';
import config from '@/configs';

// Lazy load các trang
const Home = lazy(() => import('@/pages/Home'));
const GioiThieu = lazy(() => import('@/pages/GioiThieu'));
const SanPham = lazy(() => import('@/pages/SanPham'));
const CauHoiThuongGap = lazy(() => import('@/pages/CauHoiThuongGap'));
const TinTuc = lazy(() => import('@/pages/TinTuc'));
const LienHe = lazy(() => import('@/pages/LienHe'));
const MuaHangNhanh = lazy(() => import('@/pages/MuaHangNhanh'));

const Search = lazy(() => import('@/pages/Search'));
const HeThong = lazy(() => import('@/pages/HeThong'));
const SoSanhSanPham = lazy(() => import('@/pages/SoSanhSanPham'));
const SanPhamYeuThich = lazy(() => import('@/pages/SanPhamYeuThich'));
const GioHang = lazy(() => import('@/pages/GioHang'));

const Account = lazy(() => import('@/pages/Account'));
const Login = lazy(() => import('@/pages/Login'));
const Register = lazy(() => import('@/pages/Register'));
const VerifyEmail = lazy(() => import('@/pages/VerifyEmail'));

const ChinhSachThanhVien = lazy(() => import('@/pages/ChinhSachThanhVien'));
const ChinhSachThanhToan = lazy(() => import('@/pages/ChinhSachThanhToan'));
const ChinhSachDoiSanPham = lazy(() => import('@/pages/ChinhSachDoiSanPham'));
const ChinhSachBaoMat = lazy(() => import('@/pages/ChinhSachBaoMat'));
const ChinhSachCongTacVien = lazy(() => import('@/pages/ChinhSachCongTacVien'));
const ChinhSachBaoHanh = lazy(() => import('@/pages/ChinhSachBaoHanh'));

const HuongDanMuaHang = lazy(() => import('@/pages/HuongDanMuaHang'));
const HuongDanDoiTra = lazy(() => import('@/pages/HuongDanDoiTra'));
const HuongDanThanhToan = lazy(() => import('@/pages/HuongDanThanhToan'));
const ChuongTrinhCongTacVien = lazy(() => import('@/pages/ChuongTrinhCongTacVien'));

// Lazy load Admin pages

// Lazy load Display pages
const Admin = lazy(() => import('@/pages/Admin'));
const AddTinTuc = lazy(() => import('@/pages/AddTinTuc'));
const ListTinTuc = lazy(() => import('@/pages/ListTinTuc'));

// Admin Layout
import AdminLayout from '@/layouts/AdminLayout';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.GioiThieu, component: GioiThieu },
    { path: config.routes.SanPham, component: SanPham },
    { path: config.routes.CauHoiThuongGap, component: CauHoiThuongGap },
    { path: config.routes.TinTuc, component: TinTuc },
    { path: config.routes.LienHe, component: LienHe },
    { path: config.routes.MuaHangNhanh, component: MuaHangNhanh },

    { path: config.routes.Search, component: Search },
    { path: config.routes.HeThong, component: HeThong },
    { path: config.routes.SoSanhSanPham, component: SoSanhSanPham },
    { path: config.routes.SanPhamYeuThich, component: SanPhamYeuThich },
    { path: config.routes.GioHang, component: GioHang },

    { path: config.routes.Account, component: Account },
    { path: config.routes.Login, component: Login },
    { path: config.routes.Register, component: Register },
    { path: config.routes.VerifyEmail, component: VerifyEmail },

    { path: config.routes.ChinhSachThanhVien, component: ChinhSachThanhVien },
    { path: config.routes.ChinhSachThanhToan, component: ChinhSachThanhToan },
    { path: config.routes.ChinhSachDoiSanPham, component: ChinhSachDoiSanPham },
    { path: config.routes.ChinhSachBaoMat, component: ChinhSachBaoMat },
    { path: config.routes.ChinhSachCongTacVien, component: ChinhSachCongTacVien },
    { path: config.routes.ChinhSachBaoHanh, component: ChinhSachBaoHanh },

    { path: config.routes.HuongDanMuaHang, component: HuongDanMuaHang },
    { path: config.routes.HuongDanDoiTra, component: HuongDanDoiTra },
    { path: config.routes.HuongDanThanhToan, component: HuongDanThanhToan },
    { path: config.routes.ChuongTrinhCongTacVien, component: ChuongTrinhCongTacVien },

    // Admin Pages
    { path: config.routes.admin, component: Admin, layout: AdminLayout },
    { path: config.routes.addTinTuc, component: AddTinTuc, layout: AdminLayout },
    { path: config.routes.listTinTuc, component: ListTinTuc, layout: AdminLayout },

    // Display Pages
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
