import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

function ListTinTuc() {
    const [data, setData] = useState([]);

    useEffect(() => {
        document.title = 'Danh sách tin tức HKA POST & GO';
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/admin/TinTuc`);
            if (response.data.success) {
                setData(response.data.news);
            }
        } catch (error) {
            toast.error('Error fetching playlists');
        }
    };

    const deleteProduct = async (id) => {
        try {
            const response = await axios.delete(`${import.meta.env.VITE_API_URL}/api/v1/admin/TinTuc/delete/${id}`);
            if (response.data.success) {
                toast.success('Xóa sản phẩm thành công');
                fetchProducts();
            }
        } catch (error) {
            toast.error('Error deleting product');
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            {localStorage.getItem('isAdmin') ? (
                <div className="pt-8 pl-5 sm:pt-12 sm:pl-12">
                    <p>Danh sách tin tức</p>
                    <br />
                    <div>
                        <div className="sm:grid hidden grid-cols-5 items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
                            <b>Ảnh</b>
                            <b className="m-auto">Tiêu đề</b>
                            <b className="m-auto">Danh mục</b>
                            <b className="m-auto">Thời gian</b>
                            <b className="m-auto">Action</b>
                        </div>
                        {data.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-5 items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5"
                                >
                                    <img className="w-12 h-9" src={item.image} alt="" />
                                    <p className="m-auto line-clamp-2">{item.name}</p>
                                    <p className="m-auto line-clamp-2">{item.category}</p>
                                    <p className="m-auto line-clamp-2">{item.date}</p>
                                    <p onClick={() => deleteProduct(item._id)} className="m-auto cursor-pointer">
                                        x
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default ListTinTuc;
