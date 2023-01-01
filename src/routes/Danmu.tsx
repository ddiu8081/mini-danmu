import { For, createSignal } from 'solid-js'
import type { Component } from 'solid-js'
import { startListen } from 'blive-message-listener/browser'
import type { DanmuMsg, MsgHandler } from 'blive-message-listener'
import { Item } from '../components/Item'
let listDom: HTMLDivElement
const lifeTime = 15000
const [danmuList, setDanmuList] = createSignal<DanmuMsg[]>([])

// get query params
const urlParams = new URLSearchParams(window.location.search)
const roomId = ~~(urlParams.get('room') || 652581)
const lottery = ~~(urlParams.get('lottery') || false)

const handler: MsgHandler = {
  onIncomeDanmu: (msg) => {
    if (!lottery && msg.body.lottery)
      return
    setDanmuList(list => [...list, msg.body])
    setTimeout(() => {
      listDom && (listDom.scrollTop = listDom.scrollHeight)
    }, 10)
    setTimeout(() => {
      setDanmuList(list => list.slice(1))
    }, lifeTime)
  },
}

const instance = startListen(roomId, handler)

const Danmu: Component = () => {
  return (
    <>
      <main
        class="list"
        ref={listDom!}
        flex flex-col
      >
        <div flex-1 />
        <For each={danmuList()}>
          {item => (
            <Item data={item} lifeTime={lifeTime} />
          )}
        </For>
      </main>
    </>
  )
}

export {
  Danmu,
}
