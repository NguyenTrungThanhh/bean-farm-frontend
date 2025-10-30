import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import config from '@/configs';

function TinTucItem(props) {
    return (
        <div className="flex gap-4">
            <div>
                <Link to={config.routes.TinTuc + `/${props.slug}`}>
                    <img src={props.image} alt="" className="w-[250px] h-[158px] rounded-md" />
                </Link>
            </div>
            <div className="flex-1 flex flex-col gap-2">
                <Link to={config.routes.TinTuc + `/${props.slug}`}>
                    <h1 className="text-xl font-semibold">{props.name}</h1>
                </Link>
                <div className="text-[#8f8f8f] flex items-center gap-2 text-sm">
                    <FontAwesomeIcon icon={faClock} />
                    <p>{props.date}</p>
                </div>
                <p className="text-sm line-clamp-1">{props.content}</p>
                <Link to={config.routes.TinTuc + `/${props.slug}`}>
                    <button className="underline w-16 text-start hover:text-primary-green duration-300">
                        Đọc tiếp
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default TinTucItem;
