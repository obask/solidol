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

import {ClassAttributes, Key, PreactDOMAttributes} from "preact";
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

export type TargetedEvent<
    Target extends EventTarget = EventTarget,
    TypedEvent extends Event = Event
> = Omit<TypedEvent, 'currentTarget'> & {
    readonly currentTarget: Target;
};


export type TargetedAnimationEvent<Target extends EventTarget> =
    TargetedEvent<Target, AnimationEvent>;
export type TargetedClipboardEvent<Target extends EventTarget> =
    TargetedEvent<Target, ClipboardEvent>;
export type TargetedCompositionEvent<Target extends EventTarget> =
    TargetedEvent<Target, CompositionEvent>;
export type TargetedDragEvent<Target extends EventTarget> = TargetedEvent<
    Target,
    DragEvent
>;
export type TargetedFocusEvent<Target extends EventTarget> = TargetedEvent<
    Target,
    FocusEvent
>;
export type TargetedKeyboardEvent<Target extends EventTarget> = TargetedEvent<
    Target,
    KeyboardEvent
>;
export type TargetedMouseEvent<Target extends EventTarget> = TargetedEvent<
    Target,
    MouseEvent
>;
export type TargetedPointerEvent<Target extends EventTarget> = TargetedEvent<
    Target,
    PointerEvent
>;
export type TargetedTouchEvent<Target extends EventTarget> = TargetedEvent<
    Target,
    TouchEvent
>;
export type TargetedTransitionEvent<Target extends EventTarget> =
    TargetedEvent<Target, TransitionEvent>;
export type TargetedUIEvent<Target extends EventTarget> = TargetedEvent<
    Target,
    UIEvent
>;
export type TargetedWheelEvent<Target extends EventTarget> = TargetedEvent<
    Target,
    WheelEvent
>;

export interface EventHandler<E extends TargetedEvent> {
    /**
     * The `this` keyword always points to the DOM element the event handler
     * was invoked on. See: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers#Event_handlers_parameters_this_binding_and_the_return_value
     */
    (this: never, event: E): void;
}

export type AnimationEventHandler<Target extends EventTarget> = EventHandler<
    TargetedAnimationEvent<Target>
>;
export type ClipboardEventHandler<Target extends EventTarget> = EventHandler<
    TargetedClipboardEvent<Target>
>;
export type CompositionEventHandler<Target extends EventTarget> =
    EventHandler<TargetedCompositionEvent<Target>>;
export type DragEventHandler<Target extends EventTarget> = EventHandler<
    TargetedDragEvent<Target>
>;
export type FocusEventHandler<Target extends EventTarget> = EventHandler<
    TargetedFocusEvent<Target>
>;
export type GenericEventHandler<Target extends EventTarget> = EventHandler<
    TargetedEvent<Target>
>;
export type KeyboardEventHandler<Target extends EventTarget> = EventHandler<
    TargetedKeyboardEvent<Target>
>;
export type MouseEventHandler<Target extends EventTarget> = EventHandler<
    TargetedMouseEvent<Target>
>;
export type PointerEventHandler<Target extends EventTarget> = EventHandler<
    TargetedPointerEvent<Target>
>;
export type TouchEventHandler<Target extends EventTarget> = EventHandler<
    TargetedTouchEvent<Target>
>;
export type TransitionEventHandler<Target extends EventTarget> = EventHandler<
    TargetedTransitionEvent<Target>
>;
export type UIEventHandler<Target extends EventTarget> = EventHandler<
    TargetedUIEvent<Target>
>;
export type WheelEventHandler<Target extends EventTarget> = EventHandler<
    TargetedWheelEvent<Target>
>;

