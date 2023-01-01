import type { Component } from 'solid-js'
import { Route, Routes } from '@solidjs/router'

import { Settings } from './routes/Settings'
import { Danmu } from './routes/Danmu'

const App: Component = () => {
  return (
    <>
      <Routes>
        <Route path='/' component={Settings} />
        <Route path='/danmu' component={Danmu} />
      </Routes>
    </>
  )
}

export default App
