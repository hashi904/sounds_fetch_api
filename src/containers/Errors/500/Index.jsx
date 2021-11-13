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
    marginTop: 20,
  },
  buttonDelete: {
    marginTop: 10,
    width: 80,
  },
}))

const Index = ()=> {
  const classes = useStyles()

  return (
    <Container>
      <Box display='flex' justifyContent='center' mt={15}>
        大変申し訳ありません。ただ今ページが繋がりにくい状態です。しばらく経ってからやり直してください。
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
