# ImageResizer

A image resizer with WebAssembly

## usage

```js
import { ImageResizer } from "https://code4fukui.github.io/ImageResizer/ImageResizer.js";

const imgdata2 = ImageResizer.resize(imgdata, w2);
console.log(imgdata2);
```

## spec

```js
class ImageResizer {
  static resize(imgdata, wdst, hdst = 0, typ_idx = 0, premultiply = false, colorspc = false);
}
```
- typ_idx
        - 0: Type::Triangle,x
        - 1: Type::Catrom
        - 2: Type::Mitchell
        - 3: Type::Lanczos3
- premultiply bool
- color_space_conversion bool

## how to build

with [bin2js](https://github.com/code4fukui/bin2js)
```sh
deno -A https://code4fukui.github.io/bin2js/bin2js.js squoosh_resize_bg.wasm
```

## reference

foked from Resize of [GoogleChromeLabs/squoosh](https://github.com/GoogleChromeLabs/squoosh/)

- Source: <https://github.com/PistonDevelopers/resize>
- Version: v0.3.0
- License: MIT
