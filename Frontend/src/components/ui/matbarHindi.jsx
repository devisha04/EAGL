import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Link to="/">
          <button
            style={{
              backgroundColor: '#E0FBE2',
              color: 'black',
              border: 'none',
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              borderRadius: '5px',
            }}
          >
            अंग्रेज़ी
          </button>
        </Link>
          <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center', gap: 2 }}>
            <Typography
              variant="body1"
              component={Link}
              to="/"
              sx={{ cursor: 'pointer' }}
            >
              घर
            </Typography>
            <Typography
              variant="body1"
              component={Link}
              to="/about"
              sx={{ cursor: 'pointer' }}
            >
              मदद करने की इच्छा है?
            </Typography>
           
          </Box>
          {/* Login Button */}
          <div className="absolute top-4 right-4 z-10 flex gap-4">
        <Link to="/login">
          <button
            style={{
              backgroundColor: '#E0FBE2',
              color: 'black',
              border: 'none',
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              borderRadius: '5px',
            }}
          >
          लॉग इन करें
          </button>
        </Link>
        
        <Link to="/signup">
          <button
            style={{
              backgroundColor: '#E0FBE2',
              color: 'black',
              border: 'none',
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              borderRadius: '5px',
            }}
          >
            साइन अप करें
          </button>
        </Link>
      </div>

          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
