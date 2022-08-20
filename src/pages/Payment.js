import React from 'react'
import { GlobalStateContext } from '../context/globalContext'


export default function Payment() {
  const context = React.useContext(GlobalStateContext);
  context.name = "Ngoc"
  return (
    <div>{context.name}</div>
  )
}
