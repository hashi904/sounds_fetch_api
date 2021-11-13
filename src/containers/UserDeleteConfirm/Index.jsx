import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser } from '../../actions/auth'
import removeJwtFromLocalStrage from './../../services/authenticate/removeJwtFromLocalStrage'
import redirectForUnAuthorization from '../../services/redirect/redirectForUnAuthorization'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Loading from '../../services/ajaxEffect/loading'

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

const Index = (props)=> {
  const classes = useStyles()
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.user.token)
  const user_id = useSelector((state) => state.auth.user.user_id)
  const [isLoading, setIsLoading] = useState(false)

  const handleDeleteUser = (e) => {
    e.preventDefault()

    dispatch(deleteUser(props, user_id, token))
      .then((message) => {
        // サービス側でリダイレクト処理を実行するため削除に成功した場合下記は動作しない
        console.log(message)
        removeJwtFromLocalStrage()
        props.history.push('/top')
        window.location.reload()
      })
      .catch((error) => {
        if(error.response.status === 401){
          redirectForUnAuthorization(props)
        }

        console.log(error)
      })
  }

  return (
    <Container>
      <Box display='flex' justifyContent='center' mt={15}>
        本当に退会しますか？
      </Box>
      <Box display='flex' justifyContent='center' flexDirection='column' mt={3}>
        <Box 
          display='flex'
          justifyContent='center'
          width='100'
        >
          <Button
            variant='outlined'
            color='secondary'
            href='/users'
            className={classes.buttonBack}
          >
            戻る
          </Button>
        </Box>
        { Loading(isLoading) }
        <Box
          display='flex'
          justifyContent='center'
          disabled={isLoading}
        >
          <Button
                className={classes.buttonDelete}
                disabled={isLoading}
                onClick={handleDeleteUser}
          >
            退会する
        </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Index
