import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: var(--surface-color);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-6);
  display: flex;
  flex-direction: column;
`;

const StatTitle = styled.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-2);
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: var(--spacing-2);
`;

const StatChange = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
  font-size: 0.875rem;
  color: ${props => props.isPositive ? 'var(--success-color)' : 'var(--error-color)'};
`;

const StatIcon = styled.div`
  margin-left: auto;
  color: ${props => props.color || 'var(--primary-color)'};
  font-size: 1.5rem;
  opacity: 0.8;
`;

function StatCard({ title, value, change, isPositive, icon, color }) {
  return (
    <Card>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <StatTitle>{title}</StatTitle>
          <StatValue>{value}</StatValue>
          {change && (
            <StatChange isPositive={isPositive}>
              {isPositive ? '↑' : '↓'} {change}
            </StatChange>
          )}
        </div>
        {icon && <StatIcon color={color}>{icon}</StatIcon>}
      </div>
    </Card>
  );
}

export default StatCard;
