import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import config from '@/configs';

const cityDistrictMap = {
    'Hà Nội': ['Quận Ba Đình', 'Quận Cầu Giấy', 'Quận Hà Đông'],
    'Hồ Chí Minh': ['Quận 11'],
    'Đà Nẵng': ['Quận Hải Châu'],
    'Bình Dương': ['Thủ Dầu Một'],
    'Cần Thơ': ['Quận Ninh Kiều'],
};

const listBean = [
    {
        name: 'Bean Hồ Chí Minh',
        city: 'Hồ Chí Minh',
        districts: ['Quận 11'],
        address: 'Tầng 3, 70 Lữ Gia, Phường 15, Quận 11, Thành phố Hồ Chí Minh',
        hotline: '1900 6750',
        mapEmbedUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.518104241413!2d106.650981814287!3d10.771573662229935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec073c87139%3A0x10ef6fd79e84aa6f!2zNzAgTOG7ryBHaWEsIFBoxrDhu51uZyAxNSwgUXXhuq1uIDExLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1648374861399!5m2!1svi!2s',
    },
    {
        name: 'Bean Bình Dương',
        city: 'Bình Dương',
        districts: ['Thủ Dầu Một'],
        address: '169 / 34 Nguyễn Hữu Cảnh, Phường Phú Thọ, TP.Thủ Dầu Một, Tỉnh Bình Dương',
        hotline: '1900 6750',
        mapEmbedUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.9413500336022!2d106.66983361411785!3d10.967799658632787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d1f5ea2844d1%3A0x68ff2239eeb3a9a9!2zMTY5IE5ndXnhu4VuIEjhu691IEPhuqNuaCwgUGjDuiBUaOG7jSwgVGjhu6cgROG6p3UgTeG7mXQsIELDrG5oIETGsMahbmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1649778686066!5m2!1svi!2s',
    },
    {
        name: 'Bean Cần Thơ',
        city: 'Cần Thơ',
        districts: ['Ninh Kiều'],
        address: '81 đường Phan Huy Chú, KDC Thới Nhựt I, Phường An Khánh, Quận Ninh Kiều, Tp Cần Thơ',
        hotline: '1900 6750',
        mapEmbedUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.7286179369694!2d105.7567164141113!3d10.039238575113611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0895e8b677aa1%3A0xd73b3c9a031d237f!2zS0RDIFRo4bubaSBOaOG7sXQ!5e0!3m2!1svi!2s!4v1649778804218!5m2!1svi!2s',
    },
    {
        name: 'Bean Hà Nội',
        city: 'Hà Nội',
        districts: ['Ba Đình'],
        address: 'Tầng 6 - 266 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, Hà Nội',
        hotline: '1900 6750',
        mapEmbedUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0889927657763!2d105.8402373144074!3d21.029124893142946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab5be62341c1%3A0x6eaeebe47b93fe04!2zVMOyYSBuaMOgIHPhu5EgNSDEkGnhu4duIEJpw6puIFBo4bun!5e0!3m2!1svi!2s!4v1648984122910!5m2!1svi!2s',
    },
    {
        name: 'Bean Đà Nẵng',
        city: 'Đà Nẵng',
        districts: ['Hải Châu'],
        address: '181 đường Huỳnh Tấn Phát, Phường Hoà Cường Nam, Quận Hải Châu, TP Đà Nẵng',
        hotline: '1900 6750',
        mapEmbedUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.610608676567!2d108.21247971416946!3d16.03377334464764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219ecd6d00127%3A0x5e1f8719efd14c01!2zMTgxIEh14buzbmggVOG6pW4gUGjDoXQsIEhvw6AgQ8aw4budbmcgTmFtLCBI4bqjaSBDaMOidSwgxJDDoCBO4bq1bmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1649778942084!5m2!1svi!2s',
    },
    {
        name: 'Bean Hoàng Quốc Việt',
        city: 'Hà Nội',
        districts: ['Cầu Giấy'],
        address: '8 Hoàng Quốc Việt, Phường Nghĩa Tân, Quận Cầu Giấy, Hà Nội',
        hotline: '1900 6750',
        mapEmbedUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.665705597794!2d105.78940821424565!3d21.046057892565063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab3048cf1bc9%3A0xf383d5c388f26254!2zMzggSG_DoG5nIFF14buRYyBWaeG7h3QsIE5naMSpYSBUw6JuLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1650036591243!5m2!1svi!2ss',
    },
    {
        name: 'Bean Hoàng Đạo Thúy',
        city: 'Hà Nội',
        districts: ['Cầu Giấy'],
        address: '150 Hoàng Đạo Thúy, Phường Trung Hòa, Quận Cầu Giấy, Hà Nội',
        hotline: '1900 6750',
        mapEmbedUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6317401375168!2d105.80027631424484!3d21.007393993884758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aca10d52e8d7%3A0x27fe5187e5401dac!2zMTUwIEhvw6BuZyDEkOG6oW8gVGjDunksIFRydW5nIEhvw6AsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1650036686730!5m2!1svi!2s',
    },
    {
        name: 'Bean Trần Phú',
        city: 'Hà Nội',
        districts: ['Hà Đông'],
        address: '95 Trần Phú, Phường Văn Quán, Quận Hà Đông, Hà Nội',
        hotline: '1900 6750',
        mapEmbedUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6566429892996!2d106.67554851411637!3d10.760923462423836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1d9884721d%3A0x8dc3d6a4115c6305!2zOTUgVHLhuqduIFBow7osIFBoxrDhu51uZyA0LCBRdeG6rW4gNSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1650036943196!5m2!1svi!2s',
    },
];

