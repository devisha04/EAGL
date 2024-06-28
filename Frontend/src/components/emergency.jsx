import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function AlignItemsList() {
  return (
    <div style={{ width: '30vw', height: '30vh', overflow: 'auto' }}>
        <button style={{backgroundColor: 'red', borderRadius: '5px'}}><h1 style={{color: 'white', padding: '10px'}}>Emergency Requests</h1></button>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
            primary="Blue tongue (BT)"
            secondary={
                <React.Fragment>
                <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                >
                    Vanshika
                </Typography>
                {" — Block - Murbad"}
                </React.Fragment>
            }
            />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
            primary="Peste-des-Petits Ruminants (PPR)"
            secondary={
                <React.Fragment>
                <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                >
                    Tanmay
                </Typography>
                {" — Block - Karjat"}
                </React.Fragment>
            }
            />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
            primary="Brucellosis"
            secondary={
                <React.Fragment>
                <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                >
                    Tejas
                </Typography>
                {' — Block - Khalapur'}
                </React.Fragment>
            }
            />
        </ListItem>
        </List>
    </div>
  );
}
