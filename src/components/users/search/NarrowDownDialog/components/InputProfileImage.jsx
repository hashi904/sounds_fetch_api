import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import { DropzoneDialog } from 'material-ui-dropzone'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}))

const InputProfileImage = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  return (
    // <div className={classes.root}>
    //   <input
    //     accept='image/*'
    //     className={classes.input}
    //     id='contained-button-file'
    //     multiple
    //     type='file'
    //   />
    //   <label htmlFor='contained-button-file'>
    //     <Button
    //       variant='contained'
    //       color='primary' 
    //       component='span' 
    //       startIcon={<PhotoCamera />} 
    //       children='Upload'
    //     />
    //   </label>
    // </div>
    <Box>
    <Box mt={1}>
      <Typography children='プロフィール画像' />
    </Box>
    <Button variant='contained' color='primary' onClick={() => setOpen(true)} children='プロフィール画像' />
      <DropzoneDialog
        acceptedFiles={['image/*']}
        cancelButtonText={'cancel'}
        submitButtonText={'submit'}
        maxFileSize={5000000}
        open={open}
        onClose={() => setOpen(false)}
        onSave={(files) => {
          console.log('Files:', files)
          setOpen(false)
        }}
        showPreviews={true}
        showFileNamesInPreview={true}
      />
  </Box>

  )
}

export default InputProfileImage
