import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    useEffect( () => {
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0){
            
            const jobsApplied = [];
            for(const id of storedJobIds){
            const job = job.find(job => job.id === id);
            if(job){
                jobsApplied.push(job);
            }
            }


        }
    }, [])

    return (
        <div>
            <h1>Jobs I applied</h1>
        </div>
    );
};

export default AppliedJobs;