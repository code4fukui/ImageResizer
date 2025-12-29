import { init, resize } from "./pkg/squoosh_resize.js";

await init();

export class ImageResizer {
  resize(imgdata, wdst, hdst, typ_idx = 0, premultiply = false, colorspc = false) {
    const imgdata2 = resize(imgdata.data, imgdata.width, imgdata.heigcht, wdst, hdst, typ_idx, premultiply, colorspc);
    const res = { width: wdst, height: hdst, data: imgdata2 };
    return res;
  }
}
