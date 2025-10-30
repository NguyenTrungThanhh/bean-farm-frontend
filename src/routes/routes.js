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

const Register = lazy(() => import('@/pages/Register'));
const VerifyEmail = lazy(() => import('@/pages/VerifyEmail'));
const Login = lazy(() => import('@/pages/Login'));
const Account = lazy(() => import('@/pages/Account'));
const DonHangCuaBan = lazy(() => import('@/pages/DonHangCuaBan'));
const DoiMatKhau = lazy(() => import('@/pages/DoiMatKhau'));

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
const Admin = lazy(() => import('@/pages/Admin'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const AddTinTuc = lazy(() => import('@/pages/AddTinTuc'));
const ListTinTuc = lazy(() => import('@/pages/ListTinTuc'));
const ListUser = lazy(() => import('@/pages/ListUser'));

// Lazy load Display pages
const DisplayProduct = lazy(() => import('@/pages/DisplayProduct'));
const DisplayTinTuc = lazy(() => import('@/pages/DisplayTinTuc'));

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

    { path: config.routes.Register, component: Register },
    { path: config.routes.VerifyEmail, component: VerifyEmail },
    { path: config.routes.Login, component: Login },
    { path: config.routes.Account, component: Account },
    { path: config.routes.DonHangCuaBan, component: DonHangCuaBan },
    { path: config.routes.DoiMatKhau, component: DoiMatKhau },

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
    { path: config.routes.Admin, component: Admin, layout: AdminLayout },
    { path: config.routes.Dashboard, component: Dashboard, layout: AdminLayout },
    { path: config.routes.AddTinTuc, component: AddTinTuc, layout: AdminLayout },
    { path: config.routes.ListTinTuc, component: ListTinTuc, layout: AdminLayout },
    { path: config.routes.ListUser, component: ListUser, layout: AdminLayout },

    // Display Pages
    { path: config.routes.SanPham + '/:slug', component: DisplayProduct },
    { path: config.routes.TinTuc + '/:slug', component: DisplayTinTuc },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
