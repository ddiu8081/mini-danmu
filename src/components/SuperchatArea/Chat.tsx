import type { SuperChatMsg } from 'blive-message-listener'
import type { Component } from 'solid-js'

const Chat: Component<SuperChatMsg> = ({ user, content, content_color, price }) => {
  return (
    <div class="slide" space-y-2>
      <div flex justify-between class="uname">
        <div text-amber>{user.uname}</div>
        <div text-amber>￥{price}</div>
      </div>
      <div style={{ color: content_color }} class="content">{content}</div>
    </div>
  )
}

export {
  Chat,
}
