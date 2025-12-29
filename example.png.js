import { ImageResizer } from "./ImageResizer.js";
import { PNG } from "../../util/PNG/PNG.js";

const bin = await Deno.readFile("example.png");
const img = PNG.decode(bin);

const w2 = 128;
const imgdata2 = ImageResizer.resize(img, w2);
console.log(imgdata2);
const bin2 = PNG.encode(imgdata2);
await Deno.writeFile("example_resize.png", bin2);
