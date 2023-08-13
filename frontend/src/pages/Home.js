import React from 'react';
import homepic from '../Images/home1.jpg';
import Card from '@mui/material/Card';
import { Box, CardActions, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import '../index.css';

function Home() {
  return (
    <div className="home-container">
      <img src={homepic} alt="one" className="header-image" />
      <div className="home-card-container">
        <Box className="home-box">
          <Card variant="outlined" className="home-card">
            <CardContent>
              <Typography className="home-box-text">Buy Property?</Typography>
            </CardContent>
            <CardActions>
              <Link to="/buy" className="home-link">
                CLICK HERE
              </Link>
            </CardActions>
          </Card>
        </Box>
        <Box className="home-box">
          <Card variant="outlined" className="home-card">
            <CardContent>
              <Typography className="home-box-text">Rent Property?</Typography>
            </CardContent>
            <CardActions>
              <Link to="/rent" className="home-link">
                CLICK HERE
              </Link>
            </CardActions>
          </Card>
        </Box>
      </div>
    </div>
  );
}

export default Home;
