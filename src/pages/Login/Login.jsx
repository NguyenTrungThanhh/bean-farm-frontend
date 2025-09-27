import axios from '@/api/axiosConfig';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import config from '@/configs';
import { assets } from '@/assets/assets';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailForgotPassword, setEmailForgotPassword] = useState('');
    const [isForgotPassword, setIsForgotPassword] = useState(false);

    useEffect(() => {
        document.title = 'Đăng nhập tài khoản';
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const user = {
                email,
                password,
            };
            const response = await axios.post('/api/v1/client/user/login', user);
            console.log(response.data);

            if (response.data.success) {
                const token = response.data.token;

                if (token) {
                    localStorage.setItem('authToken', token);
                    localStorage.setItem('username', response.data.user.name);
                    localStorage.setItem('email', response.data.user.email);

                    toast.success('Đăng nhập thành công');
                    setTimeout(() => {
                        window.location.href = '/';
                    }, 3000);
                } else {
                    toast.error('Lỗi: Không tìm thấy token!');
                }
            } else {
                toast.error(response.data.error);
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                toast.error(
                    <div>
                        <h4 className="text-black font-bold">Đăng nhập thất bại</h4>
                        <p className="text-black text-[14px]">{error.response.data.error}</p>
                    </div>,
                    {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    },
                );
            } else {
                toast.error('Có lỗi xảy ra. Vui lòng thử lại sau.');
            }
            console.log(error);
        }
    };

    const handleForgotPassword = async (e) => e.preventDefault();

    return (
        <div>
            <div className="bg-[#f5f5f5] w-full py-4 mb-5">
                <div className="w-[83%] mx-auto">
                    <div className="flex items-center gap-3">
                        <Link to={config.routes.home}>
                            <h1 className="text-sm hover:text-primary-yellow">Trang chủ</h1>
                        </Link>
                        <FontAwesomeIcon icon={faAngleRight} size="xs" />
                        <h1 className="text-sm text-primary-yellow">Đăng nhập tài khoản</h1>
                    </div>
                </div>
            </div>
            <div className="w-[83%] mx-auto mb-5">
                <div className="w-[426px] mx-auto px-6 py-3">
                    <div className="flex items-center justify-around mb-4">
                        <div className="text-center w-full py-3 border-b border-primary-green cursor-pointer">
                            <h1 className="text-[15px] uppercase text-primary-green">Đăng nhập</h1>
                        </div>
                        <Link to={config.routes.Register} className="w-full">
                            <div className="py-3 hover:text-primary-green border-b duration-300">
                                <h1 className="text-[15px] text-center uppercase">Đăng ký</h1>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <h1 className="text-[26px] uppercase text-center">Đăng nhập</h1>
                        <div className="mt-2">
                            <form onSubmit={handleLogin} className="flex flex-col gap-3">
                                <input
                                    value={email}
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-primary-green transition-colors duration-300"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <input
                                    value={password}
                                    type="text"
                                    name="password"
                                    id="password"
                                    placeholder="Mật khẩu"
                                    className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-primary-green transition-colors duration-300"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-primary-green text-white py-[10px] rounded-md hover:bg-primary-yellow hover:text-black duration-300"
                                >
                                    Đăng nhập
                                </button>
                            </form>
                            <div className="my-4 text-center">
                                <h1
                                    className="inline-block text-sm hover:text-primary-yellow cursor-pointer mb-4"
                                    onClick={() => setIsForgotPassword(!isForgotPassword)}
                                >
                                    Quên mật khẩu
                                </h1>

                                <div
                                    className={`transition-all duration-500 linear overflow-hidden ${
                                        isForgotPassword ? 'max-h-[150px] opacity-100 mt-3' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <form onSubmit={handleForgotPassword} className="flex flex-col gap-3">
                                        <input
                                            value={emailForgotPassword}
                                            type="text"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                            className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-primary-green transition-colors duration-300"
                                            onChange={(e) => setEmailForgotPassword(e.target.value)}
                                            required
                                        />
                                        <button
                                            type="submit"
                                            className="bg-primary-green text-white py-[10px] rounded-md hover:bg-primary-yellow hover:text-black duration-300"
                                        >
                                            Lấy lại mật khẩu
                                        </button>
                                    </form>
                                </div>
                            </div>

                            <div>
                                <h1 className="text-center text-sm mb-4">Hoặc đăng nhập bằng</h1>
                                <div className="flex items-center justify-center gap-2">
                                    <a href="https://www.facebook.com/privacy/consent/gdp/?params%5Bapp_id%5D=947410958642584&params%5Bfblfb%5D=false&params%5Bkid_directed_site%5D=false&params%5Blogger_id%5D=%22ae8a14f0-2a35-4dcc-bab2-b43d840b83c1%22&params%5Bnext%5D=%22read%22&params%5Bredirect_uri%5D=%22https%3A%5C%2F%5C%2Fstore.mysapo.net%5C%2Faccount%5C%2Ffacebook_account_callback%22&params%5Bresponse_type%5D=%22code%22&params%5Breturn_scopes%5D=false&params%5Bscope%5D=%5B%22email%22%5D&params%5Bstate%5D=%22%7B%5C%22redirect_url%5C%22%3A%5C%22https%3A%5C%2F%5C%2Fbean-farm.mysapo.net%5C%2Faccount%5C%2Flogin%3FReturnUrl%3D%5Cu00252Faccount%5C%22%7D%22&params%5Bsteps%5D=%7B%22read%22%3A%5B%22email%22%2C%22baseline%22%2C%22public_profile%22%5D%7D&params%5Btp%5D=%22unspecified%22&params%5Bcui_gk%5D=%22%5BPASS%5D%3A%22&params%5Bis_limited_login_shim%5D=false&source=gdp_delegated">
                                        <img src={assets.buttonLoginFacebook} alt="" className="w-[129px] h-9" />
                                    </a>
                                    <a href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=997675985899-pu3vhvc2rngfcuqgh5ddgt7mpibgrasr.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fstore.mysapo.net%2Faccount%2Fgoogle_account_callback&scope=email%20profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&access_type=online&state=%7B%22redirect_url%22%3A%22https%3A%2F%2Fbean-farm.mysapo.net%2Faccount%2Flogin%3FReturnUrl%3D%252Faccount%22%7D&response_type=code&service=lso&o2v=2&flowName=GeneralOAuthFlow">
                                        <img src={assets.buttonLoginGoogle} alt="" className="w-[129px] h-9" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
