:: BASE_DOC ::

## API
### AutoComplete Props

name | type | default | description | required
-- | -- | -- | -- | --
autoFocus | Boolean | - | \- | N
clearable | Boolean | - | \- | N
default | \- | - | \- | N
disabled | Boolean | - | \- | N
filter | Function | - | Typescript：`(filterWords: string, option: T) => boolean \| Promise<boolean>` | N
filterable | Boolean | true | \- | N
highlightKeyword | Boolean | true | \- | N
inputProps | Object | - | Typescript：`InputProps`，[Input API Documents](./input?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/auto-complete/type.ts) | N
options | Array | - | Typescript：`Array<T>` | N
placeholder | String | - | \- | N
popupProps | Object | - | Typescript：`PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/auto-complete/type.ts) | N
status | String | - | options：default/success/warning/error | N
textareaProps | Object | - | Typescript：`TextareaProps`，[Textarea API Documents](./textarea?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/auto-complete/type.ts) | N
tips | String / Slot / Function | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
trigger | \- | - | \- | N
value | String | - | `v-model` is supported | N
defaultValue | String | - | uncontrolled property | N
onBlur | Function |  | Typescript：`(context: { e: FocusEvent; value: string }) => void`<br/> | N
onChange | Function |  | Typescript：`(value: InputValue, context?: { e?: InputEvent \| MouseEvent }) => void`<br/> | N
onClear | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/> | N
onCompositionend | Function |  | Typescript：`(context: { e: CompositionEvent; value: string }) => void`<br/>trigger on compositionend | N
onCompositionstart | Function |  | Typescript：`(context: { e: CompositionEvent; value: string }) => void`<br/>trigger on compositionstart | N
onEnter | Function |  | Typescript：`(context: { e: KeyboardEvent; value: string }) => void`<br/> | N
onFocus | Function |  | Typescript：`(context: { e: FocusEvent; value: string }) => void`<br/> | N
onSelect | Function |  | Typescript：`(value: string, context: { e: MouseEvent }) => void`<br/> | N

### AutoComplete Events

name | params | description
-- | -- | --
blur | `(context: { e: FocusEvent; value: string })` | \-
change | `(value: InputValue, context?: { e?: InputEvent \| MouseEvent })` | \-
clear | `(context: { e: MouseEvent })` | \-
compositionend | `(context: { e: CompositionEvent; value: string })` | trigger on compositionend
compositionstart | `(context: { e: CompositionEvent; value: string })` | trigger on compositionstart
enter | `(context: { e: KeyboardEvent; value: string })` | \-
focus | `(context: { e: FocusEvent; value: string })` | \-
select | `(value: string, context: { e: MouseEvent })` | \-