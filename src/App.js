import React from 'react'
import "./App.css"
// import {Button} from "@mui/material"
import SearchAppBar from './components/SearchAppBar'
import JobsCard from './components/JobsCard'
import jobs from "./jobs.json"
import { Container, Grid, Pagination, Box } from '@mui/material'
import { styled } from "@mui/material/styles";


function App() {
  return (
    <div>
      <SearchAppBar />
      <Box sx={{display: 'flex',
          justifyContent: 'center',
          textAlign:'center', p: 5, }}>
      <Grid sx={{display: "flex", flexWrap: "wrap",}} gap={5} >
      {jobs.slice(0, 5).map(job => (
        <Grid lg={3} md={4} sm={6} xs={12}>
        <JobsCard key={job.id} job={job} />
        </Grid>
      ))}
      </Grid>
      </Box>
      <Pagination
      count={3}
       sx={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            "& .MuiPaginationItem-root": {
              color: "white", // Màu của các mục pagination
            },
            "& .Mui-selected": {
              borderRadius: "50%", // Make the selected item circular
              border: "2px solid red", // Red border for selected item
              color: "white", // Text color for selected item
              backgroundColor: "red",
            },
          }} 
          />
    </div>
  )
}

export default App
