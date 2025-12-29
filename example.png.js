import { init, resize } from "./pkg/squoosh_resize.js";
import { PNG } from "../../util/PNG/PNG.js";

await init();

const bin = await Deno.readFile("example.png");
const img = PNG.decode(bin);

const w2 = 64;
const h2 = 64;

const typ_idx = 0;
const premultiply = 1;
const colorspc = false;

const imgdata2 = resize(img.data, img.width, img.height, w2, h2, typ_idx, premultiply, colorspc);
console.log(imgdata2);
const bin2 = PNG.encode({ width: w2, height: h2, data: imgdata2 });
await Deno.writeFile("example_resize.png", bin2);
