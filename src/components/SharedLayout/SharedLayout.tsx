import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader';

import Container from '../Container';
import Header from '../Header';
import Footer from '../Footer';
import { LayoutConteiner } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <LayoutConteiner>
      <Header />
      <Suspense fallback={<Loader />}>
        <main style={{ flex: 1 }}>
          <Container>
            <Outlet />
          </Container>
        </main>
      </Suspense>
      <Footer />
    </LayoutConteiner>
  );
};

export default SharedLayout;
