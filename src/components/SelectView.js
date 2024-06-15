import React from 'react';
import { useForm } from 'react-hook-form';
import ListIcon from '../assets/listicon.png'; // Replace with your actual image paths
import GridIcon from '../assets/boardicon.png'; // Replace with your actual image paths
import '../styles/selectView.css'; // Assuming this is your CSS file for SelectView

const SelectView = ({ onNext, onBack }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem('selectView', JSON.stringify(data));
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="select-view-form">
      <h2>Select View</h2>
      <span className="view-description">You can customize the views in settings</span>

      <div className="view-options-container">
        <label className="view-option">
          <input
            id="list-radio"
            type="radio"
            {...register('view', { required: true })}
            value="List"
            style={{ display: 'none' }}
          />
          <img
            src={ListIcon}
            alt="List View"
            onClick={() => document.getElementById('list-radio').click()}
            className="view-image"
          />
          <span className="view-label">List</span> {/* Label for List View */}
        </label>

        <div className="icon-space"></div> {/* Spacer element */}

        <label className="view-option">
          <input
            id="grid-radio"
            type="radio"
            {...register('view', { required: true })}
            value="Grid"
            style={{ display: 'none' }}
          />
          <img
            src={GridIcon}
            alt="Grid View"
            onClick={() => document.getElementById('grid-radio').click()}
            className="view-image"
          />
          <span className="view-label">Grid</span> {/* Label for Grid View */}
        </label>
      </div>

      {errors.view && <p className="error-message">Please select a view option</p>}

      <div className="button-group">
        <button type="button" onClick={onBack} className="back-button">Back</button>
        <button type="submit" className="next-button">Next</button>
      </div>
    </form>
  );
};

export default SelectView;
