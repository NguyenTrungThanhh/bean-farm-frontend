import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from '@/api/axiosConfig';
import { toast } from 'react-toastify';

function VerifyEmail() {
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        const token = searchParams.get('token');

        if (!token) {
            toast.error('Không tìm thấy token xác thực');
            setSuccess(false);
            setLoading(false);
            return;
        }

        axios
            .get(`/api/v1/client/user/verify-email?token=${token}`)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message || 'Xác thực email thành công 🎉');
                    setSuccess(true);
                } else {
                    toast.error(res.data.message || 'Xác thực thất bại');
                    setSuccess(false);
                }
            })
            .catch((err) => {
                toast.error(err.response?.data?.message || 'Có lỗi xảy ra khi xác thực');
                setSuccess(false);
            })
            .finally(() => setLoading(false));
    }, [searchParams]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[70vh]">
                <h1 className="text-lg">Đang xác thực email...</h1>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center h-[70vh]">
            {success ? (
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-green-600 mb-2">✅ Xác nhận email thành công!</h1>
                    <p>Bạn có thể đăng nhập ngay bây giờ.</p>
                </div>
            ) : (
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-red-600 mb-2">❌ Xác nhận thất bại</h1>
                    <p>Vui lòng thử lại hoặc đăng ký lại tài khoản.</p>
                </div>
            )}
        </div>
    );
}

export default VerifyEmail;
