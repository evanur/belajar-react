import React from 'react';
import Apps from '../../component/appbar';
import Container from '@material-ui/core/Container';
import Cardj from '../../component/card-jenis'
import Fasts from '../../component/fast-food'
import  Nav from '../../component/navigation'


function Home() {
  return (
    <Container maxWidth="xs">
      <Apps title="ini home" />
      <Cardj/>
      <Fasts/>
      <Nav/>
    </Container>
  );
}
export default Home;
