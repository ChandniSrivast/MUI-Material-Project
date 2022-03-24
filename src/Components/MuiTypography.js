import React from 'react'
import {Button} from '@mui/material'
import { useDispatch } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { actionCreator } from '../State/index'

function MuiTypography() {
 const dispatch= useDispatch()
  return (
    <div>
      
      <Button variant='contained' color="success" sx={{mr:2}} onClick={()=>dispatch(actionCreator.depositMoney(100))}>-</Button>
        Update the balance
       <Button variant='contained' color="error"  sx={{ml:2}} onClick={()=>dispatch(actionCreator.withdrawMoney(100))}>+</Button>

    </div>
  )
}

export default MuiTypography  