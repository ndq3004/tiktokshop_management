import React from 'react';
import { GlobalStateContext } from '../context/globalContext';

export default function Reports() {
  const context = React.useContext(GlobalStateContext);
  return (
    <div>{context.name}</div>
  )
}
