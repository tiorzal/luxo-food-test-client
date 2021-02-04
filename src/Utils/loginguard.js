const loginguard = (to, from, next) => {
  if(localStorage.getItem('token')){
    next()
  } else {
    next.redirect('/login')
  }
}