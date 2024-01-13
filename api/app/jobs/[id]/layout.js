import JobPage from "../page"
export default function JobDetailLayout({children})
{
    return(<>
    <div className="flex justify-center">
    <div>
        <JobPage />
    </div>
    <div>
    {children}
    </div>
    </div>
    
    </>)
}