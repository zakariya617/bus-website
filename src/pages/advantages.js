import { Box, Typography } from '@mui/material';
import React from 'react';

const Advantages = () => {
  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <Box sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginTop: '10%' }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: '50px', color: 'black' }}>OUR ADVANTAGES</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '40px' }}>
          <img src='https://template64212.motopreview.com/mt-demo/64200/64212/mt-content/uploads/2017/09/mt-1185-home-icons01.png' alt="Logo" style={{ height: '20%', width: '25%', marginTop: '10%',marginRight:'30%' }} />
          <Typography sx={{ fontWeight: 'bold', fontSize: '30px', color: 'black', textAlign: 'center', marginTop: '10px',marginRight:'30%' }}>FREE WI-FI</Typography>
          <Typography sx={{ fontSize: '20px', color: 'rgb(160,149,164)', textAlign: 'center',marginRight:'20%' }}>All buses are equipped with Wi-Fi and sockets</Typography>
         
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '40px' }}>
          <img src='https://template64212.motopreview.com/mt-demo/64200/64212/mt-content/uploads/2017/09/mt-1185-home-icons02.png' alt="Logo" style={{ height: '10%', width: '40%', marginTop: '10%',marginLeft:'35%',marginBottom:'5%' }} />
          <Typography sx={{ fontWeight: 'bold', fontSize: '20px', color: 'black', textAlign: 'center', marginTop: '10px',marginLeft:'30%' }}>SHUTTLE TO THE BUS</Typography>
          <Typography sx={{ fontSize: '20px', color: 'rgb(160,149,164)', textAlign: 'center',marginLeft:'25%' }}>Free taxi to the bus</Typography>
         
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src='https://template64212.motopreview.com/mt-demo/64200/64212/mt-content/uploads/2017/09/mt-1185-home-icons03.png' alt="Logo" style={{ height: '4%', width: '20%', marginTop: '6%',marginLeft:'50%' }} />
          <Typography sx={{ fontWeight: 'bold', fontSize: '30px', color: 'black', textAlign: 'center', marginTop: '10px',marginLeft:'45%' }}>COMFORTABLE SEATS</Typography>
          <Typography sx={{ fontSize: '20px', color: 'rgb(160,149,164)', textAlign: 'center',marginLeft:'45%' }}>You can spend 12 hours without any discomfort in our seats</Typography>
         
        </Box>
      </Box>
      
    </Box>
  );
}

export default Advantages;

