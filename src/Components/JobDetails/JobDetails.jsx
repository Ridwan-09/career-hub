import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === id);
    return (
        <div>
            <h2>Job Details of: </h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <div className="text-4xl">Details coming here</div>
                </div>
                <div className="border"></div>
            </div>
        </div>
    );
};

export default JobDetails;