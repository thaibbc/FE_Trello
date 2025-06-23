import React from 'react'
import Box from "@mui/material/Box";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";


function Profiles() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const navigate = useNavigate();

    
  return (
    <Box>
      <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{padding: 0 }}
            aria-controls={open ? 'basic-menu-profiles' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }} alt='thaitran' src='https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/034f63d8d7539444cd3632713e3383c5.jpeg?lk3s=a5d48078&nonce=82984&refresh_token=a57f2001cca4c7ff0d532afd58945932&x-expires=1734937200&x-signature=z6x01V7ZsAetNK%2BRzo236o0YUJg%3D&shp=a5d48078&shcp=81f88b70'/>
          </IconButton>
        </Tooltip>
      <Menu
        id="basic-menu-profiles"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-profiles',
        }}
        sx={{ mt: 1.5 }}
      >
          <MenuItem onClick={handleClose}>
          <Avatar sx={{width:'28px', height:'28px', mr:2}}/> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar sx={{width:'28px', height:'28px', mr:2}}/> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={() => navigate("/")}>
          <Link href="https://www.facebook.com/" target="_blank" rel="noopener" underline="none" sx={{ color: 'inherit', display: 'flex', alignItems: 'center' }}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
            Logout
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Profiles