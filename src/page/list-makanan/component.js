import React from 'react';
import Data from '../../data/data-dummy';
import Card from '../../component/card';
import Apps from '../../component/appbar';
import Container from '@material-ui/core/Container';

function Makanan() {
  return (
    <Container maxWidth="xs">
    <div>
      <Apps go back title="indonesia food" />

      {Data.map(item =>{
        if ((item.jenis === 'indonesia food'))
          return (
            <Card
              nama={item.nama}
              harga={item.harga}
              jenis={item.jenis}
              image={item.image}
            />
          );
      })}
      
    </div>
    </Container>
  );
}
export default Makanan;
