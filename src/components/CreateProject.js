import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/createProject.css'
const CreateProject = ({ onNext }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem('createProject', JSON.stringify(data));
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Create a project</h2>
      <label>Project Name</label>
      <input {...register('projectName')} placeholder="Enter project name" required />

      <div className="client-row">
        <div className="form-group">
          <label>Client</label>
          <input {...register('client')} placeholder="Select a client" required />
        </div>
        <div className="or-divider">
          <span>or</span>
        </div>
        <div className="form-group">
          <label>&nbsp;</label>
          <input {...register('newClient')} placeholder="+ new client" />
        </div>
      </div>

      <div className="date-row">
        <div className="form-group">
          <label>Start Date</label>
          <input type="date" {...register('startDate')} required />
        </div>
        <div className="or-divider">
          <span>-</span>
        </div>
        <div className="form-group">
          <label>End Date</label>
          <input type="date" {...register('endDate')} required />
        </div>
      </div>

      <label>Notes</label>
      <textarea {...register('notes')} placeholder="Optional"></textarea>

      <button type="submit" className="next-button">Next</button>
    </form>
  );
};

export default CreateProject;
