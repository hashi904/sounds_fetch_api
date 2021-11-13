import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  buttonBack: {
    fontWeight: 600,
    width: 200,
    padding: 10,
  },
  buttonDelete: {
    marginTop: 50,
    width: 80,
  }
}))

const Index = ()=> {
  const classes = useStyles()

  return (
    <Container>
      <Box display='flex' justifyContent='center' mt={15}>
        認証用メールを送信しました。
      </Box>
      <Box display='flex' justifyContent='center' flexDirection='column' mt={3}>
        <Box 
        display='flex'
        justifyContent='center'
        children={<Button children='トップに戻る' variant='outlined' color='secondary' href='/users' className={classes.buttonBack} />} 
        width='100'
        />
      </Box>
    </Container>
  )
}

export default Index
