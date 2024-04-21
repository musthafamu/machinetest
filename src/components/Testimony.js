import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Main from '../assets/images/main.jpg';
import Helmet3 from '../assets/images/helmet3.jpg';

function Testimony() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box width='90%' margin='100px auto' display='flex' flexDirection={isSmallScreen ? 'column' : 'row'}   gap={4}>
      <Box>
        <img className='w-[300px] rounded-[25%]' src={Main} alt='' />
      </Box>
      <Box>
        <Box display='flex' marginBottom='-20px' flexDirection={isSmallScreen ? 'column' : 'row'} gap={4}>
          <Typography width='600px'>
            Which means that your heart diodevsior and lings all perspir and experience increased
          </Typography>
          <img className=' mt-[-50px] w-[200px] h-[200px] rounded-full' src={Helmet3} alt='helmet' />
        </Box>
        <Box>
          <Typography fontWeight='bold' fontSize='50px'>
            Make Everyday
          </Typography>
          <Typography fontWeight='bold' fontSize='50px'>
            Extra Ordinary
          </Typography>
          <Typography fontWeight='bold' fontSize='50px'>
            journey
          </Typography>
        </Box>
        <Typography>
          Our Bikes are strength you can drive daily take a penny to work to be the gym for a meetup with friends, you
          will be rolling in style
        </Typography>
      </Box>
    </Box>
  );
}

export default Testimony;
