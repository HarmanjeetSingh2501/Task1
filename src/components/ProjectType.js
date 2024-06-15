import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/projectType.css'; // Assuming this is your CSS file for ProjectType

const ProjectType = ({ onNext, onBack }) => {
  const { register, handleSubmit, watch } = useForm();
  const selectedType = watch('projectType', 'Time & Materials');

  const onSubmit = (data) => {
    localStorage.setItem('projectType', JSON.stringify(data));
    onNext();
  };

  return (
    
      <form onSubmit={handleSubmit(onSubmit)} className="project-type-form">
        <h2>Project Type</h2>
        <span className="view-description">Don't panic- You can also customize the permissions in settings</span>
        <div className="type-options">
          <label className={`type-option ${selectedType === 'Time & Materials' ? 'selected' : ''}`}>
            <input type="radio" {...register('projectType')} value="Time & Materials" defaultChecked />
            <span className="option-text">Time & Materials</span>
          </label>
          <label className={`type-option ${selectedType === 'Fixed Fee' ? 'selected' : ''}`}>
            <input type="radio" {...register('projectType')} value="Fixed Fee" />
            <span className="option-text">Fixed Fee</span>
          </label>
          <label className={`type-option ${selectedType === 'Non-Billable' ? 'selected' : ''}`}>
            <input type="radio" {...register('projectType')} value="Non-Billable" />
            <span className="option-text">Non-Billable</span>
          </label>
        </div>

        <label>Hourly</label>
        <input type="number" {...register('hourlyRate')} placeholder="Enter hourly rate" required />

        <label>Budget</label>
        <input type="number" {...register('budget')} placeholder="Enter budget" required />

        <label>
          <input type="checkbox" {...register('budgetReset')} />
          Budget resets every month
        </label>

        <label>
          <input type="checkbox" {...register('emailAlerts')} />
          Send email alerts if project exceeds
          <input type="number" {...register('alertPercentage')} placeholder="80" />
          % of budget
        </label>

        <div className="button-group">
          <button type="button" onClick={onBack} className="back-button">Back</button>
          <button type="submit" className="next-button">Next</button>
        </div>
      </form>
  
  );
};

export default ProjectType;
