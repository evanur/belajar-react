import React from 'react';

class Data extends React.Component {
  render() {
    return (
      <div>
        <h1>Nama: {this.props.nama}</h1>
        <h1>umur:{this.props.umur}</h1>
        <h1>tanggal:{this.props.tanggal}</h1>
      </div>
    );
  }
}

export default Data;
