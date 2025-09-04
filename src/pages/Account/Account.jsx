import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import config from '@/configs';

function Account() {
    useEffect(() => {
        document.title = 'Trang khách hàng';
    });

    return (
        <div>
            <div className="bg-[#f5f5f5] w-full py-4">
                <div className="w-[83%] mx-auto">
                    <div className="flex items-center gap-3">
                        <Link to={config.routes.home}>
                            <h1 className="text-sm hover:text-primary-yellow">Trang chủ</h1>
                        </Link>
                        <FontAwesomeIcon icon={faAngleRight} size="xs" />
                        <h1 className="text-sm text-primary-yellow">Trang khách hàng</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
