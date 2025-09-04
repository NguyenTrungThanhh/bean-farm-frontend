import { useNavigate } from 'react-router-dom';

function HeaderAdmin() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isAdmin');
        navigate('/');
    };

    return (
        <>
            {localStorage.getItem('isAdmin') ? (
                <div className="w-full border-b-2 border-gray-200 px-5 sm:px-12 py-4 bg-primary-brown flex justify-between items-center shadow-md">
                    <h1 className="text-2xl font-bold text-primary-gold">Admin Panel</h1>
                    <button
                        className="font-bold px-3 py-2 bg-primary-green text-white rounded-lg hover:opacity-80"
                        onClick={handleLogout}
                    >
                        Đăng xuất
                    </button>
                </div>
            ) : null}
        </>
    );
}

export default HeaderAdmin;
