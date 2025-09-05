import { assets } from '@/assets/assets';
import config from '@/configs';
import { Link } from 'react-router-dom';

function TopHeader() {
    const isLogin = localStorage.getItem('authToken');

    return (
        <div className="h-10 bg-primary-green flex items-center">
            <div className="w-[83%] mx-auto text-sm text-white flex items-center justify-between">
                <div>
                    <h1>Chào mừng bạn đến với Bean Farm!</h1>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-1">
                        <img src={assets.iconTaiKhoan} alt="" className="w-5 h-5 invert" />
                        <Link to={`${isLogin ? config.routes.Account : config.routes.Login}`}>
                            <p className="hover:text-primary-yellow cursor-pointer">Tài khoản</p>
                        </Link>
                    </div>
                    <div>
                        <a href="tel:19006750">
                            Hotline: <b className="text-primary-yellow hover:text-white">1900 6750</b>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopHeader;
