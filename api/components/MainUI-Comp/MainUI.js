"use client"
import { useState, useEffect } from "react"
// import JobComp from "../JobComponent/JobComp"
import axios from "axios"
import { IoLocationSharp } from "react-icons/io5";
import { v4 } from "uuid";
import './MainUI.css'
import { IoPaperPlaneSharp } from "react-icons/io5";
import { HiBolt } from "react-icons/hi2";



export default function MainUI(props)
{
   

  const [value,setValue]=useState()
  const [searchQuery,setQuery]=useState("")
  const [state,setState]=useState([])
    
  useEffect(()=>{
        axios.get(`/api/jobs`)
        .then(res=>{
            const data=res.data
            console.log("API CALL ",data)
            setState([data])
        })
    },[])

    let locations=state[0]?.map(item=>{
        // console.log("location------------> ",item)
       const {location}=item
       return location
    })
    // Making array unique
    locations=[...new Set(locations)] 
   
    const renderJobs=state.map(item=>{
    
        return item.filter(obj=>{
            console.log(obj)
            return obj.title.toLowerCase().startsWith(searchQuery) || obj.location.startsWith(value)
        })
            .map(obj=>{
                return <JobComp data={obj} />
            //     return ( <Link href={`/${props.data.id}`}>
            //     <main className="my-2 rounded-lg border shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
            //     <div className="flex flex-col ">
            //        <h3 className="font-bold mx-2">  {props.data.title}</h3>
            //        <p className="mx-2"> {props.data.company}</p>
            //        <p className="mx-2">{props.data.location}</p>
            //        <div className="my-2">
            //         <span className="font-semibold bg-slate-300 rounded-md py-1 px-2 text-center mx-2">
            //             {props.data.expectedPackage}
            //         </span>
            //         <span className="font-semibold bg-slate-300 rounded-md py-1 px-2 text-center mx-2">
            //             {props.data.job_type}
            //         </span>
        
            //        </div>
            //        <div>
            //       <div className="flex mx-2"> 
            //         <span className="flex items-center">
            //             <IoPaperPlaneSharp className="rotate-45 mx-2 " /> Easily Apply
            //         </span> 
                   
            //             {props.data.responsive_emp=="true"?<span className="flex items-center"><HiBolt className="mx-2" /> Responsive Employee</span>:""}
        
            //      </div>
            //        </div>
            //         </div>
            //     </main>
            //    </Link>
            //    )
            })
    })
    console.log(state,"  ",renderJobs)


    const onChange=(e)=>{
        setValue(e.target.value)
    }

    

    if (state.length < 1 ) return (<>Loading page</>)
    
    


    // --------------_DRIVER CODE_-----------
    return(<section className="flex justify-center">
        <main className="w-[90vw] ">
            <div className="flex">
                {/* Job Search */}
         <input className="w-[16rem] mx-2 border p-1 border-slate-500 rounded-md" onChange={(e)=>setQuery(e.target.value)} type="text" placeholder="Job titles, keywords or Company"/>
        <div className="App">
        <div className="search">
            <div className="zips">
                {/* city search */}
                <input placeholder="City, Zipcode..." className=" border border-slate-500 p-1 rounded-md" type="text" onChange={onChange} value={value}/>
                {/* <button onClick={()=>{FilterSearch(value)}}>Search</button> */}
            </div>
            <div className="dropdown-content ">
                {
                    // value &&
                    locations.filter(item=>item.toLowerCase().startsWith(value) && item!==value)
                    .slice(0,5)
                    .map(item=>{
                        return (<div key={v4()} onClick={(e)=>setValue(item)}>
                          <p className=" flex items-center"><IoLocationSharp className="mx-1"/>  {item}</p>
                        </div>)
                    })
                }
            </div>
         </div>
        </div>
            </div>
        {state.length==0?"No Jobs for Now":renderJobs}
    </main>
    </section>)
}

// export const getServerSideProps = async () => {
//    const response = await  axios.get(`http://localhost:3001/jobs`)
   
//         const data=response.data
      
//     return {jobs: [data]}
// }
