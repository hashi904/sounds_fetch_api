import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { changeMailConfirm } from './../../actions/changeMail'

const useStyles = makeStyles((theme) => ({
  buttonBack: {
    fontWeight: 600,
    width: 200,
    padding: 10,
    marginTop: 20,
  },
  buttonDelete: {
    marginTop: 10,
    width: 80,
  },
}))

const Index = ()=> {
  const classes = useStyles()
  const dispatch = useDispatch()
  const query = new URLSearchParams(document.location.search)
  const token = encodeURIComponent(query.get('token'))
  const constantVariable = 'SoundsFetch'
  let errorMessage = '読み込みに失敗しました。再読み込みしてください。'

  useEffect(() => {
    dispatch(changeMailConfirm(token)).then(
      (response) => {
        if (!response.message) {

          return errorMessage
        }
      },
      (error) => {
        errorMessage = error.message || errorMessage

        return errorMessage
      }
    )
  }, [constantVariable]) 

  return (
    <Container>
      <Box display='flex' justifyContent='center' mt={15}>
        メールアドレスの変更が完了しました。
      </Box>
      <Box display='flex' justifyContent='center' flexDirection='column' mt={3}>
        <Box 
          display='flex'
          justifyContent='center'
          children={<Button children='戻る' variant='outlined' color='secondary' href='/users' className={classes.buttonBack} />} 
          width='100'
        />
      </Box>
    </Container>
  )
}

export default Index
