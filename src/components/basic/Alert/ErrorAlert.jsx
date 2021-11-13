import React, { useState, useEffect } from 'react'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

const ErrorAlert = (props) => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('エラーが発生しました。')

  useEffect(() => {
    if(props.message){
      setMessage(props.message)
    }
  }, [props.message])

  useEffect(() => {
    if(props.open){
      setOpen(props.open)
    }
  }, [props.open])

  return (
    <div>
      {open ?
        <Stack sx={{ width: '100%' }} spacing={2} >
          <Alert severity="error">
            {message}
          </Alert>
        </Stack>
        :
      ''}
    </div>
  )
}
export default ErrorAlert
