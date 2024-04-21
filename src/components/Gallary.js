import { Box, Typography } from '@mui/material'
import React from 'react'
import {Sliderdata} from '../assets/data/Data'
function Gallary() {
  return (
   <Box bgcolor='black' marginTop='70px'>
    <Box  position='relative'>
        <Box display="flex" p='50px' justifyContent='center'  gap={2}>

            {Sliderdata.map((item)=>{
                return(
                <Box key={item.id}>
                       <img className='h-[400px] w-[200px]' src={item.img} alt='gallary' />
                    </Box>
                )
            })}

        </Box>
            <Box bgcolor='black' p={2} color='white'>
            <Typography
                variant='h6'
                component='div'
                sx={{
                  position: 'absolute',
                  bottom:'150px',
                  left: '20%',
                  right:'',
                  backgroundColor: 'black',
                  color: 'white',
                  padding: '8px',
                  textAlign: 'center',
                }}
              >
               Ride Bike to the Heaven
              </Typography>
            <Typography
                variant='h6'
                component='div'
                sx={{
                  position: 'absolute',
                  bottom:'100px',
                  left: '20%',
                  right:'',
                  backgroundColor: 'black',
                  color: 'white',
                  padding: '8px',
                  textAlign: 'center',
                }}
              >
               with us
              </Typography>
            </Box>
    </Box>
   </Box>
  )
}

export default Gallary