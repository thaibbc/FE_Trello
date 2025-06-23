import { useState } from "react";
import Box from "@mui/material/Box";
import AppsIcon from '@mui/icons-material/Apps';
import ModeSelect from "~/components/ModeSelect/ModeSelect";
import Typography from "@mui/material/Typography";
import Workspaces from "./Menus/Workspaces";
import Recent from "./Menus/Recent";
import Starred from "./Menus/Starred";
import Templates from "./Menus/Templates";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Profiles from "./Menus/Profiles";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function AppBar() {
  const [searchValue, setSearchValue] = useState('')
  const [focused, setFocused] = useState(false);
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
        paddingTop: "5px",
        justifyContent: 'space-between',
        gap: 2, 
        overflowX: 'auto',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0')
      }}
    >
      <Box sx={{display:'flex', alignItems:'center' , gap: 2}}>
        <AppsIcon sx={{ color: 'white' }} />
        <Box sx={{display:'flex', alignItems:'center' , gap: 0.5, fontSize:'small'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'white' }} > <path d="M19.5 2h-15A2.5 2.5 0 0 0 2 4.5v15A2.5 2.5 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 19.5 2m-8.8 15.2a1.2 1.2 0 0 1-1.2 1.2H5.8c-.66 0-1.2-.54-1.2-1.2V5.8a1.2 1.2 0 0 1 1.2-1.2h3.7c.66 0 1.2.54 1.2 1.2zm8.7-5c0 .66-.54 1.2-1.2 1.2h-3.7c-.66 0-1.2-.54-1.2-1.2V5.8c0-.66.54-1.2 1.2-1.2h3.7c.66 0 1.2.54 1.2 1.2z"/> </svg>
          <Typography variant="span" sx={{fontSize:'1.2rem', fontWeight:'bold', color:'white'}}>Trello</Typography>
        </Box>
        <Box sx={{display: {xs:'none', md:'flex'}, gap: 1}}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button variant="outlined" sx={{fontSize:'small', color: 'white', border:'none', '&:hover':{border: 'none'}}} startIcon={<LibraryAddIcon />} >Create</Button>
        </Box>
      </Box>
      <Box>
      </Box>
      <Box sx={{display:'flex', alignItems:'center' , gap: 2}}>
        <TextField
         id="outlined-search"
         label="Search..." 
         type="text" 
         size="small" 
         value={searchValue}
         onChange={(e) => setSearchValue(e.target.value)}
         onFocus={() => setFocused(true)}
         onBlur={() => setFocused(false)}
         InputProps={{
          startAdornment: (searchValue || focused) ? (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" sx={{color: 'white'}} />
            </InputAdornment>
          ): null,
          endAdornment: (
            <CloseIcon
              fontSize="small"
              sx={{color: searchValue ? 'white' : 'transparent', cursor: 'pointer' }}
              onClick={() => setSearchValue('')} 
            />
          )
         }}
         InputLabelProps={{ shrink: !!searchValue || focused, }}
         sx={{
          minWidth: '120px',
          maxWidth: '180px',
          '& label': {color: 'white'},
          '& input': {color:'white'},
          '& label.Mui-focused': {color:'white'},
          '& .MuiOutlinedInput-root': {
            '& fieldset':{borderColor:'white'},
            '&:hover fieldset':{borderColor:'white'},
            '&.Mui-focused fieldset':{borderColor:'white'}
          }
        }}
         />
        <ModeSelect />
        <Tooltip title="Notifications">
          <Badge color="warning" variant="dot" sx={{cursor:'pointer'}}>
            <NotificationsNoneIcon sx={{ color: 'white'}} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{cursor:'pointer', color: 'white'}}/>
        </Tooltip>

        <Profiles />
      </Box>
    </Box>
  );
}

export default AppBar;
