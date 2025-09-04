import { Fragment, Suspense } from 'react';
import { ClipLoader } from 'react-spinners';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from '@/layouts/DefaultLayout';
import { publicRoutes } from '@/routes';
import ScrollToTop from '@/components/ScrollToTop';
import PrivateRouteAdmin from '@/components/PrivateRouteAdmin';

function App() {
    return (
        <Router>
            <ScrollToTop />

            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = DefaultLayout;

                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }

                    // Bọc các route admin cần bảo vệ
                    const isAdminRoute = route.path.startsWith('/admin') && route.path !== '/admin';

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Suspense
                                        fallback={
                                            <div className="flex justify-center items-center h-screen">
                                                <ClipLoader color="#ed1e26" size={50} />
                                            </div>
                                        }
                                    >
                                        {isAdminRoute ? (
                                            <PrivateRouteAdmin>
                                                <Page />
                                            </PrivateRouteAdmin>
                                        ) : (
                                            <Page />
                                        )}
                                    </Suspense>
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
