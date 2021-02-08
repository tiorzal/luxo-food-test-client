const isTokenAvailable = () => {
  let result
  (localStorage.getItem('token'))
    ? result = true
    : result = false
  
    return result
}

export default isTokenAvailable