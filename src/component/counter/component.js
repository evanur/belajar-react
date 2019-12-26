import React, { useState } from 'react';

function Counter(props) {
  const [angka, setAngka] = useState(90);
  // const  {classes } = props
  return (
    <React.Fragment>
      <h1>belajar sudo yarn create react-app belajar62

</h1>
      <div>
        <h1>{angka}</h1>
        <div>
          < button
            onClick={() => setAngka(angka + 1)}
            variant="contained"
            color="primary">
            +
          </button>
          <button onClick={() => setAngka(angka - 1)}>-</button>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Counter;