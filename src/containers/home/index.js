import React from 'react'
import { Box, Container, Text, Icon, SearchField, IconButton } from 'gestalt'
import HomeTabs from './tabs'

import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Home = ({ goToScan }) => (
  <div>
    <Box color='white' shape='rounded' padding={3} display='flex' direction='row' alignItems='center'>
      <Box flex='grow' paddingX={2}>
        <SearchField
          accessibilityLabel='Search Field'
          id='searchField'
          onChange={({ value }) => console.log('value', value)}
          placeholder='Search'
          // value={1}
           />
      </Box>
      <Box>
        <IconButton accessibilityLabel='Scan qrcode' onClick={goToScan} icon='add-circle' size='md' />
      </Box>
    </Box>
    <Box color='white' shape='rounded' padding={3} display='flex' direction='row' alignItems='center' >
      <HomeTabs />
    </Box>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  goToScan: () => push('/qrcode')
}, dispatch)

export default connect(null, mapDispatchToProps)(Home)
