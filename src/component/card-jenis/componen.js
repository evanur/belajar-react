import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import {withRouter}from 'react-router-dom'

function Cardj(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Card onClick={()=>{
          props.history.push('Makanan')
      }}>
      <CardMedia className={classes.cards}
        image="https://img.theculturetrip.com/768x432/wp-content/uploads/2017/11/indonesian-food-1348804_1280.jpg"
      />
        <Typography>indo food</Typography>
      </Card>
    </React.Fragment>
  );
}

export default withRouter(Cardj);
