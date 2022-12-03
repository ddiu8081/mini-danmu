import { For, createSignal, createEffect } from 'solid-js'
import type { Component } from 'solid-js'
import { startListen } from 'blive-message-listener/browser'
import type { MsgHandler, DanmuMsg } from 'blive-message-listener'
import { Item } from './components/Item'

let listDom: HTMLDivElement
const [danmuList, setDanmuList] = createSignal<DanmuMsg[]>([])

const handler: MsgHandler = {
  onIncomeDanmu: (msg) => {
    setDanmuList((list) => [...list, msg.body])
    setTimeout(() => {
      listDom && (listDom.scrollTop = listDom.scrollHeight)
    }, 10)
    setTimeout(() => {
      setDanmuList((list) => list.slice(1))
    }, 15000)
  },
}

const instance = startListen(652581, handler)

const App: Component = () => {
  return (
    <>
      <main
        class="list"
        ref={listDom!}
        flex flex-col
      >
        <div flex-1 />
        <For each={danmuList()}>
          {(item) => (
            <Item data={item} />
          )}
        </For>
      </main>
    </>
  )
}

export default App
