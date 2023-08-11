import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';
import AppBar from './AppBar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div style={{ backgroundColor: '#010620' }}>
      <AppBar />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
