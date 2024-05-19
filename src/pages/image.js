import { Box, Typography } from '@mui/material'
import React from 'react'

const Image = () => {
  return (
    <Box sx={{ height: '70%', width: '100%' }}>
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <img 
        src='https://us.images.westend61.de/0001217524pw/man-and-woman-using-mobile-phones-in-the-bus-WPEF01578.jpg' 
        alt="Logo" 
        style={{ height: '100%', width: '100%' }}   
      />
      <Typography sx={{top:'6',position:'absolute',color:'white',padding:'10px',fontWeight:'bold',fontSize:'40px',colour:'white',marginLeft:'55%'}}>WITH STYLE AND COMFORT!</Typography>
     <Typography sx={{top:'10',position:'absolute',marginTop:'10%',fontWeight:'bold',color:'white',marginLeft:'55%',fontsize:'35px'}}>For us, it’s not just about getting you from point A to point B. It’s about creating an experience that moves you.</Typography>
     <Typography sx={{top:'10',position:'absolute',marginTop:'27%',fontWeight:'bold',color:'white',marginLeft:'55%',fontsize:'35px'}}>From one person to thousands of corporate events, college teams, tours and daily commutes — we do it all. While getting you to your destination in comfort and style, we stay ahead of the pack with proactive solutions, relentless passion, and innovative thinking. Go ahead, take us for a test drive.</Typography>
     
    </Box>
  </Box>
   
   
   
  )
}

export default Image
