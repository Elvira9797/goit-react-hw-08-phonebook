import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';
import AppBar from './AppBar';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
