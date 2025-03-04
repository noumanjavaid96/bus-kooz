import React from 'react';
import styled from 'styled-components';
import { FiCheckCircle, FiAlertCircle, FiInfo } from 'react-icons/fi';

const Card = styled.div`
  background-color: var(--surface-color);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-6);
  margin-bottom: var(--spacing-4);
  border-left: 4px solid ${props => {
    switch (props.priority) {
      case 'high':
        return 'var(--error-color)';
      case 'medium':
        return 'var(--warning-color)';
      default:
        return 'var(--primary-color)';
    }
  }};
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--spacing-4);
`;

const IconContainer = styled.div`
  margin-right: var(--spacing-3);
  font-size: 1.5rem;
  color: ${props => {
    switch (props.priority) {
      case 'high':
        return 'var(--error-color)';
      case 'medium':
        return 'var(--warning-color)';
      default:
        return 'var(--primary-color)';
    }
  }};
`;

const Title = styled.h3`
  font-size: 1.125rem;
  margin: 0 0 var(--spacing-1) 0;
`;

const Agent = styled.div`
  font-size: 0.875rem;
  color: var(--text-tertiary);
`;

const Description = styled.p`
  margin: 0 0 var(--spacing-4) 0;
  color: var(--text-secondary);
`;

const PriorityBadge = styled.span`
  display: inline-block;
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--radius-md);
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  background-color: ${props => {
    switch (props.priority) {
      case 'high':
        return 'rgba(239, 68, 68, 0.1)';
      case 'medium':
        return 'rgba(245, 158, 11, 0.1)';
      default:
        return 'rgba(37, 99, 235, 0.1)';
    }
  }};
  color: ${props => {
    switch (props.priority) {
      case 'high':
        return 'var(--error-color)';
      case 'medium':
        return 'var(--warning-color)';
      default:
        return 'var(--primary-color)';
    }
  }};
`;

const Actions = styled.div`
  display: flex;
  gap: var(--spacing-2);
  margin-top: var(--spacing-4);
`;

const ActionButton = styled.button`
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-md);
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &.primary {
    background-color: var(--primary-color);
    color: white;
    border: none;
    
    &:hover {
      background-color: var(--primary-dark);
    }
  }
  
  &.secondary {
    background-color: transparent;
    border: 1px solid var(--border-color);
    color: var(--text-primary);
    
    &:hover {
      background-color: var(--background-color);
    }
  }
`;

function RecommendationCard({ recommendation }) {
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high':
        return <FiAlertCircle />;
      case 'medium':
        return <FiInfo />;
      default:
        return <FiCheckCircle />;
    }
  };

  return (
    <Card priority={recommendation.priority}>
      <Header>
        <IconContainer priority={recommendation.priority}>
          {getPriorityIcon(recommendation.priority)}
        </IconContainer>
        <div style={{ flex: 1 }}>
          <Title>{recommendation.title}</Title>
          <Agent>From: {recommendation.agent}</Agent>
        </div>
        <PriorityBadge priority={recommendation.priority}>
          {recommendation.priority} priority
        </PriorityBadge>
      </Header>
      <Description>{recommendation.description}</Description>
      {recommendation.steps && (
        <div>
          <strong>Recommended steps:</strong>
          <ul style={{ marginLeft: 'var(--spacing-4)', marginTop: 'var(--spacing-2)' }}>
            {recommendation.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      )}
      <Actions>
        <ActionButton className="primary">Implement</ActionButton>
        <ActionButton className="secondary">Dismiss</ActionButton>
      </Actions>
    </Card>
  );
}

export default RecommendationCard;
