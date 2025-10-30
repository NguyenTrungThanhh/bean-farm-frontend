import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';

const SidebarLink = ({ to, text, icon, onClick }) => {
    const location = useLocation();
    const isActive = location.pathname === to || location.pathname.startsWith(`${to}/`);

    return (
        <Link
            to={to}
            onClick={onClick}
            className={`group flex items-center gap-3 px-4 py-3 w-full rounded-lg transition-all duration-200 font-medium text-base
                ${
                    isActive
                        ? 'bg-primary-green text-white shadow-md'
                        : 'text-gray-700 hover:bg-primary-green hover:text-white'
                }`}
        >
            {icon && (
                <FontAwesomeIcon
                    icon={icon}
                    className={`w-5 transition-colors duration-200 ${
                        isActive ? 'text-white' : 'text-gray-500 group-hover:text-white'
                    }`}
                />
            )}
            <span className="truncate">{text}</span>
        </Link>
    );
};

export default SidebarLink;
