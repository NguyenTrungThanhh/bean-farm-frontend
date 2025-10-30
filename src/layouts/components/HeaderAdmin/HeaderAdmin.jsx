function HeaderAdmin() {
    if (!(localStorage.getItem('token') && localStorage.getItem('role') === 'admin')) {
        return null;
    }

    return (
        <div className="w-full border-b border-gray-200 px-5 sm:px-8 py-3 bg-white flex justify-between items-center shadow-sm">
            <h1 className="font-bold text-2xl text-primary-brown">Admin Panel</h1>
            <div className="flex items-center gap-3">
                <div className="hidden sm:block">
                    <h4 className="text-sm font-bold">{localStorage.getItem('username')}</h4>
                    <p className="text-xs text-gray-500">Developer Frontend</p>
                </div>
            </div>
        </div>
    );
}

export default HeaderAdmin;
