import React from 'react';
import { Box, Typography, Button } from '@mui/material'; 

const Cards = ({ Image, Title, Description, Price }) => {
  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', backgroundColor: "rgb(245,245,245)",marginLeft:"5%" }}>
      <Box sx={{ height: '100%', width: '95%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: '5%', marginTop:'17%' }}>
        <img src={Image} alt="Logo" style={{ height: '60%', width: '100%', marginTop:'10%' }} />
        <Typography sx={{ fontWeight: 'bold', fontSize: '30px', color: 'black', marginTop:'5%' }}>{Title}</Typography>
        <Typography sx={{ height: '20%', width: '85%', marginTop: '3%', fontSize:'18px', color: 'black' }}>{Description}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop:'5%' }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: '20px', color: 'black',marginBottom:'40%' }}>{Price}</Typography>
          <Button variant="contained" color="error" sx={{ marginLeft: '90px',color:'black'}}>Buy Now</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Cards;


