import { createSignal } from 'solid-js'
import type { Component } from 'solid-js'
import type { DanmuMsg } from 'blive-message-listener'

interface Props {
  data: DanmuMsg
  lifeTime?: number
}

export const Item: Component<Props> = ({ data, lifeTime }) => {
  const t = lifeTime || 15000
  const [animation, setAnimation] = createSignal('0.2s fade-in')
  setTimeout(() => {
    setAnimation('')
  }, 200)
  setTimeout(() => {
    setAnimation(`1s fade-out`)
  }, t - 1000)

  return (
    <div 
      my-3 style={{animation: animation()}}
    >
      <div class="uname" text="#66b395">{ data.user.uname }</div>
      <div class="content" text="truegray-300" mt-2>
      { data.emoticon ? (
        <img src={data.emoticon?.url} height={data.emoticon.height / 2} width={data.emoticon.width / 2} alt={data.content} />
      ) : data.content }
      </div>
    </div>
  )
}