import { For, createSignal } from 'solid-js'
import type { Component } from 'solid-js'
import { startListen } from 'blive-message-listener/browser'
import type { DanmuMsg, MsgHandler, SuperChatMsg } from 'blive-message-listener'
import { useParams } from '@solidjs/router'
import { Item } from '../components/Item'
import { SuperchatArea } from '../components/SuperchatArea'
const lifeTime = 15000

const Danmu: Component = () => {
  const [danmuList, setDanmuList] = createSignal<DanmuMsg[]>([])
  const [superchatList, setSuperchatList] = createSignal<SuperChatMsg[]>([])
  let listDom: HTMLDivElement

  const {
    room,
    lottery,
    superchat,
  } = useParams<{
    room: string
    lottery: string
    superchat: string
  }>()

  const enableLottery = JSON.parse(lottery)
  const enableSuperchat = JSON.parse(superchat)

  const roomId = ~~(Number(room) || 652581)

  const handler: MsgHandler = {
    onIncomeDanmu: (msg) => {
      if (!enableLottery && msg.body.lottery)
        return

      setDanmuList(list => [...list, msg.body])
      setTimeout(() => {
        listDom && (listDom.scrollTop = listDom.scrollHeight)
      }, 10)
      setTimeout(() => {
        setDanmuList(list => list.slice(1))
      }, lifeTime)
    },
    onIncomeSuperChat: (msg) => {
      if (!enableSuperchat)
        return
      setSuperchatList(list => [...list, msg.body])
      setTimeout(() => {
        setSuperchatList(list => list.slice(1))
      }, msg.body.time * 1000)
    },
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const instance = startListen(roomId, handler)

  return (
    <>
      <main
        class="list"
        h-100vh
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
      <SuperchatArea list={superchatList()} />
    </>
  )
}

export {
  Danmu,
}
