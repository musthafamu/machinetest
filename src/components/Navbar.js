import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Profile from '../assets/images/profile.jpg'; 
import Logo  from '../assets/images/logo.jpg'; 

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: 'red', 
    color: 'white', 
    fontSize: 10, 
    width: '1.5rem', 
    height: '1.5rem', 
    borderRadius: '50%', 
    marginRight:"-7px"
},
}));

function Navbar() {
  return (
    <Box  sx={{ borderBottom: '1px solid black' }} >
      <Box width='90%' margin='10px auto' sx={{ display: 'flex', alignItems: 'center', justifyContent:"space-between" }}>
        <Box display="flex" alignItems='center' gap={4}>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography>
            Home
          </Typography>
          <Typography>
            Shop
          </Typography>
        </Box>
        <Box display='flex' >
          <img className='w-[30px] h-[30px]' src={Logo}  alt='logo' />
          <Typography variant="h6" fontWeight='bold' >
            CYCLE
          </Typography>
        </Box>
        <Box display='flex' alignItems='center' gap={2}>
        <Box sx={{ border: '1px solid black', borderRadius: '50%' }}> {/* Add border to IconButton */}
          <IconButton bgColor='white'>
          
            <NotificationsOutlinedIcon sx={{ fontSize: 14 }} />
          </IconButton>
        </Box>
        <Box sx={{ border: '1px solid black', borderRadius: '50%' }}> {/* Add border to IconButton */}

          <IconButton aria-label="cart">
           
            <StyledBadge badgeContent={4} color="secondary">
            <ShoppingCartOutlinedIcon  sx={{ fontSize: 14 }}/>
            </StyledBadge>
          </IconButton>
        </Box>
        <img className='w-[40px] h-[40px] object-cover rounded-full' src={Profile} alt='account' />

        </Box>
      </Box>
    </Box>
  )
}

export default Navbar;
