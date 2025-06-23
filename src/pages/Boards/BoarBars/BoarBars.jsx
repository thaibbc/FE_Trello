import Box from "@mui/material/Box";
import Chip from '@mui/material/Chip';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Tooltip } from "@mui/material";
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { capitalizeFirstLetter } from '~/utils/formatters'

const Menu_Styles = {
  color: 'white',
  backgroundColor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root':{
    color: 'white'
  },
  '&:hover':{
    bgcolor: 'primary.50'
  }
}

function BoardBar({ board }) {
  return (
    <Box
    px={2} sx={{
      width: "100%",
      height: (theme) => theme.trello.boarBarHeight,
      display: "flex",
      alignItems: "center",
      justifyContent: 'space-between',
      gap: 2, 
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
    }}
  >
    <Box sx={{display:'flex', alignItems:'center' , gap: 2}}>
      <Chip sx={Menu_Styles} 
        icon={<DashboardIcon />} 
        label={board?.title}
        clickable 
      />
      <Chip sx={Menu_Styles} 
        icon={<VpnLockIcon />} 
        label={capitalizeFirstLetter(board?.type)}
        clickable 
      />
      <Chip sx={Menu_Styles} 
        icon={<AddToDriveIcon />} 
        label="Add To Google Drive" 
        clickable 
      />
      <Chip sx={Menu_Styles} 
        icon={<BoltIcon />} 
        label="Automation" 
        clickable 
      />
      <Chip sx={Menu_Styles} 
        icon={<FilterListIcon />} 
        label="Fileters" 
        clickable 
      />
    </Box>
    <Box sx={{display:'flex', alignItems:'center' , gap: 2}}>
    <Button 
      variant="outlined"
      sx={{
        fontSize:'small', 
        color:'white', 
        borderColor:'white', 
        '&:hover': {borderColor: 'white'}
      }} 
      startIcon={<PersonAddIcon/>} 
    >
      Invite
    </Button>
      <AvatarGroup
       max={4}
       sx={{
        gap: '10px',
        '& .MuiAvatar-root':{
          width:'30px',
          height: '30px',
          fontSize: 16,
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          '&:first-of-type': {bgcolor: '#a4b0be'}
        }
       }}
      >
        <Tooltip title= 'thaibbc'>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Tooltip>
        <Tooltip title= 'thaibbc'>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Tooltip>
        <Tooltip title= 'thaibbc'>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Tooltip>
        <Tooltip title= 'thaibbc'>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Tooltip>
        <Tooltip title= 'thaibbc'>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Tooltip>
        <Tooltip title= 'thaibbc'>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Tooltip>
        <Tooltip title= 'thaibbc'>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Tooltip>
        <Tooltip title= 'thaibbc'>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Tooltip>
      </AvatarGroup>
    </Box>
  </Box>

  )
}

export default BoardBar