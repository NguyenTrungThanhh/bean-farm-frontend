import axios from '@/api/axiosConfig';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faChevronLeft, faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import config from '@/configs';
import TinTucItem from '@/components/TinTucItem';

function TinTuc() {
    const [tinTucData, setTinTucData] = useState([]);
    const [tinTucMoiData, setTinTucMoiData] = useState([]);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 5,
        totalPages: 1,
        total: 0,
    });

    useEffect(() => {
        document.title = 'Tin tức - Bean Farm';
    }, []);

    const fetchTinTuc = async (page = 1, category = 'Tin tức') => {
        try {
            const query = new URLSearchParams({
                page,
                limit: pagination.limit,
                category,
            });

            const res = await axios.get(`/api/v1/client/TinTuc/pagination?${query.toString()}`);

            if (res.data.success) {
                setTinTucData(res.data.news);
                setPagination(res.data.pagination);
            }
        } catch (error) {
            console.log('Lỗi khi fetch tin tức:', error);
        }
    };

    const fetchTinTucMoi = async (page = 1, category = 'Tin tức') => {
        try {
            const query = new URLSearchParams({
                page,
                limit: 5,
                category,
            });

            const res = await axios.get(`/api/v1/client/TinTuc/pagination?${query.toString()}`);

            if (res.data.success) {
                setTinTucMoiData(res.data.news);
            }
        } catch (error) {
            console.log('Lỗi khi fetch tin tức:', error);
        }
    };

    useEffect(() => {
        fetchTinTuc(1);
        fetchTinTucMoi(1);
    }, []);

    const nextPage = () => {
        if (pagination.page < pagination.totalPages) {
            fetchTinTuc(pagination.page + 1);
        }
    };

    const prevPage = () => {
        if (pagination.page > 1) {
            fetchTinTuc(pagination.page - 1);
        }
    };

    return (
        <div>
            <div className="bg-[#f5f5f5] w-full py-4 mb-5">
                <div className="w-[83%] mx-auto">
                    <div className="flex items-center gap-3">
                        <Link to={config.routes.home}>
                            <h1 className="text-sm hover:text-primary-yellow">Trang chủ</h1>
                        </Link>
                        <FontAwesomeIcon icon={faAngleRight} size="xs" />
                        <h1 className="text-sm text-primary-yellow">Tin tức</h1>
                    </div>
                </div>
            </div>
            <div className="w-[83%] mx-auto">
                <div className="flex gap-4 items-start">
                    <div className="w-[75%]">
                        <div className="flex flex-col gap-8">
                            {tinTucData.map((item, index) => (
                                <TinTucItem
                                    key={index}
                                    name={item.name}
                                    slug={item.slug}
                                    content={item.content}
                                    date={item.date}
                                    image={item.image}
                                />
                            ))}
                        </div>
                        <div className="flex justify-center items-center mt-6">
                            {pagination.page > 1 && (
                                <button
                                    onClick={prevPage}
                                    className="bg-white text-primary-green w-10 h-9 rounded-lg border hover:bg-primary-green hover:text-white duration-500"
                                >
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </button>
                            )}

                            <div className="flex gap-2 mx-2">
                                {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((number) => (
                                    <button
                                        key={number}
                                        onClick={() => fetchTinTuc(number)}
                                        className={`w-10 h-9 rounded-lg hover:bg-primary-green font-medium hover:text-white duration-500 ${
                                            pagination.page === number
                                                ? 'bg-primary-green border border-transparent text-white'
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
                                    className="bg-white text-primary-green w-10 h-9 rounded-lg border hover:bg-primary-green hover:text-white duration-500"
                                >
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="w-[25%] sticky top-2">
                        <div className="flex flex-col gap-4">
                            <div className="w-full max-w-xs flex items-center border border-primary-green rounded-md overflow-hidden">
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm bài viết..."
                                    className="flex-1 px-3 h-10 text-sm focus:outline-none"
                                />
                                <button className="w-10 h-[38px] bg-primary-green text-white flex items-center justify-center rounded-md mr-[1px] hover:bg-primary-yellow duration-500">
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </div>
                            <div className="border border-[#eee] rounded-md">
                                <h1 className="px-3 py-3 bg-primary-green text-white text-sm font-bold uppercase rounded-t-md">
                                    Bài viết mới
                                </h1>
                                <div className="flex flex-col gap-4 p-3 bỏ">
                                    {tinTucMoiData.map((item, index) => (
                                        <div className="flex gap-2" key={index}>
                                            <Link to={config.routes.TinTuc + `/${item.slug}`}>
                                                <div>
                                                    <img src={item.image} alt="" className="w-[100px] h-[63px]" />
                                                </div>
                                            </Link>
                                            <div className="flex-1">
                                                <Link to={config.routes.TinTuc + `/${item.slug}`}>
                                                    <h1 className="text-sm font-medium line-clamp-2 hover:text-primary-green duration-300">
                                                        {item.name}
                                                    </h1>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TinTuc;
