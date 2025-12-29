import { init, resize } from "./pkg/squoosh_resize.js";

await init();

export class ImageResizer {
  static resize(imgdata, wdst, hdst = 0, typ_idx = 0, premultiply = false, colorspc = false) {
    if (hdst == 0) {
      hdst = Math.floor(imgdata.height / imgdata.width * wdst);
    } else if (wdst == 0) {
      wdst = Math.floor(imgdata.width / imgdata.height * hdst);
    }
    const imgdata2 = resize(imgdata.data, imgdata.width, imgdata.height, wdst, hdst, typ_idx, premultiply, colorspc);
    const res = { width: wdst, height: hdst, data: imgdata2 };
    return res;
  }
}
