import React from 'react';

class Menu extends React.Component {
  state = {
    menu: [
      {
        makan: 'bakso',
        harga: 9000
      },
      {
        makan: 'lailailailaii',
        harga: 96000
      },
      {
        makan: 'lemak guerih',
        harga: 7000
      },
      {
        makan: 'soto goreng',
        harga: 8000
      }
    ]
  };
  render() {
    return (
      <div>
        <h1>eva nur mau makan</h1>
        <h1>makanan: {this.state.menu[0].makan}</h1>
        <h1>harga:{this.state.menu[0].harga}</h1>
      </div>
    );
  }
}
export default Menu;
