import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  height: 100%;
`;

const MainContent = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: var(--spacing-6);
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

function Layout() {
  return (
    <LayoutContainer>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Header />
        <MainContent>
          <ContentWrapper>
            <Outlet />
          </ContentWrapper>
        </MainContent>
      </div>
    </LayoutContainer>
  );
}

export default Layout;
