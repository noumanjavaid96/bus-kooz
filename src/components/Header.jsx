import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FiBell, FiSettings, FiUser } from 'react-icons/fi';

const HeaderContainer = styled.header`
  background-color: var(--surface-color);
  border-bottom: 1px solid var(--border-color);
  padding: var(--spacing-4) var(--spacing-6);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PageTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-2);
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--background-color);
    color: var(--primary-color);
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  cursor: pointer;
  padding: var(--spacing-2) var(--spacing-3);
  border-radius: var(--radius-md);
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--background-color);
  }
`;

const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
`;

const UserInfo = styled.div`
  display: none;
  
  @media (min-width: 768px) {
    display: block;
  }
`;

const UserName = styled.div`
  font-weight: 500;
`;

const UserRole = styled.div`
  font-size: 0.75rem;
  color: var(--text-tertiary);
`;

function Header() {
  const location = useLocation();
  
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Dashboard';
      case '/strategic-planning':
        return 'Strategic Planning';
      case '/financial-advisory':
        return 'Financial Advisory';
      case '/leadership-development':
        return 'Leadership Development';
      case '/settings':
        return 'Settings';
      default:
        if (location.pathname.startsWith('/agent/')) {
          return 'Agent Details';
        }
        return 'Business Coaching Swarm';
    }
  };

  return (
    <HeaderContainer>
      <PageTitle>{getPageTitle()}</PageTitle>
      <HeaderActions>
        <IconButton aria-label="Notifications">
          <FiBell />
        </IconButton>
        <IconButton aria-label="Settings">
          <FiSettings />
        </IconButton>
        <UserProfile>
          <UserAvatar>JD</UserAvatar>
          <UserInfo>
            <UserName>John Doe</UserName>
            <UserRole>Business Coach</UserRole>
          </UserInfo>
        </UserProfile>
      </HeaderActions>
    </HeaderContainer>
  );
}

export default Header;
