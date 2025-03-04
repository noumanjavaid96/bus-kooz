import React, { useState } from 'react';
import styled from 'styled-components';
import { FiUsers } from 'react-icons/fi';
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

function LeadershipDevelopment() {
  const [responses, setResponses] = useState([]);
  
  const agent = {
    name: 'Leadership Development Agent',
    description: 'The Leadership Development Agent specializes in assessing leadership capabilities, identifying growth opportunities, and creating personalized development plans. It can help with leadership style assessment, team dynamics evaluation, and leadership practice recommendations.'
  };
  
  const formFields = [
    {
      name: 'analysisType',
      label: 'Analysis Type',
      type: 'select',
      required: true,
      options: [
        { value: 'ASSESS_LEADERSHIP', label: 'Assess Leadership Style' },
        { value: 'DEVELOP_LEADERSHIP_PLAN', label: 'Develop Leadership Plan' },
        { value: 'EVALUATE_TEAM_DYNAMICS', label: 'Evaluate Team Dynamics' },
        { value: 'RECOMMEND_LEADERSHIP_PRACTICES', label: 'Recommend Leadership Practices' }
      ]
    },
    {
      name: 'leadershipContext',
      label: 'Leadership Context',
      type: 'textarea',
      required: true,
      placeholder: 'Describe your current leadership approach, team composition, and specific leadership challenges...',
      min: 50
    },
    {
      name: 'developmentGoals',
      label: 'Development Goals',
      type: 'textarea',
      required: true,
      placeholder: 'Outline your leadership development goals and areas where you'd like to improve...',
      min: 30
    },
    {
      name: 'leadershipModel',
      label: 'Preferred Leadership Model (Optional)',
      type: 'select',
      required: false,
      options: [
        { value: '', label: 'No preference' },
        { value: 'situational', label: 'Situational Leadership' },
        { value: 'transformational', label: 'Transformational Leadership' },
        { value: 'servantLeadership', label: 'Servant Leadership' },
        { value: 'adaptiveLeadership', label: 'Adaptive Leadership' }
      ]
    }
  ];
  
  const handleSubmit = async (values) => {
    // In a real application, this would make an API call to the backend
    console.log('Submitting to Leadership Development Agent:', values);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock response
    const newResponse = {
      id: Date.now(),
      agent: 'Leadership Development Agent',
      timestamp: new Date().toISOString(),
      content: `Based on your leadership context and development goals, I've conducted a comprehensive assessment of your leadership approach and developed personalized recommendations.

Your current leadership style appears to be primarily directive with elements of coaching, which is partially aligned with your team's needs and business context. This analysis is based on the situational leadership model, which emphasizes adapting leadership style to follower readiness levels.

Key strengths in your leadership approach:
- Strong in setting clear expectations and providing structure
- Effective at building one-on-one relationships with team members
- Successfully navigated recent organizational changes with minimal disruption

Development opportunities:
- Team decision-making processes could be more inclusive and participative
- Limited focus on long-term team member development and coaching
- Tendency to maintain high control in areas where delegation would be more effective

Your team appears to have varying levels of readiness across different task areas, suggesting the need for a more flexible leadership approach that adapts to these differences. The more experienced team members would benefit from a more delegative approach, while newer team members still need direction and coaching.`,
      recommendations: [
        'Develop a more flexible leadership style that adapts to individual team member readiness levels',
        'Implement structured coaching conversations with team members to accelerate development',
        'Create more opportunities for team input and participation in decision-making',
        'Establish clearer delegation practices with appropriate support and accountability'
      ],
      nextSteps: [
        'Complete a detailed leadership style assessment with 360-degree feedback',
        'Develop individual readiness assessments for each team member',
        'Create a leadership development plan with specific behavioral goals',
        'Establish regular reflection practices to monitor leadership effectiveness'
      ]
    };
    
    setResponses([newResponse, ...responses]);
  };

  return (
    <div>
      <PageTitle>Leadership Development</PageTitle>
      <PageDescription>
        Leverage our Leadership Development Agent to assess your leadership capabilities, identify growth 
        opportunities, and create personalized development plans. This agent specializes in leadership style 
        assessment, team dynamics evaluation, and leadership practice recommendations.
      </PageDescription>
      
      <AgentInteractionForm 
        agent={agent}
        fields={formFields}
        onSubmit={handleSubmit}
      />
      
      <ResponsesContainer>
        <SectionTitle>Leadership Development Responses</SectionTitle>
        
        {responses.length > 0 ? (
          responses.map(response => (
            <ResponseCard key={response.id} response={response} />
          ))
        ) : (
          <NoResponses>
            <FiUsers size={48} style={{ color: 'var(--accent-color)', marginBottom: 'var(--spacing-4)' }} />
            <h3>No responses yet</h3>
            <p>Submit your leadership development query to receive insights and recommendations.</p>
          </NoResponses>
        )}
      </ResponsesContainer>
    </div>
  );
}

export default LeadershipDevelopment;
