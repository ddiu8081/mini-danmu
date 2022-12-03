import type { Component } from 'solid-js'

interface Props {
  text: string
}

export const MyComponent: Component<Props> = (props) => {
  return (
    <div border border-red>
      My Component: { props.text }
    </div>
  )
}