// .. /// <reference lib="dom" />

import preactLogo from './assets/preact.svg'
import './app.css'
import Comp from './comp'
import { useState } from '../packages/solidol/src'
// import In from "solidol/jsx-runtime"

export function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <a addEventListener={() => undefined} href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" class="logo" alt="Vite logo" />
                </a>
                <a href="https://preactjs.com" target="_blank">
                    <img src={preactLogo} className="logo preact" alt="Preact logo" />
                </a>
            </div>
            <h1>Vite + Preact</h1>
            <div class="card">
                <button onclick={() => setCount((count: number) => count + 1)}>
                    count is {count}
                </button>
                <Comp />
                <p>
                    Edit <code>src/app.tsx</code> and save to test HMR
                </p>
            </div>
            <p class="read-the-docs">
                Click on the Vite and Preact logos to learn more
            </p>
        </>
    )
}
