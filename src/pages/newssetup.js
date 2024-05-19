import React from 'react';
import { Box, Typography } from '@mui/material';

import News from '../components/news';

const NewsSetup = () => {
  return (
    <Box sx={{ height: '100%', backgroundColor: 'white', width: '100%', flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:'20%' }}>
      <Typography sx={{ fontWeight: 'bold', fontSize: '50px', color: 'BLACK',marginBottom:'5%' }}>OUR SERVICES</Typography>
      <Box sx={{ height: '90%', width: '90%', marginLeft: '2%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <News Image='https://template64212.motopreview.com/mt-demo/64200/64212/mt-content/uploads/2017/09/mt-1185-home-img07.jpg'  Title='GROUP CHARTERS' Description='BUS BOOKING IN THE USA – 7 THINGS YOU NEED TO KNOW BEFORE BOOKING YOUR TICKET'/>
        <News Image='https://template64212.motopreview.com/mt-demo/64200/64212/mt-content/uploads/2017/09/mt-1185-home-img08.jpg'  Title='CORPORATE ' Description='WI-FI ON BUSES: HOW OFTEN DOES IT WORK IN THE UNITED STATES ?'/>
        <News Image='https://template64212.motopreview.com/mt-demo/64200/64212/mt-content/uploads/2017/09/mt-1185-home-img09.jpg'  Title='RECEPTIVE SERVICES' Description='BACK-TO-SCHOOL BUS GAMES YOU NEED TO KNOW FOR FIELD TRIPS' />
        
      </Box>
    </Box>
  );
}

export default NewsSetup;