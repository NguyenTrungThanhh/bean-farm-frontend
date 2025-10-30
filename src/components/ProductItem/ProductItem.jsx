import { Link } from 'react-router-dom';
import config from '@/configs';

function ProductItem(props) {
    const formatPrice = (price) => {
        return price?.toLocaleString('vi-VN') + '₫';
    };

    return (
        <div className="w-full h-[323px] bg-white rounded-xl border border-[#f0f1f2] z-0">
            <div className="relative">
                <Link to={config.routes.SanPham + `/${props.slug}`}>
                    <img src={props.image} alt="" className="rounded-xl" />
                </Link>
                {props.discount && (
                    <div className="absolute top-3 left-1 bg-red-500 rounded-full px-2">
                        <p className="text-sm text-white">{props.discount}%</p>
                    </div>
                )}
            </div>
            <div className="text-center">
                <Link to={config.routes.SanPham + `/${props.slug}`}>
                    <h1 className="font-semibold mb-2">{props.name}</h1>
                </Link>
                <div className="flex items-center justify-center gap-2">
                    <p className="line-through text-xs text-[#838383] font-medium">
                        {props.oldPrice && formatPrice(props.oldPrice)}
                    </p>
                    <p className="text-sm text-primary-green font-semibold">{formatPrice(props.newPrice)}</p>
                </div>
                <button className="text-sm bg-primary-green text-white font-semibold px-6 py-1 rounded-full my-2 hover:bg-primary-yellow hover:text-black duration-300">
                    Thêm vào giỏ
                </button>
            </div>
        </div>
    );
}

export default ProductItem;
