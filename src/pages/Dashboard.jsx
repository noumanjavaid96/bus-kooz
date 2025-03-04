import React from 'react';
import styled from 'styled-components';
import { FiTrendingUp, FiDollarSign, FiUsers, FiBarChart2 } from 'react-icons/fi';
import AgentCard from '../components/AgentCard';
import StatCard from '../components/StatCard';
import RecommendationCard from '../components/RecommendationCard';

const PageTitle = styled.h1`
  margin-bottom: var(--spacing-6);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-8);
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: var(--spacing-4);
`;

const AgentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-6);
  margin-bottom: var(--spacing-8);
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-6);
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const RecommendationsContainer = styled.div`
  margin-bottom: var(--spacing-8);
`;

const InsightsContainer = styled.div`
  background-color: var(--surface-color);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-6);
`;

const InsightItem = styled.div`
  padding: var(--spacing-4) 0;
  border-bottom: 1px solid var(--border-color);
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  
  &:first-child {
    padding-top: 0;
  }
`;

const InsightTitle = styled.h4`
  margin-bottom: var(--spacing-2);
`;

const InsightDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.9375rem;
  margin-bottom: var(--spacing-2);
`;

const InsightMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: var(--text-tertiary);
`;

function Dashboard() {
  // Mock data for agents
  const agents = [
    {
      id: 'strategic-planning',
      name: 'Strategic Planning Agent',
      description: 'Analyzes your business strategy and provides recommendations for long-term growth and competitive advantage.',
      icon: <FiTrendingUp />,
      color: 'var(--primary-color)',
      link: '/strategic-planning'
    },
    {
      id: 'financial-advisory',
      name: 'Financial Advisory Agent',
      description: 'Evaluates financial performance, forecasts future scenarios, and recommends optimization strategies.',
      icon: <FiDollarSign />,
      color: 'var(--secondary-color)',
      link: '/financial-advisory'
    },
    {
      id: 'leadership-development',
      name: 'Leadership Development Agent',
      description: 'Assesses leadership capabilities, identifies growth opportunities, and creates personalized development plans.',
      icon: <FiUsers />,
      color: 'var(--accent-color)',
      link: '/leadership-development'
    }
  ];
  
  // Mock data for recommendations
  const recommendations = [
    {
      id: 1,
      title: 'Optimize Working Capital Management',
      description: 'Current working capital ratio is below industry average, indicating potential liquidity challenges. Implementing improved inventory management and accounts receivable processes could free up cash flow.',
      agent: 'Financial Advisory Agent',
      priority: 'high',
      steps: [
        'Review current inventory turnover rates and identify slow-moving items',
        'Implement automated accounts receivable follow-up system',
        'Negotiate extended payment terms with key suppliers'
      ]
    },
    {
      id: 2,
      title: 'Develop Leadership Coaching Program',
      description: 'Middle management shows gaps in coaching capabilities, limiting team development and performance. A structured coaching program would enhance leadership effectiveness.',
      agent: 'Leadership Development Agent',
      priority: 'medium',
      steps: [
        'Conduct leadership assessment for middle managers',
        'Design coaching skills workshop series',
        'Implement peer coaching circles for ongoing development'
      ]
    }
  ];
  
  // Mock data for insights
  const insights = [
    {
      id: 1,
      title: 'Market Expansion Opportunity',
      description: 'Analysis indicates potential for 15% growth by entering the Southeast Asian market.',
      agent: 'Strategic Planning Agent',
      date: '2 days ago'
    },
    {
      id: 2,
      title: 'Cash Flow Improvement',
      description: 'Recent changes to accounts receivable process have improved cash flow by 8%.',
      agent: 'Financial Advisory Agent',
      date: '1 week ago'
    },
    {
      id: 3,
      title: 'Team Engagement Increase',
      description: 'Leadership development initiatives have resulted in 12% higher team engagement scores.',
      agent: 'Leadership Development Agent',
      date: '2 weeks ago'
    }
  ];

  return (
    <div>
      <PageTitle>Business Coaching Dashboard</PageTitle>
      
      <StatsGrid>
        <StatCard 
          title="Revenue Growth" 
          value="+12.5%" 
          change="3.2% from last month" 
          isPositive={true} 
          icon={<FiBarChart2 />}
          color="var(--primary-color)"
        />
        <StatCard 
          title="Profit Margin" 
          value="18.3%" 
          change="1.5% from last month" 
          isPositive={true}
          icon={<FiDollarSign />}
          color="var(--secondary-color)"
        />
        <StatCard 
          title="Team Performance" 
          value="86/100" 
          change="4 points from last quarter" 
          isPositive={true}
          icon={<FiUsers />}
          color="var(--accent-color)"
        />
        <StatCard 
          title="Market Position" 
          value="#2" 
          change="No change from last quarter" 
          isPositive={true}
          icon={<FiTrendingUp />}
          color="var(--primary-color)"
        />
      </StatsGrid>
      
      <SectionTitle>AI Coaching Agents</SectionTitle>
      <AgentsGrid>
        {agents.map(agent => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </AgentsGrid>
      
      <TwoColumnLayout>
        <RecommendationsContainer>
          <SectionTitle>Priority Recommendations</SectionTitle>
          {recommendations.map(recommendation => (
            <RecommendationCard key={recommendation.id} recommendation={recommendation} />
          ))}
        </RecommendationsContainer>
        
        <div>
          <SectionTitle>Recent Insights</SectionTitle>
          <InsightsContainer>
            {insights.map(insight => (
              <InsightItem key={insight.id}>
                <InsightTitle>{insight.title}</InsightTitle>
                <InsightDescription>{insight.description}</InsightDescription>
                <InsightMeta>
                  <span>{insight.agent}</span>
                  <span>{insight.date}</span>
                </InsightMeta>
              </InsightItem>
            ))}
          </InsightsContainer>
        </div>
      </TwoColumnLayout>
    </div>
  );
}

export default Dashboard;
