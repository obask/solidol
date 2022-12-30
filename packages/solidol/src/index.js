"use strict";
exports.__esModule = true;
exports.render = exports.useState = void 0;
function useState(a) {
    return [a, function (f) { return function (p) { return a; }; }];
}
exports.useState = useState;
function render(vnode, parent) {
    var _x = 1;
    console.log(vnode);
    if (typeof vnode.type === "function") {
        vnode.type();
    }
}
exports.render = render;
