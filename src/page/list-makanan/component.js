import React from 'react';
import Data from '../../data/data-dummy'
import Card from '../../component/card'

function Makanan(){
    return(
            <div>
                {Data.map(item =>{
                    return(<Card nama={item.nama}
                    harga={item.harga}
                    jenis={item.jenis}
                    image={item.image}
                    />)
                })}
            </div>
    );
}
export default Makanan;