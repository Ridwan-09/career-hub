import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    useEffect( () => {
        const storedJobIds = getStoredJobApplication();
    }, [])

    return (
        <div>
            <h1>Jobs I applied</h1>
        </div>
    );
};

export default AppliedJobs;