import React, { useState } from 'react';
import styled from 'styled-components';
import { FiTrendingUp, FiTarget, FiActivity } from 'react-icons/fi';
import AgentInteractionForm from '../components/AgentInteractionForm';
import ResponseCard from '../components/ResponseCard';

const PageTitle = styled.h1`
  margin-bottom: var(--spacing-6);
`;

const PageDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-8);
  max-width: 800px;
`;

const ResponsesContainer = styled.div`
  margin-top: var(--spacing-8);
`;

const SectionTitle = styled.h2`
  margin-bottom: var(--spacing-4);
`;

const NoResponses = styled.div`
  background-color: var(--surface-color);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-6);
  text-align: center;
  color: var(--text-secondary);
`;

function StrategicPlanning() {
  const [responses, setResponses] = useState([]);
  
  const agent = {
    name: 'Strategic Planning Agent',
    description: 'The Strategic Planning Agent specializes in analyzing your business strategy and providing recommendations for long-term growth and competitive advantage. It can help with SWOT analysis, market positioning, growth strategies, and competitive analysis.'
  };
  
  const formFields = [
    {
      name: 'analysisType',
      label: 'Analysis Type',
      type: 'select',
      required: true,
      options: [
        { value: 'ANALYZE_STRATEGY', label: 'Analyze Current Strategy' },
        { value: 'GENERATE_STRATEGIC_PLAN', label: 'Generate Strategic Plan' },
        { value: 'EVALUATE_STRATEGIC_OPTIONS', label: 'Evaluate Strategic Options' }
      ]
    },
    {
      name: 'businessContext',
      label: 'Business Context',
      type: 'textarea',
      required: true,
      placeholder: 'Describe your business, industry, market position, and current strategic challenges...',
      min: 50
    },
    {
      name: 'businessGoals',
      label: 'Business Goals',
      type: 'textarea',
      required: true,
      placeholder: 'Outline your key business goals and objectives for the next 1-3 years...',
      min: 30
    },
    {
      name: 'timeframe',
      label: 'Timeframe',
      type: 'select',
      required: true,
      options: [
        { value: 'short', label: 'Short-term (0-12 months)' },
        { value: 'medium', label: 'Medium-term (1-3 years)' },
        { value: 'long', label: 'Long-term (3-5+ years)' }
      ]
    }
  ];
  
  const handleSubmit = async (values) => {
    // In a real application, this would make an API call to the backend
    console.log('Submitting to Strategic Planning Agent:', values);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock response
    const newResponse = {
      id: Date.now(),
      agent: 'Strategic Planning Agent',
      timestamp: new Date().toISOString(),
      content: `Based on the analysis of your current strategy and business context, I've identified several key insights and recommendations.

Your business is operating in a competitive market with significant growth potential, particularly in the areas you've highlighted. The current strategy has some strong elements, particularly in your core market positioning, but there are opportunities to strengthen your approach to emerging market segments and technology integration.

The SWOT analysis reveals:

Strengths: Strong brand recognition, loyal customer base, efficient operations
Weaknesses: Limited digital presence, aging product portfolio, geographic concentration
Opportunities: Emerging market segments, technological integration, strategic partnerships
Threats: Increasing competition, changing customer preferences, potential regulatory changes

Your business goals are ambitious but achievable with some strategic adjustments. The focus on expansion while maintaining quality is appropriate, but may require additional resource allocation and capability development.`,
      recommendations: [
        'Develop a phased market expansion plan focusing on the highest-potential segments first',
        'Accelerate digital transformation initiatives to address the identified weakness',
        'Establish strategic partnerships to quickly access new capabilities and markets',
        'Refresh product portfolio with emphasis on emerging customer preferences'
      ],
      nextSteps: [
        'Conduct detailed market analysis of top expansion opportunities',
        'Develop resource requirements and timeline for recommended initiatives',
        'Prioritize initiatives based on strategic impact and implementation feasibility',
        'Create detailed implementation roadmap with key milestones and metrics'
      ]
    };
    
    setResponses([newResponse, ...responses]);
  };

  return (
    <div>
      <PageTitle>Strategic Planning</PageTitle>
      <PageDescription>
        Leverage our Strategic Planning Agent to analyze your business strategy, identify growth opportunities, 
        and develop actionable plans for sustainable competitive advantage. This agent specializes in strategic 
        analysis, market positioning, and long-term business planning.
      </PageDescription>
      
      <AgentInteractionForm 
        agent={agent}
        fields={formFields}
        onSubmit={handleSubmit}
      />
      
      <ResponsesContainer>
        <SectionTitle>Strategic Planning Responses</SectionTitle>
        
        {responses.length > 0 ? (
          responses.map(response => (
            <ResponseCard key={response.id} response={response} />
          ))
        ) : (
          <NoResponses>
            <FiTarget size={48} style={{ color: 'var(--primary-color)', marginBottom: 'var(--spacing-4)' }} />
            <h3>No responses yet</h3>
            <p>Submit your strategic planning query to receive insights and recommendations.</p>
          </NoResponses>
        )}
      </ResponsesContainer>
    </div>
  );
}

export default StrategicPlanning;
