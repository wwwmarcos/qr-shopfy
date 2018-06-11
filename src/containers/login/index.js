import React from 'react'
import FacebookLogin from 'react-facebook-login'

import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { facebook } from '../../actions'

import { Box, Text } from 'gestalt'

const CenterAlign = ({ children, ...rest }) => (
  <Box
    alignItems='center'
    direction='row'
    display='flex'
    justifyContent='center' {...rest}>
    {children}
  </Box>
)

const Login = ({ addUser, goToHome }) => (
  <div>
    <CenterAlign marginTop={10}>
      <Text>Login to continue</Text>
    </CenterAlign>
    <CenterAlign marginTop={10}>
      <FacebookLogin
        appId='383775762135673'
        fields='name,email,picture'
        callback={(user) => {
          addUser(user)
          goToHome()
        }} />
    </CenterAlign>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  addUser: user => dispatch(facebook.facebookReponse(user)),
  goToHome: () => push('/home')
}, dispatch)

export default connect(null, mapDispatchToProps)(Login)