export interface DOMAttributes<Target extends EventTarget>
    extends PreactDOMAttributes {
    // Image Events
    onLoad?: GenericEventHandler<Target>;
    onLoadCapture?: GenericEventHandler<Target>;
    onError?: GenericEventHandler<Target>;
    onErrorCapture?: GenericEventHandler<Target>;

    // Clipboard Events
    onCopy?: ClipboardEventHandler<Target>;
    onCopyCapture?: ClipboardEventHandler<Target>;
    onCut?: ClipboardEventHandler<Target>;
    onCutCapture?: ClipboardEventHandler<Target>;
    onPaste?: ClipboardEventHandler<Target>;
    onPasteCapture?: ClipboardEventHandler<Target>;

    // Composition Events
    onCompositionEnd?: CompositionEventHandler<Target>;
    onCompositionEndCapture?: CompositionEventHandler<Target>;
    onCompositionStart?: CompositionEventHandler<Target>;
    onCompositionStartCapture?: CompositionEventHandler<Target>;
    onCompositionUpdate?: CompositionEventHandler<Target>;
    onCompositionUpdateCapture?: CompositionEventHandler<Target>;

    // Details Events
    onToggle?: GenericEventHandler<Target>;

    // Focus Events
    onFocus?: FocusEventHandler<Target>;
    onFocusCapture?: FocusEventHandler<Target>;
    onfocusin?: FocusEventHandler<Target>;
    onfocusinCapture?: FocusEventHandler<Target>;
    onfocusout?: FocusEventHandler<Target>;
    onfocusoutCapture?: FocusEventHandler<Target>;
    onBlur?: FocusEventHandler<Target>;
    onBlurCapture?: FocusEventHandler<Target>;

    // Form Events
    onChange?: GenericEventHandler<Target>;
    onChangeCapture?: GenericEventHandler<Target>;
    onInput?: GenericEventHandler<Target>;
    onInputCapture?: GenericEventHandler<Target>;
    onBeforeInput?: GenericEventHandler<Target>;
    onBeforeInputCapture?: GenericEventHandler<Target>;
    onSearch?: GenericEventHandler<Target>;
    onSearchCapture?: GenericEventHandler<Target>;
    onSubmit?: GenericEventHandler<Target>;
    onSubmitCapture?: GenericEventHandler<Target>;
    onInvalid?: GenericEventHandler<Target>;
    onInvalidCapture?: GenericEventHandler<Target>;
    onReset?: GenericEventHandler<Target>;
    onResetCapture?: GenericEventHandler<Target>;
    onFormData?: GenericEventHandler<Target>;
    onFormDataCapture?: GenericEventHandler<Target>;

    // Keyboard Events
    onKeyDown?: KeyboardEventHandler<Target>;
    onKeyDownCapture?: KeyboardEventHandler<Target>;
    onKeyPress?: KeyboardEventHandler<Target>;
    onKeyPressCapture?: KeyboardEventHandler<Target>;
    onKeyUp?: KeyboardEventHandler<Target>;
    onKeyUpCapture?: KeyboardEventHandler<Target>;

    // Media Events
    onAbort?: GenericEventHandler<Target>;
    onAbortCapture?: GenericEventHandler<Target>;
    onCanPlay?: GenericEventHandler<Target>;
    onCanPlayCapture?: GenericEventHandler<Target>;
    onCanPlayThrough?: GenericEventHandler<Target>;
    onCanPlayThroughCapture?: GenericEventHandler<Target>;
    onDurationChange?: GenericEventHandler<Target>;
    onDurationChangeCapture?: GenericEventHandler<Target>;
    onEmptied?: GenericEventHandler<Target>;
    onEmptiedCapture?: GenericEventHandler<Target>;
    onEncrypted?: GenericEventHandler<Target>;
    onEncryptedCapture?: GenericEventHandler<Target>;
    onEnded?: GenericEventHandler<Target>;
    onEndedCapture?: GenericEventHandler<Target>;
    onLoadedData?: GenericEventHandler<Target>;
    onLoadedDataCapture?: GenericEventHandler<Target>;
    onLoadedMetadata?: GenericEventHandler<Target>;
    onLoadedMetadataCapture?: GenericEventHandler<Target>;
    onLoadStart?: GenericEventHandler<Target>;
    onLoadStartCapture?: GenericEventHandler<Target>;
    onPause?: GenericEventHandler<Target>;
    onPauseCapture?: GenericEventHandler<Target>;
    onPlay?: GenericEventHandler<Target>;
    onPlayCapture?: GenericEventHandler<Target>;
    onPlaying?: GenericEventHandler<Target>;
    onPlayingCapture?: GenericEventHandler<Target>;
    onProgress?: GenericEventHandler<Target>;
    onProgressCapture?: GenericEventHandler<Target>;
    onRateChange?: GenericEventHandler<Target>;
    onRateChangeCapture?: GenericEventHandler<Target>;
    onSeeked?: GenericEventHandler<Target>;
    onSeekedCapture?: GenericEventHandler<Target>;
    onSeeking?: GenericEventHandler<Target>;
    onSeekingCapture?: GenericEventHandler<Target>;
    onStalled?: GenericEventHandler<Target>;
    onStalledCapture?: GenericEventHandler<Target>;
    onSuspend?: GenericEventHandler<Target>;
    onSuspendCapture?: GenericEventHandler<Target>;
    onTimeUpdate?: GenericEventHandler<Target>;
    onTimeUpdateCapture?: GenericEventHandler<Target>;
    onVolumeChange?: GenericEventHandler<Target>;
    onVolumeChangeCapture?: GenericEventHandler<Target>;
    onWaiting?: GenericEventHandler<Target>;
    onWaitingCapture?: GenericEventHandler<Target>;

    // MouseEvents
    onClick?: MouseEventHandler<Target>;
    onClickCapture?: MouseEventHandler<Target>;
    onContextMenu?: MouseEventHandler<Target>;
    onContextMenuCapture?: MouseEventHandler<Target>;
    onDblClick?: MouseEventHandler<Target>;
    onDblClickCapture?: MouseEventHandler<Target>;
    onDrag?: DragEventHandler<Target>;
    onDragCapture?: DragEventHandler<Target>;
    onDragEnd?: DragEventHandler<Target>;
    onDragEndCapture?: DragEventHandler<Target>;
    onDragEnter?: DragEventHandler<Target>;
    onDragEnterCapture?: DragEventHandler<Target>;
    onDragExit?: DragEventHandler<Target>;
    onDragExitCapture?: DragEventHandler<Target>;
    onDragLeave?: DragEventHandler<Target>;
    onDragLeaveCapture?: DragEventHandler<Target>;
    onDragOver?: DragEventHandler<Target>;
    onDragOverCapture?: DragEventHandler<Target>;
    onDragStart?: DragEventHandler<Target>;
    onDragStartCapture?: DragEventHandler<Target>;
    onDrop?: DragEventHandler<Target>;
    onDropCapture?: DragEventHandler<Target>;
    onMouseDown?: MouseEventHandler<Target>;
    onMouseDownCapture?: MouseEventHandler<Target>;
    onMouseEnter?: MouseEventHandler<Target>;
    onMouseEnterCapture?: MouseEventHandler<Target>;
    onMouseLeave?: MouseEventHandler<Target>;
    onMouseLeaveCapture?: MouseEventHandler<Target>;
    onMouseMove?: MouseEventHandler<Target>;
    onMouseMoveCapture?: MouseEventHandler<Target>;
    onMouseOut?: MouseEventHandler<Target>;
    onMouseOutCapture?: MouseEventHandler<Target>;
    onMouseOver?: MouseEventHandler<Target>;
    onMouseOverCapture?: MouseEventHandler<Target>;
    onMouseUp?: MouseEventHandler<Target>;
    onMouseUpCapture?: MouseEventHandler<Target>;

    // Selection Events
    onSelect?: GenericEventHandler<Target>;
    onSelectCapture?: GenericEventHandler<Target>;

    // Touch Events
    onTouchCancel?: TouchEventHandler<Target>;
    onTouchCancelCapture?: TouchEventHandler<Target>;
    onTouchEnd?: TouchEventHandler<Target>;
    onTouchEndCapture?: TouchEventHandler<Target>;
    onTouchMove?: TouchEventHandler<Target>;
    onTouchMoveCapture?: TouchEventHandler<Target>;
    onTouchStart?: TouchEventHandler<Target>;
    onTouchStartCapture?: TouchEventHandler<Target>;

    // Pointer Events
    onPointerOver?: PointerEventHandler<Target>;
    onPointerOverCapture?: PointerEventHandler<Target>;
    onPointerEnter?: PointerEventHandler<Target>;
    onPointerEnterCapture?: PointerEventHandler<Target>;
    onPointerDown?: PointerEventHandler<Target>;
    onPointerDownCapture?: PointerEventHandler<Target>;
    onPointerMove?: PointerEventHandler<Target>;
    onPointerMoveCapture?: PointerEventHandler<Target>;
    onPointerUp?: PointerEventHandler<Target>;
    onPointerUpCapture?: PointerEventHandler<Target>;
    onPointerCancel?: PointerEventHandler<Target>;
    onPointerCancelCapture?: PointerEventHandler<Target>;
    onPointerOut?: PointerEventHandler<Target>;
    onPointerOutCapture?: PointerEventHandler<Target>;
    onPointerLeave?: PointerEventHandler<Target>;
    onPointerLeaveCapture?: PointerEventHandler<Target>;
    onGotPointerCapture?: PointerEventHandler<Target>;
    onGotPointerCaptureCapture?: PointerEventHandler<Target>;
    onLostPointerCapture?: PointerEventHandler<Target>;
    onLostPointerCaptureCapture?: PointerEventHandler<Target>;

    // UI Events
    onScroll?: UIEventHandler<Target>;
    onScrollCapture?: UIEventHandler<Target>;

    // Wheel Events
    onWheel?: WheelEventHandler<Target>;
    onWheelCapture?: WheelEventHandler<Target>;

    // Animation Events
    onAnimationStart?: AnimationEventHandler<Target>;
    onAnimationStartCapture?: AnimationEventHandler<Target>;
    onAnimationEnd?: AnimationEventHandler<Target>;
    onAnimationEndCapture?: AnimationEventHandler<Target>;
    onAnimationIteration?: AnimationEventHandler<Target>;
    onAnimationIterationCapture?: AnimationEventHandler<Target>;

    // Transition Events
    onTransitionEnd?: TransitionEventHandler<Target>;
    onTransitionEndCapture?: TransitionEventHandler<Target>;
}


