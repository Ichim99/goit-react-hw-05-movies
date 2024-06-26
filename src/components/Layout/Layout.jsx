import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Container, NavItem, NavList, Navigation } from './Layout.module';

const SharedLayout = () => {
  return (
    <Container>
      <header>
        <Navigation>
          <NavList>
            <NavItem>
              <Link to="/">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/movies">
                Movies
              </Link>
            </NavItem>
          </NavList>
        </Navigation>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;