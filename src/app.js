import {For} from 'solidol/render/flow'

import {
  createComponent as _$createComponent,
  delegateEvents as _$delegateEvents,
  effect as _$effect,
  insert as _$insert,
  use as _$use,
  template as _$template
} from "solidol/dom/client"
import {createSignal} from "solidol/reactive/signal";

const _tmpl$ = /*#__PURE__*/_$template(`<div><input placeholder="new todo here"><button>Add Todo</button></div>`, 5),
  _tmpl$2 = /*#__PURE__*/_$template(`<div><input type="checkbox"><span></span></div>`, 5);

export const TodoList = () => {
  let input;
  let todoId = 0;
  const [todos, setTodos] = createSignal([]);
  const addTodo = text => {
    setTodos([...todos(), {
      id: ++todoId,
      text,
      completed: false
    }]);
  };
  const toggleTodo = id => {
    setTodos(todos().map(todo => todo.id === id ? {
      ...todo,
      completed: !todo.completed
    } : todo));
  };
  return [(() => {
    const _el$ = _tmpl$.cloneNode(true),
      _el$2 = _el$.firstChild,
      _el$3 = _el$2.nextSibling;
    const _ref$ = input;
    typeof _ref$ === "function" ? _$use(_ref$, _el$2) : input = _el$2;
    _el$3.$$click = () => {
      if (!input.value.trim()) return;
      addTodo(input.value);
      input.value = '';
    };
    return _el$;
  })(), _$createComponent(For, {
    get each() {
      return todos();
    },
    children: todo => {
      const {
        id,
        text
      } = todo;
      return (() => {
        const _el$4 = _tmpl$2.cloneNode(true),
          _el$5 = _el$4.firstChild,
          _el$6 = _el$5.nextSibling;
        _el$5.addEventListener("change", e => toggleTodo(id, e));
        _$insert(_el$6, text);
        // _$effect(() => _el$6.style.setProperty("text-decoration", todo.completed ? 'line-through' : 'none'));
        _$effect(() => _el$5.checked = todo.completed);
        return _el$4;
      })();
    }
  })];
};

_$delegateEvents(["click"]);

