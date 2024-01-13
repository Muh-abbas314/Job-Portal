import axios from "axios"


 

// -------------HANDLERS---------


export const getJobs= async ()=>{
  const a =await axios.get("https://job-portal-761b4-default-rtdb.asia-southeast1.firebasedatabase.app/jobs.json")
  .then(res=>{
    return res.data })

console.log(a)

return a;
}

export const getById= async(id)=>{
  const jobPostDetail=await axios.get(`https://job-portal-761b4-default-rtdb.asia-southeast1.firebasedatabase.app/jobs/${id}.json`)
  .then(res=>{
   return res.data
  })
    return jobPostDetail
  
}

export const addJobs=(job)=>{
    jobs.push(job)
}


export const AddResume=async(resume)=>{
  console.log("ADD RESUME>>>>>>>>>>",resume)
  axios.post(`https://job-portal-761b4-default-rtdb.asia-southeast1.firebasedatabase.app/applicant.json`,{resume})
}
