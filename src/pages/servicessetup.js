import React from 'react';
import { Box, Typography } from '@mui/material';

import Services from '../components/services';

const ServicesSetup = () => {
  return (
    <Box sx={{ height: '100%', backgroundColor: 'white', width: '100%', flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:'20%' }}>
      <Typography sx={{ fontWeight: 'bold', fontSize: '50px', color: 'BLACK',marginBottom:'5%' }}>OUR SERVICES</Typography>
      <Box sx={{ height: '90%', width: '90%', marginLeft: '2%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Services Image='https://template64212.motopreview.com/mt-demo/64200/64212/mt-content/uploads/2017/09/mt-1185-home-img04.jpg'  Title='GROUP CHARTERS' Description='ke the hassle and the headache out of group travel. From small gatherings to large events, our people are ready to transport your — 24/7'/>
        <Services Image='https://template64212.motopreview.com/mt-demo/64200/64212/mt-content/uploads/2017/09/mt-1185-home-img05.jpg'  Title='CORPORATE SERVICES' Description='Let our dedicated manager connect you to just the right type of vehicle for your corporate event, VIP, airport transfer, or mobile meetings.'/>
        <Services Image='https://template64212.motopreview.com/mt-demo/64200/64212/mt-content/uploads/2017/09/mt-1185-home-img06.jpg'  Title='RECEPTIVE SERVICES' Description='Through our unique partnership with Onward tour operators, we’ll provide the planning and the vehicles for your unforgettable group travel experience.' />
        
      </Box>
    </Box>
  );
}

export default ServicesSetup;
