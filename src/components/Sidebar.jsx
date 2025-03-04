import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { 
  FiHome, 
  FiTrendingUp, 
  FiDollarSign, 
  FiUsers, 
  FiSettings,
  FiMenu,
  FiX
} from 'react-icons/fi';
import logo from '../assets/logo.svg';

const SidebarContainer = styled.aside`
  width: 250px;
  background-color: var(--surface-color);
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s ease;
  
  @media (max-width: 768px) {
    position: fixed;
    z-index: 100;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    box-shadow: ${({ isOpen }) => isOpen ? 'var(--shadow-lg)' : 'none'};
  }
`;

const LogoContainer = styled.div`
  padding: var(--spacing-6);
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  border-bottom: 1px solid var(--border-color);
`;

const LogoImage = styled.img`
  width: 32px;
  height: 32px;
`;

const LogoText = styled.div`
  font-weight: 600;
  font-size: 1.25rem;
  color: var(--primary-color);
`;

const NavContainer = styled.nav`
  padding: var(--spacing-4) 0;
  flex: 1;
  overflow-y: auto;
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-3) var(--spacing-6);
  color: var(--text-secondary);
  transition: all 0.2s ease;
  text-decoration: none;
  
  &:hover {
    background-color: var(--background-color);
    color: var(--primary-color);
    text-decoration: none;
  }
  
  &.active {
    color: var(--primary-color);
    background-color: rgba(37, 99, 235, 0.1);
    border-right: 3px solid var(--primary-color);
    font-weight: 500;
  }
`;

const NavIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
`;

const NavText = styled.div`
  font-size: 0.9375rem;
`;

const MobileToggle = styled.button`
  position: fixed;
  bottom: var(--spacing-4);
  left: ${({ isOpen }) => isOpen ? '258px' : 'var(--spacing-4)'};
  z-index: 101;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  box-shadow: var(--shadow-md);
  transition: left 0.3s ease;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  const closeSidebar = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <LogoContainer>
          <LogoImage src={logo} alt="Business Coaching Swarm" />
          <LogoText>BizCoach AI</LogoText>
        </LogoContainer>
        <NavContainer>
          <NavItem to="/" onClick={closeSidebar}>
            <NavIcon><FiHome /></NavIcon>
            <NavText>Dashboard</NavText>
          </NavItem>
          <NavItem to="/strategic-planning" onClick={closeSidebar}>
            <NavIcon><FiTrendingUp /></NavIcon>
            <NavText>Strategic Planning</NavText>
          </NavItem>
          <NavItem to="/financial-advisory" onClick={closeSidebar}>
            <NavIcon><FiDollarSign /></NavIcon>
            <NavText>Financial Advisory</NavText>
          </NavItem>
          <NavItem to="/leadership-development" onClick={closeSidebar}>
            <NavIcon><FiUsers /></NavIcon>
            <NavText>Leadership Development</NavText>
          </NavItem>
          <NavItem to="/settings" onClick={closeSidebar}>
            <NavIcon><FiSettings /></NavIcon>
            <NavText>Settings</NavText>
          </NavItem>
        </NavContainer>
      </SidebarContainer>
      <MobileToggle isOpen={isOpen} onClick={toggleSidebar}>
        {isOpen ? <FiX /> : <FiMenu />}
      </MobileToggle>
    </>
  );
}

export default Sidebar;
