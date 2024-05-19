import { Box, Typography } from '@mui/material'
import React from 'react'

import Price from '../components/price';

const Pricesetup = () => {
  return (
    <Box sx={{ height: '100%', backgroundColor: 'white', width: '100%',marginLeft:'2%' }}>
      <Box sx={{ height: '10%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: '50px', color: 'rgb(160,183,221)',marginTop:'10%', }}>CHARTER BUS PRICING!
        </Typography>
       
      </Box>
     
      <Box sx={{ height: '80%', width: '100%', backgroundColor:'white', display: 'flex', flexDirection:'row', justifyContent: 'center', alignItems: 'center' }}>
        <Price  Title='Mini Bus' Price='$4.99' Description='Minibus rentals are perfect for short trips that are within a 150-mile radius for 14 -38 passenger trips'/>
        <Price  Title='School Bus'  Price=' $10.99' Description='School buses are the perfect solution for small to mid-sized groups going to school field trips.'/>
        <Price  Title='Party Bus & Trolley'  Price=' $16.99' Description='Party Bus is the ideal solution for weddings, bachelor parties, birthdays, or a fun night out.

        '/>
        
      </Box>
    </Box>
  );
}

export default Pricesetup;
