import validatePasswordConfirm from './components/validatePasswordConfirm'

export const signUpValdate = (
  password,
  passwordConfirm
) => {
  const passwordConfirmMessage = 
    validatePasswordConfirm(password, passwordConfirm)

  const messages = {...passwordConfirmMessage}
  return messages
}
