import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FiSend, FiLoader } from 'react-icons/fi';

const FormContainer = styled.div`
  background-color: var(--surface-color);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-6);
  margin-bottom: var(--spacing-6);
`;

const FormTitle = styled.h3`
  margin-bottom: var(--spacing-4);
`;

const FormDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-6);
`;

const FormGroup = styled.div`
  margin-bottom: var(--spacing-4);
`;

const Label = styled.label`
  display: block;
  margin-bottom: var(--spacing-2);
  font-weight: 500;
`;

const Input = styled(Field)`
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

const TextArea = styled(Field)`
  width: 100%;
  padding: var(--spacing-3);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const Select = styled(Field)`
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

const ErrorText = styled.div`
  color: var(--error-color);
  font-size: 0.875rem;
  margin-top: var(--spacing-1);
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  padding: var(--spacing-3) var(--spacing-6);
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--primary-dark);
  }
  
  &:disabled {
    background-color: var(--text-tertiary);
    cursor: not-allowed;
  }
`;

const Spinner = styled(FiLoader)`
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

function AgentInteractionForm({ agent, fields, onSubmit }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const initialValues = fields.reduce((acc, field) => {
    acc[field.name] = field.initialValue || '';
    return acc;
  }, {});
  
  const validationSchema = Yup.object().shape(
    fields.reduce((acc, field) => {
      let validator = Yup.string();
      
      if (field.required) {
        validator = validator.required(`${field.label} is required`);
      }
      
      if (field.min) {
        validator = validator.min(field.min, `${field.label} must be at least ${field.min} characters`);
      }
      
      if (field.max) {
        validator = validator.max(field.max, `${field.label} must be at most ${field.max} characters`);
      }
      
      acc[field.name] = validator;
      return acc;
    }, {})
  );
  
  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true);
    try {
      await onSubmit(values);
      resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer>
      <FormTitle>Interact with {agent.name}</FormTitle>
      <FormDescription>{agent.description}</FormDescription>
      
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => (
          <Form>
            {fields.map((field) => (
              <FormGroup key={field.name}>
                <Label htmlFor={field.name}>{field.label}</Label>
                {field.type === 'textarea' ? (
                  <TextArea
                    as="textarea"
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                  />
                ) : field.type === 'select' ? (
                  <Select as="select" id={field.name} name={field.name}>
                    <option value="">Select {field.label}</option>
                    {field.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Select>
                ) : (
                  <Input
                    type={field.type || 'text'}
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                  />
                )}
                <ErrorMessage name={field.name} component={ErrorText} />
              </FormGroup>
            ))}
            
            <SubmitButton type="submit" disabled={isSubmitting || !isValid}>
              {isSubmitting ? (
                <>
                  <Spinner />
                  Processing...
                </>
              ) : (
                <>
                  <FiSend />
                  Submit to {agent.name}
                </>
              )}
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
}

export default AgentInteractionForm;
