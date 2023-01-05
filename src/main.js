import './index.css'

import {render} from 'solidol/dom/client'
import {createComponent} from "solidol/render/component"
import {TodoList} from "./app"


render(() => createComponent(TodoList, {}), document.getElementById('root'));
