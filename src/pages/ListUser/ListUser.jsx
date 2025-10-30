import axios from '@/api/axiosConfig';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

function ListUser() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10,
        total: 0,
        totalPages: 0,
    });

    useEffect(() => {
        document.title = 'Quản lý người dùng - KKC Logistics';
        fetchUser(pagination.page);
    }, []);

    const fetchUser = async (page = 1) => {
        setLoading(true);

        const query = new URLSearchParams({
            page,
            limit: pagination.limit,
        });

        try {
            const res = await axios.get(`/api/v1/admin/user/pagination?${query.toString()}`);

            if (res.data.success) {
                setData(res.data.users);
                setPagination(res.data.pagination);
            }
        } catch (error) {
            toast.error('Không thể tải danh sách người dùng');
        } finally {
            setLoading(false);
        }
    };

    const deleteUser = async (id) => {
        try {
            const res = await axios.delete(`/api/v1/admin/user/delete/${id}`);
            if (res.data.success) {
                toast.success('Xóa người dùng thành công');
                fetchUser(pagination.page);
            }
        } catch (error) {
            toast.error('Lỗi khi xóa người dùng');
        }
    };

    const nextPage = () => {
        if (pagination.page < pagination.totalPages) {
            fetchUser(pagination.page + 1);
        }
    };

    const prevPage = () => {
        if (pagination.page > 1) {
            fetchUser(pagination.page - 1);
        }
    };

    return (
        <>
            {localStorage.getItem('token') && localStorage.getItem('role') === 'admin' ? (
                <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Quản lý người dùng</h2>

                    {loading ? (
                        <p className="text-gray-500">Đang tải dữ liệu...</p>
                    ) : data.length === 0 ? (
                        <p className="text-gray-500">Không có dữ liệu</p>
                    ) : (
                        <>
                            <div className="overflow-x-auto rounded-lg shadow-md">
                                <table className="min-w-full border border-gray-200 text-sm">
                                    <thead className="bg-gray-50 sticky top-0 z-10">
                                        <tr className="text-gray-700">
                                            <th className="px-4 py-3 border text-center">Tên</th>
                                            <th className="px-4 py-3 border">Email</th>
                                            <th className="px-4 py-3 border">Role</th>
                                            <th className="px-4 py-3 border text-center">Trạng thái</th>
                                            <th className="px-4 py-3 border text-center">Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item) => (
                                            <tr
                                                key={item._id}
                                                className="hover:bg-gray-50 transition-colors duration-150"
                                            >
                                                {/* ✅ Thêm border để đều với các cột khác */}
                                                <td className="px-4 py-2 border text-center font-semibold">
                                                    {item.name}
                                                </td>
                                                <td className="px-4 py-2 border text-center font-semibold">
                                                    {item.email}
                                                </td>

                                                <td className="px-4 py-2 border text-center font-semibold">
                                                    {item.role === 'admin' ? 'Admin' : 'Khách hàng'}
                                                </td>
                                                <td className="px-4 py-2 border text-center">
                                                    <span
                                                        className={`block w-28 py-1 mx-auto rounded-full text-xs font-medium ${
                                                            item.isVerified === true
                                                                ? 'bg-green-100 text-green-700'
                                                                : 'bg-red-100 text-red-700'
                                                        }`}
                                                    >
                                                        {item.isVerified === true ? 'Đã xác thực' : 'Chưa xác thực'}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    <div className="flex items-center justify-center gap-3">
                                                        <button
                                                            onClick={() => deleteUser(item._id)}
                                                            className="text-red-600 hover:text-red-800 text-sm font-medium"
                                                        >
                                                            Xóa
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            <div className="flex flex-wrap justify-center items-center gap-2 mt-6">
                                {pagination.page > 1 && (
                                    <button
                                        onClick={prevPage}
                                        className="bg-white text-primary-brown w-10 h-9 rounded-lg border hover:bg-primary-brown hover:text-white duration-500"
                                    >
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    </button>
                                )}

                                <div className="flex gap-2 mx-2">
                                    {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((number) => (
                                        <button
                                            key={number}
                                            onClick={() => fetchUser(number)}
                                            className={`w-10 h-9 rounded-lg hover:bg-primary-brown font-medium hover:text-white duration-500 ${
                                                pagination.page === number
                                                    ? 'bg-primary-brown border border-transparent text-white'
                                                    : 'bg-white border border-[#e5e5e5]'
                                            }`}
                                        >
                                            {number}
                                        </button>
                                    ))}
                                </div>

                                {pagination.page < pagination.totalPages && (
                                    <button
                                        onClick={nextPage}
                                        className="bg-white text-primary-brown w-10 h-9 rounded-lg border hover:bg-primary-brown hover:text-white duration-500"
                                    >
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </button>
                                )}
                            </div>
                        </>
                    )}
                </div>
            ) : null}
        </>
    );
}

export default ListUser;
