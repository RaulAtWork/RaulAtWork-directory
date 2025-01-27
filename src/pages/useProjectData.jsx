import ExternalLink from "../components/ExternalLink";
import StatusBadge, { STATUS } from "../components/StatusBadge";

import { useMemo } from "react";

const useProjectData = () => {
  const projectData = useMemo(
    () => [
      {
        name: "Refactoring UI",
        source: (
          <ExternalLink
            link="https://github.com/RaulAtWork/Refactoring-UI-Best-Practice"
            display="Github"
          />
        ),
        link: (
          <ExternalLink
            link="https://raulatwork-refactoringui.netlify.app/"
            display="Netlify"
          />
        ),
        status: <StatusBadge status={STATUS.DONE} />,
        description: "Refactoring ui adaptation",
        comment: "abandoned project",
        techs: "React, CRA",
      },
      {
        name: "Oasis UI",
        source: (
          <ExternalLink
            link="https://github.com/RaulAtWork/UI-Oasis"
            display="Github"
          />
        ),
        link: (
          <ExternalLink
          link="https://oasis-ui.netlify.app/"
          display="Netlify"
          />
        ),
        status: <StatusBadge status={STATUS.INPROGRESS} />,
        description: "Component Gallery",
        techs: "React, Vite",
      },
      {
        name: "Chroma Shift",
        status: <StatusBadge status={STATUS.DONE} />,
        description: "npm project",
        source: (
          <ExternalLink
            link="https://github.com/RaulAtWork/chroma-shift-component"
            display="Github"
          />
        ),
        link: (
          <ExternalLink
            link="https://www.npmjs.com/package/chroma-shift"
            display="npm"
          />
        ),
        techs: "React, Vite and npm"
      },
      {
        name: "Tidal Task",
        source: (
          <ExternalLink
            link="https://github.com/RaulAtWork/tidal-task"
            display="Github"
          />
        ),
        status: <StatusBadge status={STATUS.INPROGRESS} />,
        description: "Task Manager",
        techs: "React, Vite",
        link: (
          <ExternalLink
            link="https://tidal-task.netlify.app/"
            display="Netlify"
          />
        ),
      },
    ],
    []
  );

  return projectData;
};

export default useProjectData;
