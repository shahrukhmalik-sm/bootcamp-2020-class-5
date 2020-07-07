import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function Child() {

  let value = useContext(ValueContext);

  let updateValue = value[1];


  return (
    <div>
      Child {value[0]} <br />
      <button onClick={() => { updateValue(++value[0]) }}>Update value</button>
    </div >
  )
}

export default Child;