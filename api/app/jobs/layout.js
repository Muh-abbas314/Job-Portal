import JobPage from "./[id]/page"
export default function JobsLayout({children})
{

return(<>
<main className="">
<div>
{children}
</div>
{/* <div className="m-2">
    <JobPage/>
</div> */}

</main>
</>)
}