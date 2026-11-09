import React, { createContext, useContext, useState } from 'react';

const ProjectSkillContext = createContext({
  activeProject: null,
  setActiveProject: () => {},
  linkedSkills: [],
  setLinkedSkills: () => {},
});

export function ProjectSkillProvider({ children }) {
  const [activeProject, setActiveProject] = useState(null);
  const [linkedSkills, setLinkedSkills] = useState([]);

  const handleSelectProject = (project) => {
    if (activeProject?.id === project?.id) {
      setActiveProject(null);
      setLinkedSkills([]);
    } else {
      setActiveProject(project);
      setLinkedSkills(project?.linkedSkills || []);
    }
  };

  return (
    <ProjectSkillContext.Provider
      value={{
        activeProject,
        setActiveProject: handleSelectProject,
        linkedSkills,
      }}
    >
      {children}
    </ProjectSkillContext.Provider>
  );
}

export function useProjectSkill() {
  return useContext(ProjectSkillContext);
}
