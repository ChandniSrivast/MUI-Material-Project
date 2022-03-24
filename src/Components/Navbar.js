import React from 'react'
import {Button} from '@mui/material'
import { useSelector } from 'react-redux'
function Navbar() {
  const amount = useSelector(state => state.amount);
  console.log(amount);
  return (
      <div>Navbar
          <Button variant='outlined'>BankBalance-{ amount}</Button><br/>
    </div>
  )
}

export default Navbar