import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import FadeLoader from 'react-spinners/ClipLoader';

import Container from '../Container';
import Header from '../Header';
import Footer from '../Footer';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <FadeLoader
            color="#2196F3"
            cssOverride={{
              display: 'block',
              margin: '0 auto',
              height: '50px',
              width: '5px',
            }}
            loading
          />
        }
      >
        <main>
          <Container>
            <Outlet />
          </Container>
        </main>
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
