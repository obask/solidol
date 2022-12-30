import { MyNode } from "../jsx-runtime";

export function useState<T>(a: T): [T, ((arg0: (arg0: T) => T) => void)] {
    return [a, (f) => (p: T) => a]
}

export function render(
	vnode: MyNode<any>,
	parent: Element | Document | ShadowRoot | DocumentFragment
): void {
    const _x = 1;    
    console.log(vnode)
    if (typeof vnode.type === "function") {
        vnode.type()
    }
}
