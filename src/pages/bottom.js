import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { MailOutline, LocationOn, Call } from '@mui/icons-material';

const Bottom = () => {
  const currentYear = new Date().getFullYear();
  const [mailColor, setMailColor] = useState('rgb(255, 255, 255)');
  const [callColor, setCallColor] = useState('rgb(255, 255, 255)');
  const [locationColor, setLocationColor] = useState('rgb(255, 255, 255)');

  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ height: '70%', width: '100%', display: 'flex', backgroundColor: 'rgb(31,31,31)', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ height: '100%', width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '70px', marginRight: '5%' }}>
          <Typography sx={{ fontSize: '30px', fontWeight: 'bold', color: 'rgb(255,255,255)' }}>DRIVERO</Typography>
          <Typography sx={{ fontSize: '15px', fontWeight: 'bold', color: 'rgb(145,147,149)', marginTop: '20px' }}>
            is the leading go-to website for booking inter-city bus tickets online. Our booking system allows travelers to search and book bus tickets for over a hundred bus companies throughout the United States, Mexico, Canada, and Europe
          </Typography>
        </Box>
        <Box sx={{ height: '100%', width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '10px', marginRight: '5%' }}>
          <Typography sx={{ fontSize: '35px', fontWeight: 'bold', color: 'rgb(255,255,255)', marginBottom: '5%' }}>CONTACT US</Typography>
          <Box
            sx={{ display: 'flex', alignItems: 'center', marginTop: '20px', cursor: 'pointer', color: mailColor }}
            onMouseEnter={() => setMailColor('blue')}
            onMouseLeave={() => setMailColor('rgb(255, 255, 255)')}
          >
            <MailOutline sx={{ fontSize: '30px', marginRight: '10px' }} />
            <Typography sx={{ fontSize: '15px', fontWeight: 'bold', color: 'rgb(145,147,149)' }}>example@email.com</Typography>
          </Box>
          <Box
            sx={{ display: 'flex', alignItems: 'center', marginTop: '10px', cursor: 'pointer', color: callColor }}
            onMouseEnter={() => setCallColor('blue')}
            onMouseLeave={() => setCallColor('rgb(255, 255, 255)')}
          >
            <Call sx={{ fontSize: '30px', marginRight: '10px' }} />
            <Typography sx={{ fontSize: '15px', fontWeight: 'bold', color: 'rgb(145,147,149)' }}>+1234567890</Typography>
          </Box>
          <Box
            sx={{ display: 'flex', alignItems: 'center', marginTop: '10px', cursor: 'pointer', color: locationColor }}
            onMouseEnter={() => setLocationColor('blue')}
            onMouseLeave={() => setLocationColor('rgb(255, 255, 255)')}
          >
            <LocationOn sx={{ fontSize: '30px', marginRight: '10px' }} />
            <Typography sx={{ fontSize: '15px', fontWeight: 'bold', color: 'rgb(145,147,149)' }}>123 Street, City, Country</Typography>
          </Box>
        </Box>
        <Box sx={{ height: '100%', width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '70px', marginTop: '6%' }}>
          <Typography sx={{ fontSize: '25px', fontWeight: 'bold', color: 'rgb(255,255,255)' }}>NEWSLETTER</Typography>
          <Typography sx={{ fontSize: '15px', fontWeight: 'bold', color: 'rgb(145,147,149)', marginTop: '20px' }}>
            Want to receive exclusive information about the trips and discounts? Subscribe to our monthly newsletter and get all details right to your inbox.
          </Typography>
          <TextField id="email" label="Email Address" variant="outlined" sx={{ marginTop: '20px', width: '100%' }} />
          <Button variant="contained" sx={{ marginTop: '20px' }}>Subscribe</Button>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: 'black', width: '100%', padding: '20px', textAlign: 'center', color: 'blueviolet' }}>
        <Typography variant="body2" sx={{ fontWeight: 'bold', }}>Coded by: DELTA CODERS</Typography>
        <Typography variant="body2" sx={{ marginTop: '5px', color: 'blueviolet' }}>© {currentYear} DELTA CODERS. All rights reserved.</Typography>
      </Box>
      <Box sx={{ backgroundColor: 'black', width: '100%', padding: '5px', textAlign: 'center', color: 'blueviolet' }}>
        <Typography variant="body2" sx={{ marginTop: '5px' }}>Terms of Use | Privacy Policy</Typography>
      </Box>
    </Box>
  );
}

export default Bottom;


