import type { Accessor, Component, Setter } from 'solid-js'
import { createSignal } from 'solid-js'
import { A } from '@solidjs/router'
import { useStorage } from '../utils/useStorage'

const Settings: Component = () => {
  const [room, setRoom] = createSignal('')
  const [lottery, setLottery] = createSignal(false)
  const [superchat, setSuperchat] = createSignal(true)

  const cachedRoom = useStorage<string>('room')
  const cachedLottery = useStorage<boolean>('lottery')
  const cachedSuperchat = useStorage<boolean>('superchat')

  if (cachedRoom)
    setRoom(cachedRoom)
  if (cachedLottery)
    setLottery(true)
  if (cachedSuperchat)
    setSuperchat(true)

  const onRoomChange = (ev: Event) => {
    setRoom((ev.target as HTMLInputElement).value)
    useStorage('room', room())
  }

  const onValueChange = (ev: Event, setter: Setter<boolean>, accessor: Accessor<boolean>, key: string) => {
    setter((ev.target as HTMLInputElement).checked)
    useStorage(key, accessor())
  }

  return (
    <>
      <main w-10rem mx-a my-2rem space-y-2>
        <h1>Mini Danmu Settings</h1>
        <input
          class="block w-100% pxy"
          placeholder='请输入房间号'
          outline="none active:none"
          bg="transparent"
          border="~ rounded gray-200 dark:gray-700"
          value={room()}
          onChange={onRoomChange}
        />
        <label block py-2>
          <input type="checkbox" checked={lottery()} onChange={ev => onValueChange(ev, setLottery, lottery, 'lottery')} />允许抽奖弹幕
        </label>
        <label block py-2>
          <input type="checkbox" checked={superchat()} onChange={ev => onValueChange(ev, setSuperchat, superchat, 'superchat')} />启用醒目留言
        </label>
        <A
          class="btn block w-100% pxy bg-blue hover:bg-blue-5 text-white text-center"
          border="~ rounded gray-200 dark:gray-700"
          href={`/${room()}/${lottery()}/${superchat()}`}
        >Go
        </A>
      </main>
    </>
  )
}

export {
  Settings,
}
