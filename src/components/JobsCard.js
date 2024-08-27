import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import JobSkills from "./JobSkills"
import { styled } from "@mui/material/styles";


export default function JobsCard({ job }) {
  const CardStyle = styled(Card)(({ theme }) => ({
    boxShadow: "none",
    border: "1px solid black",
    width: "300px",
    height: "240px",
    margin: "auto",
    backgroundColor: "#424242",
  }));
  return (
    <CardStyle  ariant="outlined">
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
        padding="5px"
      >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{margin: "0",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "1.5",
    letterSpacing: "0.00938em",
    borderBottom: "solid 0.5px #bcaaa4",
    color: "white"}}>
          {job.title}
        </Typography>
        <JobSkills skills={job.skills}/>
        <Typography variant="body2" color="text.secondary" sx={{color: "#fff"}}>
          {job.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" 
        variant="contained"
        sx={{ width: "130px", backgroundColor: "#df9e0b", color: "black", fontSize: "13px", }}
        >Learn More</Button>
      </CardActions>
      </Stack>
    </CardStyle>
  );
}
