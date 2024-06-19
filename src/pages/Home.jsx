import React, { useMemo } from "react";
import ProjectTable from "../components/ProjectTable";
import StatusBadge, { STATUS } from "../components/StatusBadge";
import ExternalLink from "../components/ExternalLink";

function Home() {
  const projectData = useMemo(
    () => [
      {
        name: "Refactoring UI",
        source: (
          <ExternalLink
            link="https://github.com/RaulAtWork/Refactoring-UI-Best-Practice"
            display="Source Code"
          />
        ),
        link: (
          <ExternalLink
            link="https://raulatwork-refactoringui.netlify.app/"
            display="Netlify"
          />
        ),
        status: <StatusBadge status={STATUS.INPROGRESS} />,
        description: "Refactoring ui shit",
        comment: "abandoned project",
        techs: "React, CRA",
      },
      {
        name: "Component Gallery",
        status: <StatusBadge status={STATUS.TO_DO} />,
      },
      {
        name: "Dark Theme",
        status: <StatusBadge status={STATUS.TO_DO} />,
        comment: "npm project"
      },
    ],
    []
  );

  return (
    <>
      <h1>Welcome home captain.</h1>
      <StatusBadge status={STATUS.TO_DO} />

      <StatusBadge status={STATUS.DONE} />
      <ProjectTable data={projectData} />
    </>
  );
}

export default Home;
