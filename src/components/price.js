import React from 'react';
import { Box, Typography, Button } from '@mui/material'; 

const Price = ({ Image, Title, Description, Price }) => {
  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', backgroundColor: "white", gap: '30px' }}>
      <Box sx={{ height: '100%', width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginTop:'27%',borderColor:'blue',borderStyle:'groove' }}>
        
        <Typography sx={{ fontWeight: 'bold', fontSize: '30px', color: 'black', marginTop:'5%' }}>{Title}</Typography>
        <Typography sx={{ height: '20%', width: '85%', marginTop: '3%', fontSize:'18px', color: 'rgb(160,183,221)' }}>{Description}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop:'5%' }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: '60px', color: 'rgb(231,78,75)',marginBottom:'40%',marginLeft:'25%' }}>{Price}</Typography>
          <Button variant="contained" color="error" sx={{color:'black',marginTop:'50%',marginRight:'30%'}}>Buy Now</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Price;
