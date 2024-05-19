import { Box, Typography } from '@mui/material';
import React from 'react';
import Cards from '../components/cards';


const CardsSetup = () => {
  return (
    <Box sx={{ height: '120%', backgroundColor: 'rgb(245,245,245)', width: '100%',marginTop:'15%' }}>
    <Typography sx={{ fontWeight: 'bold', fontSize: '40px', color: 'rgb(56,56,56)',marginLeft:'30%' }}>POPULAR BUS TICKETS</Typography>
      <Box sx={{ height: '100%', width: '100%', backgroundColor: 'rgb(245,245,245)', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',margintop:'10%' }}>
        <Cards Image='https://template64212.motopreview.com/mt-demo/64200/64212/mt-content/uploads/2017/09/mt-1185-home-img01.jpg' Title='BOSTON  <  NEW YORK' Description='5 hours 10 minutes' Price='Price: $90' />
        <Cards Image='https://template64212.motopreview.com/mt-demo/64200/64212/mt-content/uploads/2017/09/mt-1185-home-img02.jpg' Title='WASHINGTON<BOSTON' Description='7 hours 10 minutes' Price='Price: $200' />
        <Cards Image='https://template64212.motopreview.com/mt-demo/64200/64212/mt-content/uploads/2017/09/mt-1185-home-img03.jpg' Title='HUNGRY>BELGIUM' Description='5 hours 50 minutes' Price='Price: $250' />
        
      </Box>
    </Box>
  );
}

export default CardsSetup;

