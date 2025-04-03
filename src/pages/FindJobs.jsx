import React from 'react'
import { dropdownData } from "../Data/JobsData";
import SearchJob from '../components/SerachJob'
import { Box } from "@mui/material";


export default function FindJobs() {
  return (
    <div className='mt-5 pt-5'>
      <div className="container-fluid ">
        <div className='d-flex text-primary gap-2 justify-content-around flex-grow-1'>
          {dropdownData.map((item) => (
            <SearchJob key={item.title} title={item.title} icon={item.icon} options={item.options} />
          ))}
        </div>
      </div>


    </div>

  )
}
