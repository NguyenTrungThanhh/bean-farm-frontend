import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBox, faUsers, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from '@/api/axiosConfig';
import { toast } from 'react-toastify';
import DashboardCard from '@/components/DashboardCard';

function Dashboard() {
    const [stats, setStats] = useState({
        orders: 0,
        products: 0,
        news: 0,
        users: 0,
    });
    const [chartData, setChartData] = useState([]);
    const [latestOrders, setLatestOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = 'Trang quản trị - Dashboard';
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            const res = await axios.get('/api/v1/admin/Dashboard');
            if (res.data.success) {
                const { orders, products, news, users } = res.data.data;
                setStats({ orders, products, news, users });

                // ✅ Tạo dữ liệu cho biểu đồ (hiển thị 4 cột)
                const chart = [
                    { name: 'Đơn hàng', value: orders },
                    { name: 'Sản phẩm', value: products },
                    { name: 'Tin tức', value: news },
                    { name: 'Người dùng', value: users },
                ];
                setChartData(chart);

                // Nếu có đơn hàng mới nhất thì backend có thể thêm sau
                setLatestOrders([]);
            }
        } catch (error) {
            toast.error('Không thể tải dữ liệu Dashboard');
            console.error('Lỗi Dashboard:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <p className="p-6 text-gray-500">Đang tải dữ liệu...</p>;

    return (
        <div className="p-6 space-y-8">
            {/* Tiêu đề */}
            <h1 className="text-2xl font-bold text-gray-800">Tổng quan</h1>

            {/* Thống kê nhanh */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <DashboardCard icon={faShoppingCart} color="text-blue-500" title="Đơn hàng" value={stats.orders} />
                <DashboardCard icon={faBox} color="text-green-500" title="Sản phẩm" value={stats.products} />
                <DashboardCard icon={faNewspaper} color="text-orange-500" title="Tin tức" value={stats.news} />
                <DashboardCard icon={faUsers} color="text-purple-500" title="Người dùng" value={stats.users} />
            </div>

            {/* Biểu đồ */}
            <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-lg font-bold mb-4">Thống kê tổng số</h2>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="name" tick={{ fill: '#6b7280', fontSize: 14 }} />
                        <YAxis tick={{ fill: '#6b7280', fontSize: 14 }} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#f9fafb',
                                borderRadius: 8,
                                border: 'none',
                                fontSize: 14,
                            }}
                        />
                        <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} name="Số lượng" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Đơn hàng mới nhất */}
            <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-lg font-bold mb-4">Đơn hàng mới nhất</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left border-collapse">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="px-4 py-2">Mã</th>
                                <th className="px-4 py-2">Khách hàng</th>
                                <th className="px-4 py-2">Tổng tiền</th>
                                <th className="px-4 py-2">Trạng thái</th>
                            </tr>
                        </thead>
                        <tbody>
                            {latestOrders.length > 0 ? (
                                latestOrders.map((order) => (
                                    <tr key={order._id} className="border-t">
                                        <td className="px-4 py-2 font-medium">{order.code || order._id.slice(-5)}</td>
                                        <td className="px-4 py-2">{order.customerName || 'Ẩn danh'}</td>
                                        <td className="px-4 py-2">
                                            {order.total ? order.total.toLocaleString() + '₫' : '--'}
                                        </td>
                                        <td className="px-4 py-2">
                                            <span className="px-2 py-1 rounded-md text-xs bg-gray-100">
                                                {order.status || 'Chưa rõ'}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="text-center py-4 text-gray-500">
                                        Không có đơn hàng gần đây
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
