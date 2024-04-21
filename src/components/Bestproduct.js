import React from 'react'
import {Productdata} from '../assets/data/Data'
import { Box,Typography,useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles';

function Bestproduct() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box>
      <Box>
        <Typography textAlign='center' fontSize='60px' fontWeight="bold">Our Best Products</Typography>
      </Box>
      <Box display='grid' marginTop='30px' 
      
      gridTemplateColumns={isSmallScreen ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'}
      gap={5}>

        {Productdata.map((item, index) => (
          <Box key={index} display='flex' flexDirection='column' alignItems='center'>
            <img className='w-[200px] h-[200px] rounded-full' src={item.img} alt='products' />
            <Typography>{item.text}</Typography>
            <Typography>${item.price}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Bestproduct