type HTMLAttributes<RefType extends HTMLElement> = Partial<RefType> | DOMAttributes<RefType> | {
    class?: string
    // TODO: className?: never
}
//     children?: string;
//     [s: string]: any
// }

// export interface HTMLAttributes<RefType extends EventTarget = EventTarget>
//     extends ClassAttributes<RefType>,
//         DOMAttributes<RefType> {
//
// }

type SVGAttributes<Target> = Target


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

    export type IntrinsicElements = {
        [P in keyof HTMLElementTagNameMap]: HTMLAttributes<HTMLElementTagNameMap[P]>
    } & {a: string};

    // export interface IntrinsicElements =


    export interface IntrinsicElementsZ {
        // HTML
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
        big: HTMLAttributes<HTMLElement>;
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
        keygen: HTMLAttributes<HTMLUnknownElement>;
        label: HTMLAttributes<HTMLLabelElement>;
        legend: HTMLAttributes<HTMLLegendElement>;
        li: HTMLAttributes<HTMLLIElement>;
        link: HTMLAttributes<HTMLLinkElement>;
        main: HTMLAttributes<HTMLElement>;
        map: HTMLAttributes<HTMLMapElement>;
        mark: HTMLAttributes<HTMLElement>;
        marquee: HTMLAttributes<HTMLMarqueeElement>;
        menu: HTMLAttributes<HTMLMenuElement>;
        menuitem: HTMLAttributes<HTMLUnknownElement>;
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
        param: HTMLAttributes<HTMLParamElement>;
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

        //SVG
        svg: SVGAttributes<SVGSVGElement>;
        animate: SVGAttributes<SVGAnimateElement>;
        circle: SVGAttributes<SVGCircleElement>;
        animateTransform: SVGAttributes<SVGAnimateElement>;
        clipPath: SVGAttributes<SVGClipPathElement>;
        defs: SVGAttributes<SVGDefsElement>;
        desc: SVGAttributes<SVGDescElement>;
        ellipse: SVGAttributes<SVGEllipseElement>;
        feBlend: SVGAttributes<SVGFEBlendElement>;
        feColorMatrix: SVGAttributes<SVGFEColorMatrixElement>;
        feComponentTransfer: SVGAttributes<SVGFEComponentTransferElement>;
        feComposite: SVGAttributes<SVGFECompositeElement>;
        feConvolveMatrix: SVGAttributes<SVGFEConvolveMatrixElement>;
        feDiffuseLighting: SVGAttributes<SVGFEDiffuseLightingElement>;
        feDisplacementMap: SVGAttributes<SVGFEDisplacementMapElement>;
        feDropShadow: SVGAttributes<SVGFEDropShadowElement>;
        feFlood: SVGAttributes<SVGFEFloodElement>;
        feFuncA: SVGAttributes<SVGFEFuncAElement>;
        feFuncB: SVGAttributes<SVGFEFuncBElement>;
        feFuncG: SVGAttributes<SVGFEFuncGElement>;
        feFuncR: SVGAttributes<SVGFEFuncRElement>;
        feGaussianBlur: SVGAttributes<SVGFEGaussianBlurElement>;
        feImage: SVGAttributes<SVGFEImageElement>;
        feMerge: SVGAttributes<SVGFEMergeElement>;
        feMergeNode: SVGAttributes<SVGFEMergeNodeElement>;
        feMorphology: SVGAttributes<SVGFEMorphologyElement>;
        feOffset: SVGAttributes<SVGFEOffsetElement>;
        feSpecularLighting: SVGAttributes<SVGFESpecularLightingElement>;
        feTile: SVGAttributes<SVGFETileElement>;
        feTurbulence: SVGAttributes<SVGFETurbulenceElement>;
        filter: SVGAttributes<SVGFilterElement>;
        foreignObject: SVGAttributes<SVGForeignObjectElement>;
        g: SVGAttributes<SVGGElement>;
        image: SVGAttributes<SVGImageElement>;
        line: SVGAttributes<SVGLineElement>;
        linearGradient: SVGAttributes<SVGLinearGradientElement>;
        marker: SVGAttributes<SVGMarkerElement>;
        mask: SVGAttributes<SVGMaskElement>;
        path: SVGAttributes<SVGPathElement>;
        pattern: SVGAttributes<SVGPatternElement>;
        polygon: SVGAttributes<SVGPolygonElement>;
        polyline: SVGAttributes<SVGPolylineElement>;
        radialGradient: SVGAttributes<SVGRadialGradientElement>;
        rect: SVGAttributes<SVGRectElement>;
        stop: SVGAttributes<SVGStopElement>;
        symbol: SVGAttributes<SVGSymbolElement>;
        text: SVGAttributes<SVGTextElement>;
        textPath: SVGAttributes<SVGTextPathElement>;
        tspan: SVGAttributes<SVGTSpanElement>;
        use: SVGAttributes<SVGUseElement>;
    }
}


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