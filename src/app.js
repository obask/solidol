"use strict";
// .. /// <reference lib="dom" />
exports.__esModule = true;
exports.App = void 0;
var preact_svg_1 = require("./assets/preact.svg");
require("./app.css");
var comp_1 = require("./comp");
var src_1 = require("../packages/solidol/src");
// import In from "solidol/jsx-runtime"
function App() {
    var _a = (0, src_1.useState)(0), count = _a[0], setCount = _a[1];
    return (<>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" class="logo" alt="Vite logo"/>
                </a>
                <a href="https://preactjs.com" target="_blank">
                    <img src={preact_svg_1["default"]} className="logo preact" alt="Preact logo"/>
                </a>
            </div>
            <h1>Vite + Preact</h1>
            <div class="card">
                <button onClick={function () { return setCount(function (count) { return count + 1; }); }}>
                    count is {count}
                </button>
                <comp_1["default"] />
                <p>
                    Edit <code>src/app.tsx</code> and save to test HMR
                </p>
            </div>
            <p class="read-the-docs">
                Click on the Vite and Preact logos to learn more
            </p>
        </>);
}
exports.App = App;
