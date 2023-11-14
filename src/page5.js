import "./styles/style.css";
import { Application, Shader, Geometry, Mesh } from "pixi.js";
import fragmentSrc from "./page5.frag";
import vertexSrc from "./page5.vert";

const app = new Application({ resizeTo: window });
document.body.appendChild(app.view);
if (process.env.NODE_ENV !== "production") {
  // Included for non-production builds, powers PixiJS browser debug extension.
  globalThis.__PIXI_APP__ = app;
}

const geometry = new Geometry()
  .addAttribute(
    "aVertexPosition",
    [
      0, // x0 (top left)
      0, // y0 (top left)
      window.innerWidth, // x1 (top right)
      0, // y1 (top right)
      window.innerWidth, // x2 (bot right)
      window.innerHeight, // y2 (bot right)
      0, // x3 (bot left)
      window.innerHeight, // y3 (bot left)
    ],
    2
  )
  .addIndex([0, 1, 2, 0, 2, 3]); // Defines two triangles based on the 4 coordinate pairs above to create a full-screen quad.

const uniforms = {
  iTime: 0,
  iResolution: [window.innerWidth, window.innerHeight, 1.0],
};

const shader = Shader.from(vertexSrc, fragmentSrc, uniforms);
const quad = new Mesh(geometry, shader);
app.stage.addChild(quad);

app.ticker.add((delta) => {
  shader.uniforms.iTime += 1 / 60;
});
