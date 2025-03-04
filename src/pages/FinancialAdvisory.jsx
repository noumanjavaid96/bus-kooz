import React, { useState } from 'react';
import styled from 'styled-components';
import { FiDollarSign, FiPieChart } from 'react-icons/fi';
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

function FinancialAdvisory() {
  const [responses, setResponses] = useState([]);
  
  const agent = {
    name: 'Financial Advisory Agent',
    description: 'The Financial Advisory Agent specializes in financial analysis, forecasting, and optimization strategies. It can help with analyzing financial statements, forecasting future scenarios, optimizing capital structure, and evaluating investment opportunities.'
  };
  
  const formFields = [
    {
      name: 'analysisType',
      label: 'Analysis Type',
      type: 'select',
      required: true,
      options: [
        { value: 'ANALYZE_FINANCIALS', label: 'Analyze Financial Statements' },
        { value: 'FORECAST_FINANCIALS', label: 'Forecast Financial Performance' },
        { value: 'OPTIMIZE_CAPITAL_STRUCTURE', label: 'Optimize Capital Structure' },
        { value: 'EVALUATE_INVESTMENT', label: 'Evaluate Investment Opportunity' }
      ]
    },
    {
      name: 'financialContext',
      label: 'Financial Context',
      type: 'textarea',
      required: true,
      placeholder: 'Describe your current financial situation, key metrics, and specific financial challenges or questions...',
      min: 50
    },
    {
      name: 'financialGoals',
      label: 'Financial Goals',
      type: 'textarea',
      required: true,
      placeholder: 'Outline your key financial goals and objectives (e.g., profitability targets, growth rates, debt reduction)...',
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
    console.log('Submitting to Financial Advisory Agent:', values);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock response
    const newResponse = {
      id: Date.now(),
      agent: 'Financial Advisory Agent',
      timestamp: new Date().toISOString(),
      content: `Based on the financial information provided, I've conducted a comprehensive analysis of your current financial position and developed recommendations aligned with your stated goals.

Your current financial metrics show some areas of strength and several opportunities for improvement:

Liquidity: Current ratio of 1.2 is below industry average (1.8), indicating potential short-term liquidity challenges
Profitability: Gross margin of 35% is strong, but operating margin of 8% suggests opportunities for operational efficiency
Leverage: Debt-to-equity ratio of 1.5 is higher than industry average (0.9), creating financial risk
Cash Flow: Operating cash flow is positive but declining, with free cash flow constrained by recent capital expenditures

Your financial goals of improving profitability while funding growth and reducing leverage are achievable but will require careful prioritization and execution. The current capital structure is not optimally aligned with your growth objectives and risk profile.`,
      recommendations: [
        'Implement working capital optimization program to improve liquidity position',
        'Conduct detailed cost structure analysis to identify operational efficiency opportunities',
        'Refinance high-interest debt to reduce interest expense and extend maturity profile',
        'Develop phased capital expenditure plan aligned with strategic priorities and cash flow capacity'
      ],
      nextSteps: [
        'Develop detailed cash flow forecast for next 12 months',
        'Identify specific working capital improvement initiatives with quantified targets',
        'Engage with banking partners to explore refinancing options',
        'Create financial dashboard with key metrics aligned to strategic objectives'
      ]
    };
    
    setResponses([newResponse, ...responses]);
  };

  return (
    <div>
      <PageTitle>Financial Advisory</PageTitle>
      <PageDescription>
        Leverage our Financial Advisory Agent to analyze your financial performance, forecast future scenarios, 
        and develop optimization strategies. This agent specializes in financial analysis, capital structure 
        optimization, and investment evaluation.
      </PageDescription>
      
      <AgentInteractionForm 
        agent={agent}
        fields={formFields}
        onSubmit={handleSubmit}
      />
      
      <ResponsesContainer>
        <SectionTitle>Financial Advisory Responses</SectionTitle>
        
        {responses.length > 0 ? (
          responses.map(response => (
            <ResponseCard key={response.id} response={response} />
          ))
        ) : (
          <NoResponses>
            <FiPieChart size={48} style={{ color: 'var(--secondary-color)', marginBottom: 'var(--spacing-4)' }} />
            <h3>No responses yet</h3>
            <p>Submit your financial advisory query to receive insights and recommendations.</p>
          </NoResponses>
        )}
      </ResponsesContainer>
    </div>
  );
}

export default FinancialAdvisory;
