
import React from 'react'
import { useLoaderData } from 'react-router-dom'

const JobDetails = () => {

    const JobDetails = useLoaderData()

  return (
    <div className='job-details'>
      <p><b> Job Title: </b> {JobDetails.title} </p>
      <p><b> Salary: </b> {JobDetails.salary} </p>
      <p><b> Job Location: </b> {JobDetails.location} </p>
      <p><b> Description : </b> Are you passionate about creating exciting and user-friendly websites? We are looking for a friendly and talented web Developer to join our vibrant team! In this role, ypu'll collaborate solutions to life. Your expertise will play a crucial role in enhancing our online presence and creating engaging user experiences. </p>
      <button>Apply Now</button>
    </div>
  )
}
export default JobDetails

export const jobDetailsLoader = async ({params})=>{
    const {id} = params;
    const res = await fetch("http://localhost:5000/jobs/" + id)
    if(!res.ok){
        throw Error("Could not found job details")
    }
    return res.json();
}
