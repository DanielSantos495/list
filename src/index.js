import React from 'react'
import ReactDOM from 'react-dom'

import { GlobalStyles } from './globalStyles'
import { Layout } from './layout'


ReactDOM.render(
  <>
    <GlobalStyles />
    <Layout>
      <h1>Test</h1>
    </Layout>
  </>,
  document.getElementById('app')
)