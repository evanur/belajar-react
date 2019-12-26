import React from 'react';

const siswa=["fifit","rere","evan","eval","malicha","yuan"]
class About extends React.Component {
  render() {
    return (
      <div>
{siswa.map(item=>{
      return <h1>{item}</h1>
})}
      </div>
    );
  }
}

export default About;