function HeThong() {
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [districts, setDistricts] = useState([]);
    const [branches, setBranches] = useState([]);
    const [selectedBranch, setSelectedBranch] = useState(null);

    useEffect(() => {
        document.title = 'Hệ thống';
        setBranches(listBean);
        const defaultBranch = listBean.find((b) => b.name === 'Bean Hồ Chí Minh');
        setSelectedBranch(defaultBranch);
    }, []);

    const normalize = (text) => text.replace(/^Quận\s|^Thành phố\s|^TP\.?\s/i, '').trim();

    const filterBeans = (city, district) => {
        if (!city && !district) return listBean;
        if (city && !district) return listBean.filter((b) => b.city === city);
        return listBean.filter((b) => b.city === city && b.districts.some((d) => normalize(d) === normalize(district)));
    };

    const handleCityChange = (e) => {
        const city = e.target.value;
        setSelectedCity(city);
        setSelectedDistrict('');
        setDistricts(cityDistrictMap[city] || []);
        setBranches(filterBeans(city, ''));
    };

    const handleDistrictChange = (e) => {
        const district = e.target.value;
        setSelectedDistrict(district);
        setBranches(filterBeans(selectedCity, district));
    };

    return (
        <div className="pb-10">
            <div className="bg-[#f5f5f5] w-full py-4">
                <div className="w-[83%] mx-auto">
                    <div className="flex items-center gap-3">
                        <Link to={config.routes.home}>
                            <h1 className="text-sm hover:text-primary-yellow">Trang chủ</h1>
                        </Link>
                        <FontAwesomeIcon icon={faAngleRight} size="xs" />
                        <h1 className="text-sm text-primary-yellow">Hệ thống</h1>
                    </div>
                </div>
            </div>

            <div className="my-4 w-[83%] mx-auto">
                <div className="flex gap-4 items-start">
                    {/* Sidebar */}
                    <div className="w-1/3 rounded-sm">
                        <div className="p-3 bg-primary-green rounded-sm h-full min-h-[681px]">
                            <div className="flex flex-col gap-3">
                                <div className="relative w-full">
                                    <select
                                        value={selectedCity}
                                        onChange={handleCityChange}
                                        className="w-full text-sm font-medium rounded-sm px-3 py-2 appearance-none focus:outline-none"
                                    >
                                        <option value="">Chọn tỉnh thành</option>
                                        {Object.keys(cityDistrictMap).map((city) => (
                                            <option key={city} value={city}>
                                                {city}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="relative w-full">
                                    <select
                                        value={selectedDistrict}
                                        onChange={handleDistrictChange}
                                        disabled={!selectedCity}
                                        className={`w-full text-sm font-medium rounded-sm px-3 py-2 appearance-none focus:outline-none 
                                        ${!selectedCity ? 'bg-gray-200 cursor-not-allowed' : ''}`}
                                    >
                                        <option value="">Chọn quận/huyện</option>
                                        {districts.map((district) => (
                                            <option key={district} value={district}>
                                                {district}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="mt-4 flex flex-col gap-3">
                                {branches.length === 0 ? (
                                    <p className="text-white text-sm italic">Không tìm thấy chi nhánh phù hợp.</p>
                                ) : (
                                    branches.map((bean) => (
                                        <div
                                            key={bean.name}
                                            className="group flex flex-col gap-1 bg-white px-2 py-1 rounded-sm text-sm text-black shadow border-2 border-primary-yellow hover:bg-primary-yellow duration-300 hover:text-white cursor-pointer"
                                            onClick={() => setSelectedBranch(bean)}
                                        >
                                            <h3 className="font-bold text-primary-green group-hover:text-white duration-300">
                                                {bean.name}
                                            </h3>
                                            <p className="leading-6">
                                                <b>Địa chỉ:</b> {bean.address}
                                            </p>
                                            <p>
                                                <b>Hotline:</b>{' '}
                                                <span className="text-primary-green group-hover:text-white duration-300">
                                                    {bean.hotline}
                                                </span>
                                            </p>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Map - sticky */}
                    <div className="w-2/3 sticky top-2">
                        <div
                            className="bg-white rounded-sm overflow-hidden shadow"
                            style={{ height: 'calc(100vh - 20px)' }}
                        >
                            {selectedBranch ? (
                                <iframe
                                    title={selectedBranch.name}
                                    src={selectedBranch.mapEmbedUrl}
                                    width="100%"
                                    style={{ height: '100%', border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-sm"
                                />
                            ) : (
                                <div className="h-40 bg-gray-100 flex items-center justify-center text-gray-600 italic">
                                    Chưa chọn chi nhánh nào
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeThong;
