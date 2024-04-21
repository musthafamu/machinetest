import React from 'react'
import  {CycleData} from '.././assets/data/Data'
import { Box, InputBase, Typography,} from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function Cyclecard() {
  return (
    <Box bgcolor="black" marginTop="80px" color="white" p={6}>
      <Typography textAlign="center" fontSize="50px" fontWeight="bold">
        Ride Your Cycle to Heaven With Us
      </Typography>
      <Box display="flex" flexWrap='wrap' marginTop='20px' justifyContent='center' color='black' gap={2}>
        {CycleData.map((item, index) => (
          <Box key={index} bgcolor="white" p={2} width='200px' borderRadius="20px" boxShadow={3}>
            <Box display='flex' justifyContent='space-between'>
            <Typography fontWeight="bold" fontSize="20px">
              {item.number}
            </Typography>
            
              <ArrowOutwardIcon/>
              </Box>
            <Typography mb={2}>
              {item.text}
            </Typography>
            <img src={item.img} alt={item.text || 'Cycle'} style={{ width: 200, borderRadius: '8px' }} />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Cyclecard