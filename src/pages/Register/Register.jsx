import axios from '@/api/axiosConfig';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { assets } from '@/assets/assets';
import config from '@/configs';
import { faAngleRight, faCircleInfo, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Register() {
    const [verifyMessage, setVerifyMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.title = 'Đăng ký tài khoản';
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Vui lòng nhập tên người dùng'),
            email: Yup.string()
                .email('Email này không hợp lệ. Hãy đảm bảo rằng email được nhập dưới dạng example@email.com.')
                .required('Vui lòng nhập email'),
            password: Yup.string().min(8, 'Mật khẩu phải có ít nhất 8 ký tự').required('Vui lòng nhập mật khẩu'),
        }),
        onSubmit: async (values) => {
            setLoading(true);

            try {
                const response = await axios.post('/api/v1/client/user/register', values);
                if (response.data.success) {
                    toast.success(response.data.message);
                    setVerifyMessage(
                        `Chúng tôi đã gửi lời mời kích hoạt tài khoản qua email ${formik.values.email}. Vui lòng kiểm tra email của bạn.`,
                    );

                    formik.resetForm();
                }
            } catch (error) {
                console.error('Lỗi khi gửi dữ liệu lên server:', error);
                toast.error(error.response?.data?.message || 'Có lỗi xảy ra');
            }

            setLoading(false);
        },
    });

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return loading ? (
        <div className="flex flex-col justify-center items-center min-h-[80vh] bg-white">
            <div className="w-14 h-14 border-4 border-primary-green border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-primary-green font-semibold animate-pulse">Đang xử lý đăng ký...</p>
        </div>
    ) : (
        <>
            <div>
                <div className="bg-[#f5f5f5] w-full py-4 mb-5">
                    <div className="w-[83%] mx-auto">
                        <div className="flex items-center gap-3">
                            <Link to={config.routes.home}>
                                <h1 className="text-sm hover:text-primary-yellow">Trang chủ</h1>
                            </Link>
                            <FontAwesomeIcon icon={faAngleRight} size="xs" />
                            <h1 className="text-sm text-primary-yellow">Đăng ký tài khoản</h1>
                        </div>
                    </div>
                </div>
                <div className="w-[83%] mx-auto mb-5">
                    <div className="w-[426px] mx-auto px-6 py-3">
                        <div className="flex items-center justify-around mb-4">
                            <Link to={config.routes.Login} className="w-full">
                                <div className="py-3 hover:text-primary-green border-b duration-300">
                                    <h1 className="text-[15px] text-center uppercase">Đăng nhập</h1>
                                </div>
                            </Link>
                            <div className="text-center w-full py-3 border-b border-primary-green cursor-pointer">
                                <h1 className="text-[15px] uppercase text-primary-green">Đăng ký</h1>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-[26px] uppercase text-center">Đăng ký</h1>
                            {verifyMessage && (
                                <p className="text-center text-sm font-semibold text-red-500 mt-2">{verifyMessage}</p>
                            )}
                            <div className="mt-2">
                                <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
                                    {/* Họ và tên */}
                                    <div>
                                        <div
                                            className={`flex items-center border-[1px] border-[#e6e6e6] rounded-md overflow-hidden transition-all duration-200 ${
                                                formik.touched.name && formik.errors.name
                                                    ? 'border-red-500 hover:border-red-500'
                                                    : 'border-gray-400 hover:border-primary focus-within:border-primary'
                                            }`}
                                        >
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                className="w-full px-3 py-2 focus:outline-none  transition-colors duration-300"
                                                placeholder="Nguyễn Văn A"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.name}
                                            />
                                        </div>
                                        <div
                                            className={`text-red-500 text-[12px] font-semibold mt-1 transition-all duration-300 ease-in-out ${
                                                formik.touched.name && formik.errors.name
                                                    ? 'opacity-100 max-h-[100px]'
                                                    : 'opacity-0 max-h-0'
                                            } overflow-hidden`}
                                        >
                                            {formik.touched.name && formik.errors.name && (
                                                <div className="flex items-center">
                                                    <FontAwesomeIcon icon={faCircleInfo} className="text-base mr-2" />
                                                    <span>{formik.errors.name}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <div
                                            className={`flex items-center border-[1px] border-[#e6e6e6] rounded-md overflow-hidden transition-all duration-200 ${
                                                formik.touched.email && formik.errors.email
                                                    ? 'border-red-500 hover:border-red-500'
                                                    : 'border-gray-400 hover:border-primary focus-within:border-primary-green'
                                            }`}
                                        >
                                            <input
                                                id="email"
                                                name="email"
                                                type="text"
                                                className="w-full px-3 py-2 rounded-md focus:outline-none focus:border-primary-green transition-colors duration-300"
                                                placeholder="example@gmail.com"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.email}
                                            />
                                        </div>
                                        <div
                                            className={`text-red-500 text-[12px] font-semibold mt-1 transition-all duration-300 ease-in-out ${
                                                formik.touched.email && formik.errors.email
                                                    ? 'opacity-100 max-h-[100px]'
                                                    : 'opacity-0 max-h-0'
                                            } overflow-hidden`}
                                        >
                                            {formik.touched.email && formik.errors.email && (
                                                <div className="flex items-center">
                                                    <FontAwesomeIcon icon={faCircleInfo} className="text-base mr-2" />
                                                    <span>{formik.errors.email}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Mật khẩu */}
                                    <div>
                                        <div
                                            className={`flex items-center border-[1px] border-[#e6e6e6] rounded-md overflow-hidden transition-all duration-200 ${
                                                formik.touched.password && formik.errors.password
                                                    ? 'border-red-500 hover:border-red-500'
                                                    : 'border-gray-400 hover:border-primary focus-within:border-primary-green'
                                            }`}
                                        >
                                            <input
                                                id="password"
                                                name="password"
                                                type={showPassword ? 'text' : 'password'}
                                                className="w-full px-3 py-2 rounded-md focus:outline-none focus:border-primary-green transition-colors duration-300"
                                                placeholder="••••••••"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.password}
                                            />
                                            <FontAwesomeIcon
                                                className="text-gray-500 mr-4 hover:scale-105 hover:text-black cursor-pointer"
                                                icon={showPassword ? faEye : faEyeSlash}
                                                onClick={handleTogglePassword}
                                            />
                                        </div>
                                        <div
                                            className={`text-red-500 text-[12px] font-semibold mt-1 transition-all duration-300 ease-in-out ${
                                                formik.touched.password && formik.errors.password
                                                    ? 'opacity-100 max-h-[100px]'
                                                    : 'opacity-0 max-h-0'
                                            } overflow-hidden`}
                                        >
                                            {formik.touched.password && formik.errors.password && (
                                                <div className="flex items-center">
                                                    <FontAwesomeIcon icon={faCircleInfo} className="text-base mr-2" />
                                                    <span>{formik.errors.password}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-primary-green text-white py-[10px] rounded-md hover:bg-primary-yellow hover:text-black duration-300"
                                    >
                                        Đăng ký
                                    </button>
                                </form>
                                <div className="mt-3">
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
        </>
    );
}

export default Register;
