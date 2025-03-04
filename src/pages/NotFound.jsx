import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiHome } from 'react-icons/fi';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--spacing-16) var(--spacing-4);
`;

const ErrorCode = styled.div`
  font-size: 6rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: var(--spacing-4);
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: var(--spacing-4);
`;

const Description = styled.p`
  color: var(--text-secondary);
  max-width: 500px;
  margin-bottom: var(--spacing-8);
`;

const HomeButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-3) var(--spacing-6);
  background-color: var(--primary-color);
  color: white;
  border-radius: var(--radius-md);
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--primary-dark);
    text-decoration: none;
  }
`;

function NotFound() {
  return (
    <Container>
      <ErrorCode>404</ErrorCode>
      <Title>Page Not Found</Title>
      <Description>
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </Description>
      <HomeButton to="/">
        <FiHome />
        Back to Dashboard
      </HomeButton>
    </Container>
  );
}

export default NotFound;
