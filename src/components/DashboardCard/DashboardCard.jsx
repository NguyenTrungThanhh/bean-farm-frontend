import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DashboardCard({ icon, color, title, value }) {
    return (
        <div className="bg-white shadow-md rounded-2xl p-5 flex items-center gap-4">
            <FontAwesomeIcon icon={icon} className={`${color} text-3xl`} />
            <div>
                <p className="text-gray-500 text-sm">{title}</p>
                <h2 className="text-xl font-bold">{value}</h2>
            </div>
        </div>
    );
}

export default DashboardCard;
