import React, { useState } from 'react'
import getFileUrlAsBase64 from '../../../services/url/getFileUrlAsBase64'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { DropzoneDialog } from 'material-ui-dropzone'
import Typography from '@material-ui/core/Typography'
import Image from 'material-ui-image'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
  button: {
    width: 300,
  }
}))

const InputProfileImage = (props) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  
  const onClickProfileImage = (files) => {
    props.setProfileImage(files[0])
    setPreviewImage(files[0])
  }

  const dispalyImage = () => {
    if(previewImage){
      const ImageData = getFileUrlAsBase64(previewImage)
      return(
        <Image
          src={ImageData}
          style= {{width: '300px'}}
        />
      )
    }
  }

  return (
    <Box>
    <Box mt={1}>
      <Typography children='プロフィール画像' />
      {dispalyImage()}
    </Box>
    <Button variant='contained' className={classes.button} color='secondary' onClick={() => setOpen(true)} children='プロフィール画像を登録する' />
      <DropzoneDialog
        acceptedFiles={['image/*']}
        cancelButtonText={'キャンセル'}
        submitButtonText={'決定'}
        maxFileSize={5000000}
        open={open}
        onClose={() => setOpen(false)}
        onSave={(files) => {
          console.log('Files:', files)
          setOpen(false)
          onClickProfileImage(files)
        }}
        showPreviews={true}
        showFileNamesInPreview={false}
        dropzoneText={'画像をドラッグアンドドロップかクリック'}
        previewText={'画像プレビュー'}
        alertSnackbarProps={{
          anchorOrigin:{ vertical: 'bottom', horizontal: 'center' },
        }}
        getFileAddedMessage	={() => 'ファイルを追加しました！'}
        getDropRejectMessage={() => 'ファイルが拒否されました！ファイルの種類かサイズをご確認ください'}
      />
    </Box>
  )
}

export default InputProfileImage
