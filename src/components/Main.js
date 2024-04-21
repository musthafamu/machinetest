import { Box, InputBase, Typography,} from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import  Cycle0 from  '../assets/images/cycle0-.jpg'
import  Cycle00 from  '../assets/images/cycle00.jpg';
import  Mains  from '../assets/images/main.jpg';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import {Avatardata} from '../assets/data/Data'
import Helmet3 from '../assets/images/helmet3.jpg'

function Main() {
  return (
    <Box width='90%' margin='70px auto'   sx={{
      display: 'flex',
      gap:5,
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: { sm: 'center' },
    }}     >
      <Box display="flex" flexDirection='column' gap={3}>
        <Box >
        <Typography variant="h6" fontSize='60px' fontWeight="bold">
            Discovering the
          </Typography>
          <Typography variant="h6" fontSize='60px' fontWeight="bold">
            Undiscovered
          </Typography>
          <Typography variant="h6" fontSize='60px' fontWeight="bold">
            Charms
          </Typography>
        </Box>
        <Box>
        <Typography>
          provider in YogaKarat with a susstainable tourism concept delivering a meaning full journey cycling tours
        </Typography>
        </Box>
        <Box
      display="flex"
      alignItems="center"
      sx={{
        border: '1px solid black', // Add black border color
        borderRadius: '23px', // Optional: add border radius
        padding: '7px', // Optional: add padding
      }}
    >
      <IconButton aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        placeholder="Search..."
        inputProps={{ 'aria-label': 'search' }}
        fullWidth
        sx={{ flexGrow: 1 }} // Allow the input to grow to fill the space
      />
  <Button
      variant="contained"
      sx={{
        backgroundColor: 'black', // Set background color to black
        color: 'white', // Set text color to white
        '&:hover': { // Remove hover effect
          backgroundColor: 'black',
        },
      }}
    >
      Search
    </Button>
    </Box>
    <Box display='flex' gap={3}>
      <img className='w-[200px] rounded-lg' src={Cycle0}  />
      <img className='w-[200px] rounded-lg' src={Cycle00}  />
    </Box>
      </Box>

      <Box>
         <img className='w-[400px] h-[600px] rounded-md' src={Mains} />
      </Box>
      <Box width='200px' height='600px'  display='flex' flexDirection='column' gap={1}  justifyContent='flex-start'>
  <Box>
    <img src={Cycle0} className='w-[200px] rounded-lg' />
  </Box>
  <Typography>
    provider in yogaKarat with a meaningful journey through cycling tours
  </Typography>
  <button className='border-2 w-[130px] px-2 mt-2 border-gray-800 rounded-lg'>Explore more</button>
  <Box display='flex ' flexDirection='column' gap={2}>
    <Typography fontWeight='bold' fontSize='40px'>4.9</Typography>
    <Typography color='gray'>Our Customer Rating</Typography>
    <Slider
                defaultValue={70}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={100}
                sx={{
                  width:'200px',
                    color: 'black', // Changes the color of the track
                    '& .MuiSlider-thumb': {
                        backgroundColor: 'black', // Changes the thumb color
                    },
                    '& .MuiSlider-track': {
                        backgroundColor: 'black', // Changes the color of the track
                    },
                    '& .MuiSlider-rail': {
                        backgroundColor: 'black', // Optional: changes the color of the rail (the part of the track that remains unselected)
                    },
                    '& .MuiSlider-mark': {
                        backgroundColor: 'black', // Changes the color of the marks
                        height: 0, // Optional: adjusts the height of the marks
                    },
                    '& .MuiSlider-markLabel': {
                        color: 'black', // Optional: changes the color of the mark labels
                    },
                    '& .MuiSlider-valueLabel': {
                        color: 'black', // Changes the text color in the bubble above the slider thumb
                        backgroundColor: 'black', // Changes the background color of the bubble
                    }
                }}
            />
            <Box marginRight='15px'>
             <AvatarGroup max={5}>


              {Avatardata.map((item)=>{
                return(

                  <Avatar alt="Remy Sharp" src={item.img} />
                )
              })}

    </AvatarGroup>
            
            </Box>

            <Box display='flex' flexDirection='column' gap={3}>
              <Typography>provider in Yogakarta with a meaningful journey</Typography>
  <button className='border-2 w-[130px] px-2 border-gray-800 rounded-lg'>Explore more</button>

            </Box>
  </Box>
</Box>

    </Box>
  )
}

export default Main