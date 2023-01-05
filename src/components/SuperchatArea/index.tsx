import type { SuperChatMsg } from 'blive-message-listener'
import type { Component } from 'solid-js'
import { For } from 'solid-js'
import { Chat } from './Chat'
import './index.css'

const SuperchatArea: Component<{
  list: SuperChatMsg[]
}> = (props) => {
  return (
    <div class="slides" space-y-4>
      <For each={props.list}>
        {s => <Chat {...s} />}
      </For>
    </div>
  )
}

export {
  SuperchatArea,
}
