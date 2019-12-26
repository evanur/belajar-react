import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function Cards(props) {
  const [angka, setAngka] = useState(0);
  const { nama, harga, jenis, image } = props;
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia style={{ height: 200 }} image={image} />
          <Typography variant="h5">{nama}</Typography>
          <Typography variant="h6">{harga}</Typography>
          <Typography variant="h6">{jenis}</Typography>
          <Button
            onClick={() => setAngka(angka + 1)}
            variant="contained"
            color="primary">
            +
          </Button>
          <h3>{angka}</h3>
          <Button
            onClick={() => setAngka(angka - 1)}
            variant="contained"
            className={classes.butt}
            color="primary">
            -
          </Button>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Cards;
