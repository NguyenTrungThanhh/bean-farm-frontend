import HeaderAdmin from '@/layouts/components/HeaderAdmin';
import SidebarAdmin from '@/layouts/components/SidebarAdmin';

function AdminLayout({ children }) {
    return (
        <div className="flex">
            <SidebarAdmin />
            <div className="w-full bg-cover bg-center">
                <HeaderAdmin />
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
}

export default AdminLayout;
