import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';

const Card = styled.div`
  background-color: var(--surface-color);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-6);
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
`;

const AgentIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background-color: ${props => props.bgColor || 'var(--primary-color)'};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: var(--spacing-4);
`;

const AgentName = styled.h3`
  font-size: 1.25rem;
  margin-bottom: var(--spacing-2);
`;

const AgentDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.9375rem;
  margin-bottom: var(--spacing-4);
  flex: 1;
`;

const AgentLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  color: var(--primary-color);
  font-weight: 500;
  font-size: 0.9375rem;
  margin-top: auto;
  
  &:hover {
    text-decoration: none;
    
    svg {
      transform: translateX(4px);
    }
  }
  
  svg {
    transition: transform 0.2s ease;
  }
`;

function AgentCard({ agent }) {
  return (
    <Card>
      <AgentIcon bgColor={agent.color}>
        {agent.icon}
      </AgentIcon>
      <AgentName>{agent.name}</AgentName>
      <AgentDescription>{agent.description}</AgentDescription>
      <AgentLink to={agent.link}>
        <span>Interact with agent</span>
        <FiArrowRight />
      </AgentLink>
    </Card>
  );
}

export default AgentCard;
