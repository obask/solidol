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
// import {DOMAttributes} from "react";

// import type IntrinsicElements from "@types/react"

export class MyNode<T> {
    type: Function | string | undefined
}

export function jsx(type: ComponentType<{[s: string]: any}> | string, props: { children: ComponentChildren } | HTMLCollection, key: Key, __self: string, __source: string): MyNode<any> {
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


export interface PreactDOMAttributes {
    children?: ComponentChildren;
    dangerouslySetInnerHTML?: {
        __html: string;
    };
}




type SVGAttributes<RefType extends SVGElement> = Partial<RefType> | {
    class?: string
}


//     children?: string;
//     [s: string]: any
// }

// export interface HTMLAttributes<RefType extends EventTarget = EventTarget>
//     extends ClassAttributes<RefType>,
//         DOMAttributes<RefType> {
//
// }


// type C = {
//     [i: number] : string
// }




export declare namespace JSX {

    // export interface ElementChildrenAttribute {
    //     children: any;
    // }

    // interface ElementChildrenAttribute { children: {}; }

        // Property in 'props' that will hold the children of the Component
    // interface ElementChildrenAttribute {
        // children: any
        // [i: string] : any
    // }

    /* This approach breaks code navigation in webstorm */
    export type IntrinsicElementsSVG = {
        [P in keyof SVGElementTagNameMap]: P extends string ? SVGAttributes<SVGElementTagNameMap[P]> : never
    }

    type X = {
        [P in keyof HTMLAreaElement]: Lowercase<P>
    }

    // TODO: add `className?: never`
    type HTMLAttributes<RefType extends HTMLElement> = Partial<RefType> | {
        class?: string
    }

    type TMP = HTMLElementTagNameMap

    export interface IntrinsicElements {
        a: HTMLAttributes<HTMLAnchorElement>;
        abbr: HTMLAttributes<HTMLElement>;
        address: HTMLAttributes<HTMLElement>;
        area: HTMLAttributes<HTMLAreaElement>;
        article: HTMLAttributes<HTMLElement>;
        aside: HTMLAttributes<HTMLElement>;
        audio: HTMLAttributes<HTMLAudioElement>;
        b: HTMLAttributes<HTMLElement>;
        base: HTMLAttributes<HTMLBaseElement>;
        bdi: HTMLAttributes<HTMLElement>;
        bdo: HTMLAttributes<HTMLElement>;
        blockquote: HTMLAttributes<HTMLQuoteElement>;
        body: HTMLAttributes<HTMLBodyElement>;
        br: HTMLAttributes<HTMLBRElement>;
        button: HTMLAttributes<HTMLButtonElement>;
        canvas: HTMLAttributes<HTMLCanvasElement>;
        caption: HTMLAttributes<HTMLTableCaptionElement>;
        cite: HTMLAttributes<HTMLElement>;
        code: HTMLAttributes<HTMLElement>;
        col: HTMLAttributes<HTMLTableColElement>;
        colgroup: HTMLAttributes<HTMLTableColElement>;
        data: HTMLAttributes<HTMLDataElement>;
        datalist: HTMLAttributes<HTMLDataListElement>;
        dd: HTMLAttributes<HTMLElement>;
        del: HTMLAttributes<HTMLModElement>;
        details: HTMLAttributes<HTMLDetailsElement>;
        dfn: HTMLAttributes<HTMLElement>;
        dialog: HTMLAttributes<HTMLDialogElement>;
        div: HTMLAttributes<HTMLDivElement>;
        dl: HTMLAttributes<HTMLDListElement>;
        dt: HTMLAttributes<HTMLElement>;
        em: HTMLAttributes<HTMLElement>;
        embed: HTMLAttributes<HTMLEmbedElement>;
        fieldset: HTMLAttributes<HTMLFieldSetElement>;
        figcaption: HTMLAttributes<HTMLElement>;
        figure: HTMLAttributes<HTMLElement>;
        footer: HTMLAttributes<HTMLElement>;
        form: HTMLAttributes<HTMLFormElement>;
        h1: HTMLAttributes<HTMLHeadingElement>;
        h2: HTMLAttributes<HTMLHeadingElement>;
        h3: HTMLAttributes<HTMLHeadingElement>;
        h4: HTMLAttributes<HTMLHeadingElement>;
        h5: HTMLAttributes<HTMLHeadingElement>;
        h6: HTMLAttributes<HTMLHeadingElement>;
        head: HTMLAttributes<HTMLHeadElement>;
        header: HTMLAttributes<HTMLElement>;
        hgroup: HTMLAttributes<HTMLElement>;
        hr: HTMLAttributes<HTMLHRElement>;
        html: HTMLAttributes<HTMLHtmlElement>;
        i: HTMLAttributes<HTMLElement>;
        iframe: HTMLAttributes<HTMLIFrameElement>;
        img: HTMLAttributes<HTMLImageElement>;
        input: HTMLAttributes<HTMLInputElement>;
        ins: HTMLAttributes<HTMLModElement>;
        kbd: HTMLAttributes<HTMLElement>;
        label: HTMLAttributes<HTMLLabelElement>;
        legend: HTMLAttributes<HTMLLegendElement>;
        li: HTMLAttributes<HTMLLIElement>;
        link: HTMLAttributes<HTMLLinkElement>;
        main: HTMLAttributes<HTMLElement>;
        map: HTMLAttributes<HTMLMapElement>;
        mark: HTMLAttributes<HTMLElement>;
        menu: HTMLAttributes<HTMLMenuElement>;
        meta: HTMLAttributes<HTMLMetaElement>;
        meter: HTMLAttributes<HTMLMeterElement>;
        nav: HTMLAttributes<HTMLElement>;
        noscript: HTMLAttributes<HTMLElement>;
        object: HTMLAttributes<HTMLObjectElement>;
        ol: HTMLAttributes<HTMLOListElement>;
        optgroup: HTMLAttributes<HTMLOptGroupElement>;
        option: HTMLAttributes<HTMLOptionElement>;
        output: HTMLAttributes<HTMLOutputElement>;
        p: HTMLAttributes<HTMLParagraphElement>;
        picture: HTMLAttributes<HTMLPictureElement>;
        pre: HTMLAttributes<HTMLPreElement>;
        progress: HTMLAttributes<HTMLProgressElement>;
        q: HTMLAttributes<HTMLQuoteElement>;
        rp: HTMLAttributes<HTMLElement>;
        rt: HTMLAttributes<HTMLElement>;
        ruby: HTMLAttributes<HTMLElement>;
        s: HTMLAttributes<HTMLElement>;
        samp: HTMLAttributes<HTMLElement>;
        script: HTMLAttributes<HTMLScriptElement>;
        section: HTMLAttributes<HTMLElement>;
        select: HTMLAttributes<HTMLSelectElement>;
        slot: HTMLAttributes<HTMLSlotElement>;
        small: HTMLAttributes<HTMLElement>;
        source: HTMLAttributes<HTMLSourceElement>;
        span: HTMLAttributes<HTMLSpanElement>;
        strong: HTMLAttributes<HTMLElement>;
        style: HTMLAttributes<HTMLStyleElement>;
        sub: HTMLAttributes<HTMLElement>;
        summary: HTMLAttributes<HTMLElement>;
        sup: HTMLAttributes<HTMLElement>;
        table: HTMLAttributes<HTMLTableElement>;
        tbody: HTMLAttributes<HTMLTableSectionElement>;
        td: HTMLAttributes<HTMLTableCellElement>;
        template: HTMLAttributes<HTMLTemplateElement>;
        textarea: HTMLAttributes<HTMLTextAreaElement>;
        tfoot: HTMLAttributes<HTMLTableSectionElement>;
        th: HTMLAttributes<HTMLTableCellElement>;
        thead: HTMLAttributes<HTMLTableSectionElement>;
        time: HTMLAttributes<HTMLTimeElement>;
        title: HTMLAttributes<HTMLTitleElement>;
        tr: HTMLAttributes<HTMLTableRowElement>;
        track: HTMLAttributes<HTMLTrackElement>;
        u: HTMLAttributes<HTMLElement>;
        ul: HTMLAttributes<HTMLUListElement>;
        var: HTMLAttributes<HTMLElement>;
        video: HTMLAttributes<HTMLVideoElement>;
        wbr: HTMLAttributes<HTMLElement>;
    }
}

type A = Pick<JSX.IntrinsicElements, "a" | "body">

type B = Pick<HTMLElementTagNameMap, "a" | "body">

type C =  {
    [K in keyof B]: JSX.HTMLAttributes<B[K]>
}

type LowerA = {
    [P in keyof A as Capitalize<P>]: A[P]
} & A



// type A = {
//     [K in keyof JSX.IntrinsicElements]: true
// }


type F = keyof HTMLElementTagNameMap

// type D = Lowercase<C>
type D = {
    [A in keyof LowerA]: LowerA[A]
}

type Getters = {
    [P in keyof HTMLElementTagNameMap as Capitalize<P>]: HTMLElementTagNameMap[P]
};


type Expected = {
    "qWerty": string
    "qwerty": string
    "ololo": string
}

type AA = Pick<GlobalEventHandlers, "onclick" | "onabort">

type BB = {
    [K in keyof AA]: Parameters<AA[K]>
}



type XXX = BB["onclick"][0] // Pick<BB, keyof BB>

// type C = B<HTMLElementTagNameMap> extends A ? 'true' : never

function isSubtype(x: 1 extends 1 ? true : 0): true {
    return x
}



