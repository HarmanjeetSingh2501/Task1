import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CreateProject from './components/CreateProject';
import ProjectType from './components/ProjectType';
import SelectView from './components/SelectView';
import ManageProjects from './components/ManageProjects';

function App() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CreateProject onNext={() => handleNavigation('/project-type')} />} />
        <Route path="/project-type" element={<ProjectType onNext={() => handleNavigation('/select-view')} onBack={() => handleNavigation('/')} />} />
        <Route path="/select-view" element={<SelectView onNext={() => handleNavigation('/manage-projects')} onBack={() => handleNavigation('/project-type')} />} />
        <Route path="/manage-projects" element={<ManageProjects onBack={() => handleNavigation('/select-view')} />} />
      </Routes>
    </div>
  );
}

export default App;