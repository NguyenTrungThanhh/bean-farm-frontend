import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TinTucItem(props) {
    return (
        <div className="flex gap-4">
            <div>
                <img src={props.image} alt="" className="w-[250px] h-[158px] rounded-md" />
            </div>
            <div className="flex-1 flex flex-col gap-2">
                <h1 className="text-xl font-semibold">{props.title}</h1>
                <div className="text-[#8f8f8f] flex items-center gap-2 text-sm">
                    <FontAwesomeIcon icon={faClock} />
                    <p>{props.date}</p>
                </div>
                <p className="text-sm line-clamp-1">{props.desc}</p>
                <button className="underline w-16 text-start hover:text-primary-green duration-300">Đọc tiếp</button>
            </div>
        </div>
    );
}

export default TinTucItem;
