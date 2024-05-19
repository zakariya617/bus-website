import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Services = ({ Image, Title, Description, Price }) => {
  return (
    <Box sx={{ height: '100%', width: '50%' }}>
      <img src={Image} alt="Logo" style={{ height: '90%', width: '90%' }} />
      <Typography sx={{ fontWeight: 'bold', fontSize: '30px', color: 'black', marginTop: '5%' }}>{Title}</Typography>
      <Typography sx={{ height: '20%', width: '85%', marginTop: '3%', fontSize: '18px', color: 'black' }}>{Description}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '5%' }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: '20px', color: 'black', marginBottom: '40%' }}>{Price}</Typography>
        <Button variant="contained" color="secondary" sx={{ marginLeft: '30px', color: 'white',marginBottom:'10%' }}>LEARN MORE</Button>
      </Box>
    </Box>
  );
}

export default Services;
