import React, { useState } from 'react';
import styled from 'styled-components';
import { FiChevronDown, FiChevronUp, FiDownload, FiShare2 } from 'react-icons/fi';

const Card = styled.div`
  background-color: var(--surface-color);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-6);
  margin-bottom: var(--spacing-6);
  border-left: 4px solid var(--primary-color);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-4);
`;

const Title = styled.h3`
  margin: 0;
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
`;

const AgentIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;

const Timestamp = styled.div`
  font-size: 0.875rem;
  color: var(--text-tertiary);
`;

const Content = styled.div`
  margin-bottom: ${props => props.isExpanded ? 'var(--spacing-4)' : '0'};
  max-height: ${props => props.isExpanded ? 'none' : '200px'};
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: ${props => props.isExpanded ? 'none' : 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))'};
    pointer-events: none;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: var(--primary-color);
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
  padding: var(--spacing-2) 0;
  margin-bottom: var(--spacing-4);
`;

const Actions = styled.div`
  display: flex;
  gap: var(--spacing-2);
  justify-content: flex-end;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-2) var(--spacing-3);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  
  &:hover {
    background-color: var(--background-color);
    color: var(--primary-color);
  }
`;

function ResponseCard({ response }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <Card>
      <Header>
        <Title>
          <AgentIcon>{response.agent.charAt(0)}</AgentIcon>
          {response.agent} Response
        </Title>
        <Timestamp>{formatDate(response.timestamp)}</Timestamp>
      </Header>
      
      <Content isExpanded={isExpanded}>
        {response.content.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        
        {response.recommendations && (
          <div style={{ marginTop: 'var(--spacing-4)' }}>
            <h4>Recommendations:</h4>
            <ul>
              {response.recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          </div>
        )}
        
        {response.nextSteps && (
          <div style={{ marginTop: 'var(--spacing-4)' }}>
            <h4>Next Steps:</h4>
            <ol>
              {response.nextSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        )}
      </Content>
      
      {response.content.length > 300 && (
        <ToggleButton onClick={toggleExpand}>
          {isExpanded ? (
            <>
              <FiChevronUp />
              Show less
            </>
          ) : (
            <>
              <FiChevronDown />
              Show more
            </>
          )}
        </ToggleButton>
      )}
      
      <Actions>
        <ActionButton>
          <FiDownload />
          Download
        </ActionButton>
        <ActionButton>
          <FiShare2 />
          Share
        </ActionButton>
      </Actions>
    </Card>
  );
}

export default ResponseCard;
