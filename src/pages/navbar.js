import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Background from './background';
import Advantages from './advantages';
import CardsSetup from './cardssetup';
import ServicesSetup from './servicessetup';
import Image from './image';
import Pricesetup from './pricesetup';
import NewsSetup from './newssetup';
import Bottom from './bottom';

const Navbar = () => {
    // State to manage the active page
    const [activePage, setActivePage] = useState('HOME');

    // Function to handle click on navigation items
    const handleNavItemClick = (page) => {
        setActivePage(page);
    };

    return ( 
        <div>
            <Box sx={{ height: '10%', width: '100%', backgroundColor: 'rgb(0,0,0)', display: 'flex', flexDirection: 'row', position: 'fixed', marginRight: '20%',top:"0",right:'0',left:'0',zIndex:'9999' }}>
                <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: "70px", alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '190%', fontWeight: 'bold', color: 'white' }}>DRIVERO</Typography>
                    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: "70px", alignItems: 'center' }}>
                        <Typography sx={{ fontSize: '100%', color: activePage === 'HOME' ? 'yellow' : 'white', cursor: 'pointer' }} onClick={() => handleNavItemClick('HOME')}>HOME</Typography> 
                        <Typography sx={{ fontSize: '100%', color: activePage === 'ABOUT US' ? 'yellow' : 'white', cursor: 'pointer' }} onClick={() => handleNavItemClick('ABOUT US')}>ABOUT US</Typography> 
                        <Typography sx={{ fontSize: '100%', color: activePage === 'Pricing' ? 'yellow' : 'white', cursor: 'pointer' }} onClick={() => handleNavItemClick('Pricing')}>Pricing</Typography> 
                        <Typography sx={{ fontSize: '100%', color: activePage === 'Contact us' ? 'yellow' : 'white', cursor: 'pointer' }} onClick={() => handleNavItemClick('Contact us')}>Contact us</Typography>
                        <Typography sx={{ fontSize: '100%', color: activePage === 'Jobs opportunity' ? 'yellow' : 'white', cursor: 'pointer' }} onClick={() => handleNavItemClick('Jobs opportunity')}>Jobs opportunity</Typography>
                        <Typography sx={{ fontSize: '100%', color: activePage === 'Services' ? 'yellow' : 'white', cursor: 'pointer' }} onClick={() => handleNavItemClick('Services')}>Services</Typography>
                        <Typography sx={{ fontSize: '100%', color: activePage === 'Drivers' ? 'yellow' : 'white', cursor: 'pointer' }} onClick={() => handleNavItemClick('Drivers')}>Drivers</Typography>
                        <Typography sx={{ fontSize: '100%', color: activePage === 'Gallery' ? 'yellow' : 'white', cursor: 'pointer' }} onClick={() => handleNavItemClick('Gallery')}>Gallery</Typography>
                    </Box>
                </Box>
            </Box>
            <Background/>
            <Advantages/>
            <CardsSetup/>
            <ServicesSetup/>
            <Image/>
            <Pricesetup/>
            <NewsSetup/>
            <Bottom/>
        </div>
    );
};

export default Navbar;
