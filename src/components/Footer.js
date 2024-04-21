import React from 'react'
import { Box, InputBase, Typography,Button,IconButton} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Box width='90%' margin='100px auto' >
        <Box display='flex' justifyContent='space-between' flexWrap='warp'>

        <Box display='flex' flexDirection='column' gap={2} >
            <Typography fontWeight='bold'>Home</Typography>
            <Typography>Business</Typography>
            <Typography>suppliers</Typography>
            <Typography>Use Cases</Typography>
            <Typography>FAQ</Typography>
            <Typography>About Us</Typography>

        </Box>
        <Box display='flex' flexDirection='column' gap={2} >
            <Typography fontWeight='bold'>support</Typography>
            <Typography>Account</Typography>
            <Typography>Super center</Typography>
            <Typography>FeedBack</Typography>
            <Typography>contact Us</Typography>

        </Box>
        <Box display='flex' flexDirection='column' gap={2} >
            <Typography fontWeight='bold'>contact</Typography>
            <Typography>careers</Typography>
            <Typography>terms and services</Typography>
            <Typography>privacy policy</Typography>
            <Typography>Cookies Policy</Typography>
            <Typography>@ 2024 hussein All right reserved</Typography>

        </Box>
   
       
        <Box display="flex" gap={2} flexDirection='column'  >
      <Typography fontWeight="bold">
        Tranch You Later, Innovator
      </Typography>
      <Box display='flex' alignItems='center'>

      <Box sx={{ border: '1px solid black', borderRadius: '4px',  ml: 2 }}>
        <InputBase placeholder="Enter text..." fullWidth sx={{ border: '1px solid black' }} />
      </Box>
      <Button variant="contained" color="primary" sx={{ backgroundColor: 'black', '&:hover': { backgroundColor: 'black' } }}>
        Submit
      </Button>
      </Box>
      <Box>

      </Box>
    <Box display='flex'  gap={2}>
    <Box sx={{ border: '1px solid black', borderRadius: '50%' }}> {/* Add border to IconButton */}
          <IconButton bgColor='white'>
          
            <FacebookIcon />
          </IconButton>
        </Box>
    <Box sx={{ border: '1px solid black', borderRadius: '50%' }}> {/* Add border to IconButton */}
          <IconButton bgColor='white'>
          
            <TwitterIcon />
          </IconButton>
        </Box>
    <Box sx={{ border: '1px solid black', borderRadius: '50%' }}> {/* Add border to IconButton */}
          <IconButton bgColor='white'>
          
            <InstagramIcon  />
          </IconButton>
        </Box>
    <Box sx={{ border: '1px solid black', borderRadius: '50%' }}> {/* Add border to IconButton */}
          <IconButton bgColor='white'>
          
            <LinkedInIcon />
          </IconButton>
        </Box>
    </Box>
    </Box>
        </Box>
    </Box>
  )
}

export default Footer