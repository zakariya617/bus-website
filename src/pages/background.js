import { Box, Typography } from '@mui/material'
import React from 'react'

const Background = () => {
  return (
    <Box sx={{ height: '70%', width: '100%' }}>
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center',background:'fixed'}}>
      <img 
        src='https://i.pinimg.com/originals/e4/38/5d/e4385d5498a380542f5497a0de60fcd7.png' 
        alt="Logo" 
        style={{ height: '100%', width: '100%' }}   
      />
      <Typography sx={{top:'6',position:'absolute',color:'black',padding:'10px',fontWeight:'bold',fontSize:'390%',colour:'blck',marginLeft:'7%'}}>PROVIDING QUALITY SERVICES AT AFFORDABLE PRICES</Typography>
     <Typography sx={{top:'10',position:'absolute',marginTop:'17%',fontWeight:'bold',color:'black',marginLeft:'8%'}}>We provide affordable and reliable bus ticket booking services online all over the world.</Typography>
     
    </Box>
  </Box>
   
   
   
  )
}

export default Background
