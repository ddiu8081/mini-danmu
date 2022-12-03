import { render } from 'solid-js/web'

import './index.css'
import App from './App'
import '@unocss/reset/eric-meyer.css'
import 'uno.css'

render(() => <App />, document.getElementById('root') as HTMLElement)
