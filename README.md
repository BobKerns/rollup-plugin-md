## Install

Temporary fork of rollup-plugin-md

```node
npm install @rwk/rollup-plugin-md --save
```

## usage

```js
import md from './test.md';
console.log( `Template for render: ${md}` );
```

```js
import { rollup } from 'rollup';
import md from '@rwk/rollup-plugin-md';

rollup({
    entry: 'main.js',
    plugins: [
        md({
            marked: {
                //marked options
            }
        })
    ]
});
```
