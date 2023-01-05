export {sharedConfig} from "../render/hydration";

export {
    getOwner,
    createRoot as root,
    createRenderEffect as effect,
    createMemo as memo,
    untrack,
} from "../reactive/signal";

export {createComponent, mergeProps} from "../render/component"
