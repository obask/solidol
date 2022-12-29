import { render } from './mytsx'
import { App } from './app'
import './index.css'

render(<App />, document.getElementById('app') as HTMLElement)
