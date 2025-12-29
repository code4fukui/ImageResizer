import { init, resize } from "./pkg/squoosh_resize.js";

await init();

const w = 100;
const h = 100;
const imgdata = new Uint8Array(w * h * 4);
let idx = 0;
for (let i = 0; i < h; i++) {
  for (let j = 0; j < w; j++) {
    imgdata[idx++] = 255;
    imgdata[idx++] = 100;
    imgdata[idx++] = 100;
    imgdata[idx++] = 255;
  }
}

const w2 = 32;
const h2 = 32;

const typ_idx = 0;
const premultiply = 1;
const colorspc = false;
const imgdata2 = resize(imgdata, w, h, w2, h2, typ_idx, premultiply, colorspc);
console.log(imgdata2);

