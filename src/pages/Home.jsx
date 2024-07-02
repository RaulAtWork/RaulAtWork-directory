import React from "react";
import ProjectTable from "../components/ProjectTable";
import useProjectData from "./useProjectData";

function Home() {
  const data = useProjectData()

  return (
    <>
      <h1>Welcome home captain.</h1>
      <ProjectTable data={data}/>
    </>
  );
}

export default Home;
