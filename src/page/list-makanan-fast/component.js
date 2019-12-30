import React from 'react';
import Data from '../../data/data-dummy';
import Card from '../../component/card';
import Apps from '../../component/appbar';
import Container from '@material-ui/core/Container';

function Makana() {
  return (
    <Container maxWidth="xs">
      <div>
        <Apps title="fast food" />

        {Data.map(item => {
          if (item.jenis === 'fast food')
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
export default Makana;
