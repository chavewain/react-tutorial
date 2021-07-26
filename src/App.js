import React from 'react'
import Helmet, { HelmetProvider } from 'react-helmet-async';

import Setup from './tutorial/1-useState/setup/1-error-example'
import Final from './tutorial/1-useState/final/1-error-example'

function App() {
  return (
    <div className='container'>
      <Helmet>
        <title>App Title</title>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <h2>Advanced Tutorial v2</h2>
      <Setup />
      <Final />

    </div>
  )
}

export default App
