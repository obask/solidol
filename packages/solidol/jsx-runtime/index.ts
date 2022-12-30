/// <reference lib="dom" />

/**
 * @fileoverview
 * This file exports various methods that implement Babel's "automatic" JSX runtime API:
 * - jsx(type, props, key)
 * - jsxs(type, props, key)
 * - jsxDEV(type, props, key, __source, __self)
 *
 * The implementation of createVNode here is optimized for performance.
 * Benchmarks: https://esbench.com/bench/5f6b54a0b4632100a7dcd2b3
 */

import { Key } from "preact";
import { ComponentChildren } from "preact";
import { ComponentType } from "preact";

// import type IntrinsicElements from "@types/react"

export class MyNode<T> {
    type: Function | string | undefined
}

export function jsx(type: ComponentType<{}> | string, props: { children: ComponentChildren }, key: Key, __self: string, __source: string): MyNode<any> {
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
    console.log("props =")
    console.log(props)

	const vnode = {
		type,
		props: props,
		key,
		// ref,
		__source,
		__self
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

export const jsxs = jsx

export class Fragment {fragment: true | undefined}

type HTMLAttributes<RefType> = RefType & {
    props: { children: ComponentChildren }
}

type SVGAttributes<Target> = Target


// export declare namespace JSX {
//
//     // export interface ElementChildrenAttribute {
//     //     children: any;
//     // }
//
//     interface ElementChildrenAttribute { children: {}; }
//
//
//     export interface IntrinsicElements {
//         // HTML
//         a: HTMLAttributes<HTMLAnchorElement>;
//         abbr: HTMLAttributes<HTMLElement>;
//         address: HTMLAttributes<HTMLElement>;
//         area: HTMLAttributes<HTMLAreaElement>;
//         article: HTMLAttributes<HTMLElement>;
//         aside: HTMLAttributes<HTMLElement>;
//         audio: HTMLAttributes<HTMLAudioElement>;
//         b: HTMLAttributes<HTMLElement>;
//         base: HTMLAttributes<HTMLBaseElement>;
//         bdi: HTMLAttributes<HTMLElement>;
//         bdo: HTMLAttributes<HTMLElement>;
//         big: HTMLAttributes<HTMLElement>;
//         blockquote: HTMLAttributes<HTMLQuoteElement>;
//         body: HTMLAttributes<HTMLBodyElement>;
//         br: HTMLAttributes<HTMLBRElement>;
//         button: HTMLAttributes<HTMLButtonElement>;
//         canvas: HTMLAttributes<HTMLCanvasElement>;
//         caption: HTMLAttributes<HTMLTableCaptionElement>;
//         cite: HTMLAttributes<HTMLElement>;
//         code: HTMLAttributes<HTMLElement>;
//         col: HTMLAttributes<HTMLTableColElement>;
//         colgroup: HTMLAttributes<HTMLTableColElement>;
//         data: HTMLAttributes<HTMLDataElement>;
//         datalist: HTMLAttributes<HTMLDataListElement>;
//         dd: HTMLAttributes<HTMLElement>;
//         del: HTMLAttributes<HTMLModElement>;
//         details: HTMLAttributes<HTMLDetailsElement>;
//         dfn: HTMLAttributes<HTMLElement>;
//         dialog: HTMLAttributes<HTMLDialogElement>;
//         div: HTMLAttributes<HTMLDivElement>;
//         dl: HTMLAttributes<HTMLDListElement>;
//         dt: HTMLAttributes<HTMLElement>;
//         em: HTMLAttributes<HTMLElement>;
//         embed: HTMLAttributes<HTMLEmbedElement>;
//         fieldset: HTMLAttributes<HTMLFieldSetElement>;
//         figcaption: HTMLAttributes<HTMLElement>;
//         figure: HTMLAttributes<HTMLElement>;
//         footer: HTMLAttributes<HTMLElement>;
//         form: HTMLAttributes<HTMLFormElement>;
//         h1: HTMLAttributes<HTMLHeadingElement>;
//         h2: HTMLAttributes<HTMLHeadingElement>;
//         h3: HTMLAttributes<HTMLHeadingElement>;
//         h4: HTMLAttributes<HTMLHeadingElement>;
//         h5: HTMLAttributes<HTMLHeadingElement>;
//         h6: HTMLAttributes<HTMLHeadingElement>;
//         head: HTMLAttributes<HTMLHeadElement>;
//         header: HTMLAttributes<HTMLElement>;
//         hgroup: HTMLAttributes<HTMLElement>;
//         hr: HTMLAttributes<HTMLHRElement>;
//         html: HTMLAttributes<HTMLHtmlElement>;
//         i: HTMLAttributes<HTMLElement>;
//         iframe: HTMLAttributes<HTMLIFrameElement>;
//         img: HTMLAttributes<HTMLImageElement>;
//         input: HTMLAttributes<HTMLInputElement>;
//         ins: HTMLAttributes<HTMLModElement>;
//         kbd: HTMLAttributes<HTMLElement>;
//         keygen: HTMLAttributes<HTMLUnknownElement>;
//         label: HTMLAttributes<HTMLLabelElement>;
//         legend: HTMLAttributes<HTMLLegendElement>;
//         li: HTMLAttributes<HTMLLIElement>;
//         link: HTMLAttributes<HTMLLinkElement>;
//         main: HTMLAttributes<HTMLElement>;
//         map: HTMLAttributes<HTMLMapElement>;
//         mark: HTMLAttributes<HTMLElement>;
//         marquee: HTMLAttributes<HTMLMarqueeElement>;
//         menu: HTMLAttributes<HTMLMenuElement>;
//         menuitem: HTMLAttributes<HTMLUnknownElement>;
//         meta: HTMLAttributes<HTMLMetaElement>;
//         meter: HTMLAttributes<HTMLMeterElement>;
//         nav: HTMLAttributes<HTMLElement>;
//         noscript: HTMLAttributes<HTMLElement>;
//         object: HTMLAttributes<HTMLObjectElement>;
//         ol: HTMLAttributes<HTMLOListElement>;
//         optgroup: HTMLAttributes<HTMLOptGroupElement>;
//         option: HTMLAttributes<HTMLOptionElement>;
//         output: HTMLAttributes<HTMLOutputElement>;
//         p: HTMLAttributes<HTMLParagraphElement>;
//         param: HTMLAttributes<HTMLParamElement>;
//         picture: HTMLAttributes<HTMLPictureElement>;
//         pre: HTMLAttributes<HTMLPreElement>;
//         progress: HTMLAttributes<HTMLProgressElement>;
//         q: HTMLAttributes<HTMLQuoteElement>;
//         rp: HTMLAttributes<HTMLElement>;
//         rt: HTMLAttributes<HTMLElement>;
//         ruby: HTMLAttributes<HTMLElement>;
//         s: HTMLAttributes<HTMLElement>;
//         samp: HTMLAttributes<HTMLElement>;
//         script: HTMLAttributes<HTMLScriptElement>;
//         section: HTMLAttributes<HTMLElement>;
//         select: HTMLAttributes<HTMLSelectElement>;
//         slot: HTMLAttributes<HTMLSlotElement>;
//         small: HTMLAttributes<HTMLElement>;
//         source: HTMLAttributes<HTMLSourceElement>;
//         span: HTMLAttributes<HTMLSpanElement>;
//         strong: HTMLAttributes<HTMLElement>;
//         style: HTMLAttributes<HTMLStyleElement>;
//         sub: HTMLAttributes<HTMLElement>;
//         summary: HTMLAttributes<HTMLElement>;
//         sup: HTMLAttributes<HTMLElement>;
//         table: HTMLAttributes<HTMLTableElement>;
//         tbody: HTMLAttributes<HTMLTableSectionElement>;
//         td: HTMLAttributes<HTMLTableCellElement>;
//         textarea: HTMLAttributes<HTMLTextAreaElement>;
//         tfoot: HTMLAttributes<HTMLTableSectionElement>;
//         th: HTMLAttributes<HTMLTableCellElement>;
//         thead: HTMLAttributes<HTMLTableSectionElement>;
//         time: HTMLAttributes<HTMLTimeElement>;
//         title: HTMLAttributes<HTMLTitleElement>;
//         tr: HTMLAttributes<HTMLTableRowElement>;
//         track: HTMLAttributes<HTMLTrackElement>;
//         u: HTMLAttributes<HTMLElement>;
//         ul: HTMLAttributes<HTMLUListElement>;
//         var: HTMLAttributes<HTMLElement>;
//         video: HTMLAttributes<HTMLVideoElement>;
//         wbr: HTMLAttributes<HTMLElement>;
//
//         //SVG
//         svg: SVGAttributes<SVGSVGElement>;
//         animate: SVGAttributes<SVGAnimateElement>;
//         circle: SVGAttributes<SVGCircleElement>;
//         animateTransform: SVGAttributes<SVGAnimateElement>;
//         clipPath: SVGAttributes<SVGClipPathElement>;
//         defs: SVGAttributes<SVGDefsElement>;
//         desc: SVGAttributes<SVGDescElement>;
//         ellipse: SVGAttributes<SVGEllipseElement>;
//         feBlend: SVGAttributes<SVGFEBlendElement>;
//         feColorMatrix: SVGAttributes<SVGFEColorMatrixElement>;
//         feComponentTransfer: SVGAttributes<SVGFEComponentTransferElement>;
//         feComposite: SVGAttributes<SVGFECompositeElement>;
//         feConvolveMatrix: SVGAttributes<SVGFEConvolveMatrixElement>;
//         feDiffuseLighting: SVGAttributes<SVGFEDiffuseLightingElement>;
//         feDisplacementMap: SVGAttributes<SVGFEDisplacementMapElement>;
//         feDropShadow: SVGAttributes<SVGFEDropShadowElement>;
//         feFlood: SVGAttributes<SVGFEFloodElement>;
//         feFuncA: SVGAttributes<SVGFEFuncAElement>;
//         feFuncB: SVGAttributes<SVGFEFuncBElement>;
//         feFuncG: SVGAttributes<SVGFEFuncGElement>;
//         feFuncR: SVGAttributes<SVGFEFuncRElement>;
//         feGaussianBlur: SVGAttributes<SVGFEGaussianBlurElement>;
//         feImage: SVGAttributes<SVGFEImageElement>;
//         feMerge: SVGAttributes<SVGFEMergeElement>;
//         feMergeNode: SVGAttributes<SVGFEMergeNodeElement>;
//         feMorphology: SVGAttributes<SVGFEMorphologyElement>;
//         feOffset: SVGAttributes<SVGFEOffsetElement>;
//         feSpecularLighting: SVGAttributes<SVGFESpecularLightingElement>;
//         feTile: SVGAttributes<SVGFETileElement>;
//         feTurbulence: SVGAttributes<SVGFETurbulenceElement>;
//         filter: SVGAttributes<SVGFilterElement>;
//         foreignObject: SVGAttributes<SVGForeignObjectElement>;
//         g: SVGAttributes<SVGGElement>;
//         image: SVGAttributes<SVGImageElement>;
//         line: SVGAttributes<SVGLineElement>;
//         linearGradient: SVGAttributes<SVGLinearGradientElement>;
//         marker: SVGAttributes<SVGMarkerElement>;
//         mask: SVGAttributes<SVGMaskElement>;
//         path: SVGAttributes<SVGPathElement>;
//         pattern: SVGAttributes<SVGPatternElement>;
//         polygon: SVGAttributes<SVGPolygonElement>;
//         polyline: SVGAttributes<SVGPolylineElement>;
//         radialGradient: SVGAttributes<SVGRadialGradientElement>;
//         rect: SVGAttributes<SVGRectElement>;
//         stop: SVGAttributes<SVGStopElement>;
//         symbol: SVGAttributes<SVGSymbolElement>;
//         text: SVGAttributes<SVGTextElement>;
//         textPath: SVGAttributes<SVGTextPathElement>;
//         tspan: SVGAttributes<SVGTSpanElement>;
//         use: SVGAttributes<SVGUseElement>;
//     }
// }

export declare namespace ijJSX {
    type Key = string | number;
    type KeyValuePair = { [key: string]: unknown }
    type Child = Element | string | number;
    type Fragment = {} | Array<Node>;
    type Node = Child | Fragment | Component | boolean | null | undefined;
    type Children = Node
    type Props = KeyValuePair & { children?: Children, text?: string };

    interface Element {
        type: string;
        props: Props;
        key: Key | null;
    }

    type ComponentDOMElement = HTMLElement | DocumentFragment | null
    type ComponentProps<P> = P & ijJSX.Props

    interface Component<P = {}> {
        /**
         * (Unofficial React API)
         *
         * The currently rendered DOM Element.
         *
         * Beware that this is not compatible with the React API.
         */
        element: ComponentDOMElement

        readonly props: ComponentProps<P>;

        /**
         * (Unofficial React API)
         *
         * Runs after calling `render`, but before adding the element to the DOM.
         *
         */
        onWillMount? (prevElement: ComponentDOMElement): void;

        /**
         * (Unofficial React API)
         *
         * Runs after calling `render` and after adding the element to the DOM.
         */
        onDidMount? (prevElement: ComponentDOMElement): void;

        render (): Node;
    }
}


export declare namespace JSX {
    // JSX node definition
    interface Element extends ijJSX.Element {
    }

    // Component class definition
    interface ElementClass extends ijJSX.Component<any> {
        render (): Element;
    }

    // Property that will hold the HTML attributes of the Component
    interface ElementAttributesProperty {
        props: {};
    }

    // Property in 'props' that will hold the children of the Component
    interface ElementChildrenAttribute {
        children: ijJSX.Children;
    }

    // Common attributes of the standard HTML elements and JSX components
    interface IntrinsicAttributes {
        key?: ijJSX.Key
        class?: string | string[]
        className?: never

        [key: string]: any
    }

    // Common attributes of the JSX components only
    interface IntrinsicClassAttributes<ComponentClass> {

    }

    // HTML elements allowed in JSX, and their attributes definitions
    interface IntrinsicElements {
        [key: string]: IntrinsicAttributes
    }
}