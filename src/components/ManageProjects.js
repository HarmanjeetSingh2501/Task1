import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/manageProjects.css'

const ManageProjects = ({ onBack }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem('manageProjects', JSON.stringify(data));
    alert('Form data saved to local storage');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Who can manage projects</h2>
      <span className="view-description">Don't panic- You can also customize the permissions in settings</span>
      <label>
        <input type="radio" {...register('manageProjects')} value="Everyone" defaultChecked />
        Everyone
      </label>
      <label>
        <input type="radio" {...register('manageProjects')} value="Only Admins" />
        Only Admins
      </label>
      <label>
        <input type="radio" {...register('manageProjects')} value="Only Specific people" />
        Only Specific people
      </label>

      <div className="button-group">
        <button type="button" onClick={onBack}>Back</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ManageProjects;