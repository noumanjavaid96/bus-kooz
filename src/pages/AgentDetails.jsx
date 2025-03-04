import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiArrowLeft, FiTrendingUp, FiDollarSign, FiUsers } from 'react-icons/fi';

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-6);
  color: var(--text-secondary);
  font-weight: 500;
  
  &:hover {
    color: var(--primary-color);
    text-decoration: none;
  }
`;

const AgentHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-6);
  margin-bottom: var(--spacing-8);
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AgentIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: var(--radius-lg);
  background-color: ${props => props.bgColor || 'var(--primary-color)'};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

const AgentInfo = styled.div`
  flex: 1;
`;

const AgentName = styled.h1`
  margin-bottom: var(--spacing-2);
`;

const AgentDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-4);
  max-width: 800px;
`;

const Card = styled.div`
  background-color: var(--surface-color);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-6);
  margin-bottom: var(--spacing-6);
`;

const SectionTitle = styled.h2`
  margin-bottom: var(--spacing-4);
`;

const CapabilitiesList = styled.ul`
  margin-left: var(--spacing-6);
  margin-bottom: var(--spacing-6);
  
  li {
    margin-bottom: var(--spacing-2);
  }
`;

const UseCaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-6);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const UseCase = styled.div`
  background-color: var(--background-color);
  border-radius: var(--radius-md);
  padding: var(--spacing-4);
`;

const UseCaseTitle = styled.h3`
  font-size: 1.125rem;
  margin-bottom: var(--spacing-2);
`;

const UseCaseDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.9375rem;
  margin: 0;
`;

function AgentDetails() {
  const { id } = useParams();
  
  // Mock data for agents
  const agents = {
    'strategic-planning': {
      name: 'Strategic Planning Agent',
      description: 'The Strategic Planning Agent specializes in analyzing your business strategy and providing recommendations for long-term growth and competitive advantage. It leverages advanced analytical models to evaluate your current strategy, identify opportunities and threats, and develop actionable strategic plans.',
      icon: <FiTrendingUp />,
      color: 'var(--primary-color)',
      capabilities: [
        'SWOT Analysis (Strengths, Weaknesses, Opportunities, Threats)',
        'Competitive Analysis and Market Positioning',
        'Growth Strategy Development',
        'Strategic Plan Creation with Implementation Roadmap',
        'Strategic Option Evaluation and Prioritization',
        'Porter's Five Forces Analysis',
        'Ansoff Matrix Application for Growth Strategies',
        'PESTEL Analysis for External Environment Assessment'
      ],
      useCases: [
        {
          title: 'Market Expansion Strategy',
          description: 'Evaluate potential new markets and develop a phased expansion strategy with resource requirements and risk assessment.'
        },
        {
          title: 'Competitive Response Strategy',
          description: 'Analyze competitive threats and develop strategic responses to maintain or enhance market position.'
        },
        {
          title: 'Business Model Innovation',
          description: 'Assess current business model effectiveness and identify opportunities for innovation and adaptation.'
        },
        {
          title: 'Strategic Partnership Evaluation',
          description: 'Evaluate potential strategic partnerships or acquisitions against strategic objectives and capabilities.'
        }
      ]
    },
    'financial-advisory': {
      name: 'Financial Advisory Agent',
      description: 'The Financial Advisory Agent specializes in financial analysis, forecasting, and optimization strategies. It uses sophisticated financial models to analyze your financial performance, forecast future scenarios, optimize capital structure, and evaluate investment opportunities.',
      icon: <FiDollarSign />,
      color: 'var(--secondary-color)',
      capabilities: [
        'Financial Statement Analysis and Ratio Analysis',
        'Cash Flow Analysis and Optimization',
        'Profitability Analysis and Enhancement Strategies',
        'Capital Structure Optimization',
        'Investment Opportunity Evaluation (NPV, IRR, Payback)',
        'Financial Forecasting and Scenario Analysis',
        'Working Capital Management Optimization',
        'Business Valuation and Value Driver Analysis'
      ],
      useCases: [
        {
          title: 'Financial Performance Improvement',
          description: 'Analyze financial performance against industry benchmarks and identify specific improvement opportunities.'
        },
        {
          title: 'Investment Decision Support',
          description: 'Evaluate potential investments using multiple financial metrics and risk-adjusted return analysis.'
        },
        {
          title: 'Capital Structure Optimization',
          description: 'Analyze current capital structure and recommend optimal debt-equity mix to minimize cost of capital.'
        },
        {
          title: 'Cash Flow Forecasting',
          description: 'Develop detailed cash flow forecasts with scenario analysis to support financial planning.'
        }
      ]
    },
    'leadership-development': {
      name: 'Leadership Development Agent',
      description: 'The Leadership Development Agent specializes in assessing leadership capabilities, identifying growth opportunities, and creating personalized development plans. It leverages multiple leadership models to provide tailored guidance for leadership effectiveness and team performance enhancement.',
      icon: <FiUsers />,
      color: 'var(--accent-color)',
      capabilities: [
        'Leadership Style Assessment and Effectiveness Analysis',
        'Team Dynamics Evaluation and Improvement Strategies',
        'Personalized Leadership Development Planning',
        'Situational Leadership Model Application',
        'Transformational Leadership Development',
        'Servant Leadership Principles Implementation',
        'Adaptive Leadership for Complex Challenges',
        'Conflict Management and Resolution Strategies'
      ],
      useCases: [
        {
          title: 'Leadership Effectiveness Enhancement',
          description: 'Assess current leadership approach and develop targeted improvements aligned with business context.'
        },
        {
          title: 'Team Performance Optimization',
          description: 'Evaluate team dynamics and develop strategies to enhance collaboration, innovation, and results.'
        },
        {
          title: 'Leadership Transition Support',
          description: 'Develop strategies for effective leadership transitions to new roles or responsibilities.'
        },
        {
          title: 'Conflict Resolution Coaching',
          description: 'Analyze conflict situations and develop effective resolution approaches based on context.'
        }
      ]
    }
  };
  
  const agent = agents[id];
  
  if (!agent) {
    return (
      <div>
        <BackLink to="/">
          <FiArrowLeft />
          <span>Back to Dashboard</span>
        </BackLink>
        <h1>Agent Not Found</h1>
        <p>The requested agent could not be found.</p>
      </div>
    );
  }

  return (
    <div>
      <BackLink to="/">
        <FiArrowLeft />
        <span>Back to Dashboard</span>
      </BackLink>
      
      <AgentHeader>
        <AgentIcon bgColor={agent.color}>
          {agent.icon}
        </AgentIcon>
        <AgentInfo>
          <AgentName>{agent.name}</AgentName>
          <AgentDescription>{agent.description}</AgentDescription>
          <Link to={`/${id}`} className="btn btn-primary">
            Interact with {agent.name}
          </Link>
        </AgentInfo>
      </AgentHeader>
      
      <Card>
        <SectionTitle>Capabilities</SectionTitle>
        <CapabilitiesList>
          {agent.capabilities.map((capability, index) => (
            <li key={index}>{capability}</li>
          ))}
        </CapabilitiesList>
        
        <SectionTitle>Use Cases</SectionTitle>
        <UseCaseGrid>
          {agent.useCases.map((useCase, index) => (
            <UseCase key={index}>
              <UseCaseTitle>{useCase.title}</UseCaseTitle>
              <UseCaseDescription>{useCase.description}</UseCaseDescription>
            </UseCase>
          ))}
        </UseCaseGrid>
      </Card>
    </div>
  );
}

export default AgentDetails;
