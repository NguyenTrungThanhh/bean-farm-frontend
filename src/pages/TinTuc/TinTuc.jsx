import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faChevronLeft, faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import config from '@/configs';
import { news } from '@/assets/assets';
import TinTucItem from '@/components/TinTucItem';

function TinTuc() {
    useEffect(() => {
        document.title = 'Tin tức';
    });

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = news.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(news.length / itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

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
                            {currentItems.map((item, index) => (
                                <TinTucItem
                                    key={index}
                                    title={item.title}
                                    slug={item.slug}
                                    desc={item.desc}
                                    date={item.date}
                                    image={item.image}
                                />
                            ))}
                        </div>
                        <div className="flex justify-center items-center mt-6">
                            {currentPage > 1 && (
                                <button
                                    onClick={prevPage}
                                    className="bg-white text-primary-green w-10 h-9 rounded-lg border hover:bg-primary-green hover:text-white duration-500"
                                >
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </button>
                            )}

                            <div className="flex gap-2 mx-2">
                                {pageNumbers.map((number) => (
                                    <button
                                        key={number}
                                        onClick={() => setCurrentPage(number)}
                                        className={`w-10 h-9 rounded-lg hover:bg-primary-green font-medium hover:text-white duration-500 ${
                                            currentPage === number
                                                ? 'bg-primary-green border border-transparent text-white'
                                                : 'bg-white border border-[#e5e5e5]'
                                        }`}
                                    >
                                        {number}
                                    </button>
                                ))}
                            </div>

                            {currentPage < totalPages && (
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
                            <div>
                                <h1 className="px-3 py-3 bg-primary-green text-white text-sm font-bold uppercase rounded-t-md">
                                    Bài viết mới
                                </h1>
                                <div className="flex flex-col gap-4 p-3">
                                    {news.slice(0, 5).map((item, index) => (
                                        <div className="flex gap-2" key={index}>
                                            <div>
                                                <img src={item.image} alt="" className="w-[100px] h-[63px]" />
                                            </div>
                                            <div className="flex-1">
                                                <h1 className="text-sm font-medium line-clamp-2 hover:text-primary-green duration-300">
                                                    {item.title}
                                                </h1>
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
