import { render } from 'solid-js/web'
import { Router } from '@solidjs/router'

import './index.css'
import App from './App'
import '@unocss/reset/eric-meyer.css'
import 'uno.css'

render(() => <Router><App /></Router>, document.getElementById('root') as HTMLElement)
