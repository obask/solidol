"use strict";
/// <reference lib="dom" />
exports.__esModule = true;
exports.Fragment = exports.jsxs = exports.jsx = exports.MyNode = void 0;
// import {DOMAttributes} from "react";
// import type IntrinsicElements from "@types/react"
var MyNode = /** @class */ (function () {
    function MyNode() {
    }
    return MyNode;
}());
exports.MyNode = MyNode;
function jsx(type, props, key, __self, __source) {
    // We'll want to preserve `ref` in props to get rid of the need for
    // forwardRef components in the future, but that should happen via
    // a separate PR.
    // let normalizedProps = {}
    // let ref: any
    // for (const i in props) {
    // 	if (i == 'ref') {
    // 		ref = props[i];
    // 	} else {
    // 		normalizedProps[i] = props[i];
    // 	}
    // }
    console.log("props =");
    console.log(props);
    var vnode = {
        type: type,
        props: props,
        key: key,
        // ref,
        __source: __source,
        __self: __self
    };
    // If a Component VNode, check for and apply defaultProps.
    // Note: `type` is often a String, and can be `undefined` in development.
    // if (typeof type === 'function' && (ref = type.defaultProps)) {
    // 	for (const i in ref)
    // 		if (typeof normalizedProps[i] === 'undefined') {
    // 			normalizedProps[i] = ref[i];
    // 		}
    // }
    return vnode;
}
exports.jsx = jsx;
exports.jsxs = jsx;
var Fragment = /** @class */ (function () {
    function Fragment() {
    }
    return Fragment;
}());
exports.Fragment = Fragment;
//
// export declare namespace ijJSX {
//     type Key = string | number;
//     type KeyValuePair = { [key: string]: unknown }
//     type Child = Element | string | number;
//     type Fragment = {} | Array<Node>;
//     type Node = Child | Fragment | Component | boolean | null | undefined;
//     type Children = Node
//     type Props = KeyValuePair & { children?: Children, text?: string };
//
//     interface Element {
//         type: string;
//         props: Props;
//         key: Key | null;
//     }
//
//     type ComponentDOMElement = HTMLElement | DocumentFragment | null
//     type ComponentProps<P> = P & ijJSX.Props
//
//     interface Component<P = {}> {
//         /**
//          * (Unofficial React API)
//          *
//          * The currently rendered DOM Element.
//          *
//          * Beware that this is not compatible with the React API.
//          */
//         element: ComponentDOMElement
//
//         readonly props: ComponentProps<P>;
//
//         /**
//          * (Unofficial React API)
//          *
//          * Runs after calling `render`, but before adding the element to the DOM.
//          *
//          */
//         onWillMount? (prevElement: ComponentDOMElement): void;
//
//         /**
//          * (Unofficial React API)
//          *
//          * Runs after calling `render` and after adding the element to the DOM.
//          */
//         onDidMount? (prevElement: ComponentDOMElement): void;
//
//         render (): Node;
//     }
// }
//
//
// export declare namespace JSX {
//     // JSX node definition
//     interface Element extends ijJSX.Element {
//     }
//
//     // Component class definition
//     interface ElementClass extends ijJSX.Component<any> {
//         render (): Element;
//     }
//
//     // Property that will hold the HTML attributes of the Component
//     interface ElementAttributesProperty {
//         props: {};
//     }
//
//     // Property in 'props' that will hold the children of the Component
//     interface ElementChildrenAttribute {
//         children: ijJSX.Children;
//     }
//
//     // Common attributes of the standard HTML elements and JSX components
//     interface IntrinsicAttributes {
//         key?: ijJSX.Key
//         class?: string | string[]
//         className?: never
//
//         [key: string]: any
//     }
//
//     // Common attributes of the JSX components only
//     interface IntrinsicClassAttributes<ComponentClass> {
//
//     }
//
//     // HTML elements allowed in JSX, and their attributes definitions
//     interface IntrinsicElements {
//         [key: string]: IntrinsicAttributes
//     }
// }
