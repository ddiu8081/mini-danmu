import type { Component } from 'solid-js'
import { Match, Switch } from 'solid-js'

import { Settings } from './routes/Settings'
import { Danmu } from './routes/Danmu'

const App: Component = () => {
  const url = window.location.search
  const urlParams = new URLSearchParams(url)
  const roomParam = urlParams.get('room')
  const lotteryParam = urlParams.get('lottery')
  const superchatParam = urlParams.get('superchat')

  const enableLottery: boolean = lotteryParam === null ? false : (JSON.parse(lotteryParam) || false)
  const enableSuperchat: boolean = superchatParam === null ? false : (JSON.parse(superchatParam) || true)

  const roomId = ~~(Number(roomParam) || 652581)
  return (
    <>
      <Switch>
        <Match when={roomParam === null}>
          <Settings />
        </Match>
        <Match when={roomParam !== null}>
          <Danmu roomId={roomId} lottery={enableLottery} superchat={enableSuperchat} />
        </Match>
      </Switch>
    </>
  )
}

export default App
