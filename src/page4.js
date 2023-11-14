import "./styles/style.css";
import {
  Application,
  Shader,
  Geometry,
  Mesh,
  Texture,
  WRAP_MODES,
} from "pixi.js";
import fragmentSrc from "./page4.frag";
import vertexSrc from "./page4.vert";

const app = new Application({ resizeTo: window });
document.body.appendChild(app.view);
if (process.env.NODE_ENV !== "production") {
  // Included for non-production builds, powers PixiJS browser debug extension.
  globalThis.__PIXI_APP__ = app;
}

// Build geometry.
const geometry = new Geometry()
  .addAttribute(
    "aVertexPosition", // the attribute name
    [
      -100,
      -100, // x, y
      100,
      -100, // x, y
      100,
      100,
      -100,
      100,
    ], // x, y
    2
  ) // the size of the attribute
  .addAttribute(
    "aUvs", // the attribute name
    [
      0,
      0, // u, v
      1,
      0, // u, v
      1,
      1,
      0,
      1,
    ], // u, v
    2
  ) // the size of the attribute
  .addIndex([0, 1, 2, 0, 2, 3]);

const uniforms = {
  noise: Texture.from("https://pixijs.com/assets/perlin.jpg"),
  time: 0,
};
// Make sure repeat wrap is used and no mipmapping.

uniforms.noise.baseTexture.wrapMode = WRAP_MODES.REPEAT;
uniforms.noise.baseTexture.mipmap = false;

// Build the shader and the quad.
const shader = Shader.from(vertexSrc, fragmentSrc, uniforms);
const quad = new Mesh(geometry, shader);

quad.position.set(400, 300);
quad.scale.set(2);

app.stage.addChild(quad);

// start the animation..
let time = 0;

app.ticker.add((delta) => {
  time += 1 / 60;
  quad.shader.uniforms.time = time;
  quad.scale.set(Number(Math.cos(time)) + 2, Number(Math.sin(time * 0.7)) + 2);
});
