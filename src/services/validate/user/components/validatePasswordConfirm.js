const validatePasswordConfirm = (password, passwordConfirm) => {
  if(password !== passwordConfirm){
    return { passwordConfirm: 'パスワードが一致しません、もう一度入力してください。' }
  }

  return { passwordConfirm: null }
}

export default validatePasswordConfirm
