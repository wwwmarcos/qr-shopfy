const facebookReponse = user => ({
  type: 'FACEBOOK_RESPONSE',
  payload: {
    user
  }
})

export {
  facebookReponse
}
