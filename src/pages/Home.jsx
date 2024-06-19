import React, { useMemo } from "react";
import ProjectTable from "../components/ProjectTable";

function Home(){

    const projectData = useMemo(() => [{
        name: "Test",
        status: "in-progress"
    },
    {
        name: "Test2",
        status: "in-progress"
    },
    {
        name: "Test3",
        status: "in-progress"
    }], [])

    return (<>
        <h1>Welcome home captain.</h1>
        <ProjectTable data={projectData}/>
    </>)
}

export default Home