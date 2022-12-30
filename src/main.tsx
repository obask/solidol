import { render } from 'solidol'
import { App } from './app'
import './index.css'
import { jsx } from 'solidol/jsx-runtime'

render(<App />, document.getElementById('app') as HTMLElement)
