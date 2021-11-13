import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

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
        問い合わせ先
      </Box>
      <Box display='flex' justifyContent='center' flexDirection='column' mt={3}>
        <Box 
        display='flex'
        justifyContent='center'
        // alignItems='center'
        children={<Typography children='Email: sounds.fetch.team@gmail.com' />}
        />
        <Box 
        display='flex'
        justifyContent='center'
        children={<Button children='戻る' variant='outlined' color='secondary' href='/users' className={classes.buttonBack} />} 
        width='100'
        />
        <Box 
        display='flex'
        justifyContent='center'
        children={<Button children='退会する' className={classes.buttonDelete} href='/user/delete_confirm' />}
        />
      </Box>
    </Container>
  )
}

export default Index
