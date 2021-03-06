export { nextTick } from '@hopejs/runtime-core';

export { div, $div, span, $span } from './tags';
export * from './render';

// 指令
export { hAttr } from './directives/hAttr';
export { hProp } from './directives/hProp';
export { hOn } from './directives/hOn';
export { hClass } from './directives/hClass';
export { hStyle } from './directives/hStyle';
export { hId } from './directives/hId';
export { hShow } from './directives/hShow';
export { hText } from './directives/hText';
export { hComment } from './directives/hComment';
export { hSlot } from './directives/hSlot';

// block 可以让结构性变化变成可响应式的
export { block } from './block';

export { addCssRule as s, keyframes, media } from './style';

export {
  defineComponent,
  ComponentStartTag,
  ComponentEndTag,
} from './defineComponent';

// 组件的生命周期钩子
export {
  onMounted,
  onUnmounted,
  onUpdated,
  onElementUnmounted,
} from './lifecycle';
