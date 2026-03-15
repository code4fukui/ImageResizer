# ImageResizer

WebAssemblyを使ったイメージリサイズツールです。

## 使い方

```js
import { ImageResizer } from "https://code4fukui.github.io/ImageResizer/ImageResizer.js";

const imgdata2 = ImageResizer.resize(imgdata, w2);
console.log(imgdata2);
```

## 機能

- WebAssemblyによるスムーズなリサイズ処理
- トライアングル、キャトロム、ミッチェル、ランチョス3の各リサイズ手法を選択可能
- プレマルチプライアルファの適用
- カラースペース変換（sRGB⇔Linear RGB）

## 必要環境

- Deno または ES Modules 対応のブラウザ

## ビルド方法

[bin2js](https://github.com/code4fukui/bin2js)を使ってビルドできます:
```sh
deno -A https://code4fukui.github.io/bin2js/bin2js.js squoosh_resize_bg.wasm
```

## ライセンス

このプロジェクトは [MIT ライセンス](LICENSE.codec.md) の下でリリースされています。