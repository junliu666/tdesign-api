:: BASE_DOC ::

## API


### DropdownItem Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
disabled | Boolean | false | \- | N
footer | TElement | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
keys | Object | - | Typescript：`KeysType`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
label | String | - | \- | N
multiple | Boolean | false | \- | N
options | Array | [] | Typescript：`Array<DropdownOption>` `interface DropdownOption { label: string; disabled: boolean; value: DropdownValue; }`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/dropdown-menu/type.ts) | N
optionsColumns | String / Number | 1 | \- | N
value | String / Number / Array | undefined | Typescript：`DropdownValue ` `type DropdownValue = string \| number \| Array<DropdownValue>;`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/dropdown-menu/type.ts) | N
defaultValue | String / Number / Array | undefined | uncontrolled property。Typescript：`DropdownValue ` `type DropdownValue = string \| number \| Array<DropdownValue>;`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/dropdown-menu/type.ts) | N
onChange | Function |  | Typescript：`(value: DropdownValue) => void`<br/> | N
onConfirm | Function |  | Typescript：`(value: DropdownValue) => void`<br/> | N
onReset | Function |  | Typescript：`(value: DropdownValue) => void`<br/> | N