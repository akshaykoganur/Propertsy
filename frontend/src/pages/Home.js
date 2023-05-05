import React from 'react'
import homepic from '../Images/home.jpg'
import Card from '@mui/material/Card'
import { Box, CardActions, CardContent } from '@mui/material'
import { Typography } from 'antd'
import { Link } from 'react-router-dom'
import '../index.css'


import toast, { Toaster } from 'react-hot-toast';



function Home() {
  const notify = () => toast('Here is your toast.');
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster/>
      <img src={homepic} alt="one" width="100%" max-height="40%" />
      <div className='home'>
      <Box className='homebox'>
        <Card variant="outlined" className='homecard'>
          <CardContent>
            <Typography className='homeboxtext'>Buy Property?</Typography>
          </CardContent>
          <CardActions sx={{paddingLeft:'30%', paddingTop:'15%'}}>
            <Link to="/buy" className="homelink">
              CLICK HERE
            </Link>
          </CardActions>
        </Card>
      </Box>
      <Box className='homebox'>
        <Card variant="outlined" className='homecard'>
          <CardContent>
            <Typography className='homeboxtext'>Rent Property?</Typography>
          </CardContent>
          <CardActions sx={{paddingLeft:'30%', paddingTop:'15%'}}>
            <Link to="/rent" className="homelink">
              CLICK HERE
            </Link>
          </CardActions>
        </Card>
      </Box>
    </div>
    </div>
  )
}

export default Home