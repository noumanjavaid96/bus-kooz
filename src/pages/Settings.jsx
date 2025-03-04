import React from 'react';
import styled from 'styled-components';
import { FiSave, FiRefreshCw } from 'react-icons/fi';

const PageTitle = styled.h1`
  margin-bottom: var(--spacing-6);
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

const FormGroup = styled.div`
  margin-bottom: var(--spacing-4);
`;

const Label = styled.label`
  display: block;
  margin-bottom: var(--spacing-2);
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: var(--spacing-3);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: var(--spacing-3);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: 1rem;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  
  input {
    width: 18px;
    height: 18px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: var(--spacing-3);
  margin-top: var(--spacing-6);
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--radius-md);
  font-weight: 500;
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

function Settings() {
  return (
    <div>
      <PageTitle>Settings</PageTitle>
      
      <Card>
        <SectionTitle>User Profile</SectionTitle>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" defaultValue="John Doe" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" defaultValue="john.doe@example.com" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="role">Role</Label>
          <Input type="text" id="role" defaultValue="Business Coach" />
        </FormGroup>
      </Card>
      
      <Card>
        <SectionTitle>Agent Settings</SectionTitle>
        <FormGroup>
          <Label htmlFor="responseDetail">Response Detail Level</Label>
          <Select id="responseDetail" defaultValue="detailed">
            <option value="concise">Concise</option>
            <option value="balanced">Balanced</option>
            <option value="detailed">Detailed</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="industryContext">Default Industry Context</Label>
          <Select id="industryContext">
            <option value="">Select Industry</option>
            <option value="technology">Technology</option>
            <option value="healthcare">Healthcare</option>
            <option value="finance">Finance</option>
            <option value="retail">Retail</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="services">Professional Services</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>Agent Preferences</Label>
          <Checkbox>
            <input type="checkbox" id="strategicPlanning" defaultChecked />
            <label htmlFor="strategicPlanning">Enable Strategic Planning Agent</label>
          </Checkbox>
          <Checkbox>
            <input type="checkbox" id="financialAdvisory" defaultChecked />
            <label htmlFor="financialAdvisory">Enable Financial Advisory Agent</label>
          </Checkbox>
          <Checkbox>
            <input type="checkbox" id="leadershipDevelopment" defaultChecked />
            <label htmlFor="leadershipDevelopment">Enable Leadership Development Agent</label>
          </Checkbox>
        </FormGroup>
      </Card>
      
      <Card>
        <SectionTitle>Notification Settings</SectionTitle>
        <FormGroup>
          <Checkbox>
            <input type="checkbox" id="emailNotifications" defaultChecked />
            <label htmlFor="emailNotifications">Email Notifications</label>
          </Checkbox>
          <Checkbox>
            <input type="checkbox" id="weeklyDigest" defaultChecked />
            <label htmlFor="weeklyDigest">Weekly Digest</label>
          </Checkbox>
          <Checkbox>
            <input type="checkbox" id="priorityAlerts" defaultChecked />
            <label htmlFor="priorityAlerts">Priority Recommendation Alerts</label>
          </Checkbox>
        </FormGroup>
      </Card>
      
      <ButtonGroup>
        <Button className="primary">
          <FiSave />
          Save Settings
        </Button>
        <Button className="secondary">
          <FiRefreshCw />
          Reset to Defaults
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Settings;
