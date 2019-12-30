import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

function Cards(props) {
  const [angka, setAngka] = useState(0);
  const { nama, harga, jenis, image } = props;
  const { classes } = props;
  return (
    <div className={classes.details}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.grid}
            style={{ height: 150, width: 150 }}
            image={image}
          />
          <CardContent className={classes.content}>
            <Typography variant="h6">{nama}</Typography>
            <Typography variant="body3">{harga}</Typography>
            <Typography variant="body2">{jenis}</Typography>
          </CardContent>
          <CardActions className={classes.button}>
            <Button
              onClick={() => setAngka(angka + 1)}
              variant="contained"
              className={classes.butt}
              style={{ height: 30, width: 5 }}>
              +
            </Button>
            <h3>{angka}</h3>
            <Button
              onClick={() => setAngka(angka - 1)}
              variant="contained"
              className={classes.butt}
              style={{ height: 30, width: 10 }}>
              -
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Cards;
