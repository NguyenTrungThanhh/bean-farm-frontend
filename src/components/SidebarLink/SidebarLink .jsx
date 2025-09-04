import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const SidebarLink = ({ to, text, onClick }) => {
    return (
        <Link
            to={to}
            className="flex items-center gap-2.5 px-4 py-2 w-full rounded-lg bg-transparent text-gray-800 transition-all duration-300 ease-in-out font-medium text-base 
            hover:bg-primary-green hover:text-white"
            onClick={onClick}
            style={{ width: '100%' }}
        >
            <div className="flex items-center gap-5 w-full">
                <p className="block">{text}</p>
            </div>
        </Link>
    );
};

export default SidebarLink;
