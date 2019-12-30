import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Gambar from '../../assets/left-arrow.png'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import {withRouter} from 'react-router-dom'

function Apps(props) {
    const {title}=props
  const { classes } = props;
  return (
    <Box display="flex" justifyContent="center">
      <AppBar className={classes.app} position="static">
        <Toolbar>
          {props.back &&(
            <IconButton
            onClick={() => {
              props.history.push('/')
            }}>
              <img src={Gambar} style={{width:20}}/>
            </IconButton>
          )}
       
        <Typography>{title}</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default withRouter(Apps);
