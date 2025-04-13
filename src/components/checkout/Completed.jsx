import { Alert, AlertTitle } from '@mui/material'
import React from 'react'

const Completed = () => {
  return (
    <div className='h-96 flex justify-center items-center'>
        <Alert severity="warning" variant='filled' style={{ maxWidth: "400px" }}>
            <AlertTitle>Medication Successful</AlertTitle>
            Your medication was successfully added. Enjoy being served by your Home Buddy
            </Alert>
    </div>
  )
}

export default Completed;