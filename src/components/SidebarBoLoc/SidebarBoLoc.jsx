import { faPlus, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SidebarBoLoc({ danhMuc = [], mucGia = [], loai = [], thuongHieu = [] }) {
    const [openLevel1, setOpenLevel1] = useState({});
    const [openLevel2, setOpenLevel2] = useState({});
    const [selectedData, setSelectedData] = useState([]);

    const toggleLevel1 = (index) => {
        setOpenLevel1((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const toggleLevel2 = (index1, index2) => {
        const key = `${index1}-${index2}`;
        setOpenLevel2((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const handleCheckboxChange = (value) => {
        setSelectedData((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]));
    };

    const handleRemove = (value) => {
        const updated = selectedData.filter((v) => v !== value);
        setSelectedData(updated);
    };

    return (
        <>
            <div className="mb-6">
                <h1 className="bg-primary-green text-white font-bold text-sm uppercase py-3 px-3 rounded-t-md">
                    Danh mục sản phẩm
                </h1>
                <div className="p-[10px] bg-[#f7f8f9] rounded-md">
                    {danhMuc.map((item, index1) => (
                        <div key={index1} className="py-1">
                            <div
                                className="flex justify-between items-start cursor-pointer"
                                onClick={() => toggleLevel1(index1)}
                            >
                                <Link to={item.slug}>
                                    <span
                                        className={`text-sm duration-300 ${
                                            openLevel1[index1] ? 'text-primary-green' : 'text-[#282828]'
                                        }`}
                                    >
                                        {item.title}
                                    </span>
                                </Link>
                                {item.children && (
                                    <FontAwesomeIcon
                                        icon={openLevel1[index1] ? faMinus : faPlus}
                                        className="text-[#A4A9AE]"
                                        size="sm"
                                    />
                                )}
                            </div>

                            {item.children && openLevel1[index1] && (
                                <div className="ml-4 mt-1">
                                    {item.children.map((child, index2) => (
                                        <div key={index2} className="py-1">
                                            <div
                                                className="flex justify-between items-start cursor-pointer"
                                                onClick={() => toggleLevel2(index1, index2)}
                                            >
                                                <Link to={child.slug}>
                                                    <span
                                                        className={`text-sm duration-300 ${
                                                            openLevel2[`${index1}-${index2}`]
                                                                ? 'text-primary-green'
                                                                : 'text-[#282828]'
                                                        }`}
                                                    >
                                                        {child.title}
                                                    </span>
                                                </Link>
                                                {child.children && (
                                                    <FontAwesomeIcon
                                                        icon={openLevel2[`${index1}-${index2}`] ? faMinus : faPlus}
                                                        className="text-[#A4A9AE]"
                                                        size="sm"
                                                    />
                                                )}
                                            </div>

                                            {child.children && openLevel2[`${index1}-${index2}`] && (
                                                <ul className="ml-4 mt-1 text-sm text-[#282828]">
                                                    {child.children.map((itemCap3, index3) => (
                                                        <li key={index3} className="py-1">
                                                            <Link to={itemCap3.slug}>{itemCap3.title}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h1 className="bg-primary-green text-white font-bold text-sm uppercase py-3 px-3 rounded-t-md">
                    Bộ lọc sản phẩm
                </h1>
                <div className="border rounded-b-md">
                    <div className="p-[10px]">
                        {selectedData.length > 0 && (
                            <div className="mb-4">
                                <div className="flex justify-between items-center">
                                    <h1 className="text-lg font-bold text-green-700 mb-2">Bạn chọn</h1>
                                    <button
                                        className="text-[#666] text-sm hover:text-primary-yellow duration-300"
                                        onClick={() => setSelectedData([])}
                                    >
                                        Bỏ hết <FontAwesomeIcon icon={faXmark} className="mt-[3px]" />
                                    </button>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {selectedData.map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-primary-green text-white text-sm px-2 rounded flex items-center gap-1 hover:bg-primary-yellow text-white duration-300 cursor-pointer"
                                            onClick={() => handleRemove(item)}
                                        >
                                            <FontAwesomeIcon icon={faXmark} className="mt-[1px]" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        <div className="border-b-[1px] pb-4 mb-4">
                            <h2 className="font-bold uppercase mb-4">Chọn mức giá</h2>
                            <div className="h-44 overflow-hidden overflow-y-auto custom-scroll">
                                {mucGia.map((item, index) => {
                                    const checkboxId = `checkbox-mucgia-${index}`;
                                    const checked = selectedData.includes(item);

                                    return (
                                        <div
                                            key={index}
                                            className="mb-[10px] flex items-center gap-2 hover:text-primary-green"
                                        >
                                            <input
                                                id={checkboxId}
                                                type="checkbox"
                                                checked={checked}
                                                onChange={() => handleCheckboxChange(item)}
                                                className="w-[15px] h-[15px] accent-primary-green checked:bg-primary-green checked:border-primary-green cursor-pointer"
                                            />
                                            <label htmlFor={checkboxId} className="text-sm cursor-pointer">
                                                {item}
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="border-b-[1px] pb-4 mb-4">
                            <h2 className="font-bold uppercase mb-4">Loại</h2>
                            <div className="h-44 overflow-hidden overflow-y-auto custom-scroll">
                                {loai.map((item, index) => {
                                    const checkboxId = `loai-${index}`;
                                    const checked = selectedData.includes(item);

                                    return (
                                        <div
                                            key={index}
                                            className="mb-[10px] flex items-center gap-2 hover:text-primary-green"
                                        >
                                            <input
                                                id={checkboxId}
                                                type="checkbox"
                                                checked={checked}
                                                onChange={() => handleCheckboxChange(item)}
                                                className="w-[15px] h-[15px] accent-primary-green checked:bg-primary-green checked:border-primary-green cursor-pointer"
                                            />
                                            <label htmlFor={checkboxId} className="text-sm cursor-pointer">
                                                {item}
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="">
                            <h2 className="font-bold uppercase mb-4">Thương hiệu</h2>
                            <div className="h-44 overflow-hidden overflow-y-auto custom-scroll">
                                {thuongHieu.map((item, index) => {
                                    const checkboxId = `thuong-hieu-${index}`;
                                    const checked = selectedData.includes(item);

                                    return (
                                        <div
                                            key={index}
                                            className="mb-[10px] flex items-center gap-2 hover:text-primary-green"
                                        >
                                            <input
                                                id={checkboxId}
                                                type="checkbox"
                                                checked={checked}
                                                onChange={() => handleCheckboxChange(item)}
                                                className="w-[15px] h-[15px] accent-primary-green checked:bg-primary-green checked:border-primary-green cursor-pointer"
                                            />
                                            <label htmlFor={checkboxId} className="text-sm cursor-pointer">
                                                {item}
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SidebarBoLoc;
