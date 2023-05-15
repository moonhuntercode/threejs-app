import "./style.css";
import "./estilizado.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import * as THREE from "three";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(
  window.innerWidth / 2,
  window.innerHeight / 2
);
const geometry = new THREE.BoxGeometry(1, 1, 2);
const light = new THREE.DirectionalLight("#fff");
const ambient = new THREE.AmbientLight("#FFF");
light.position.set(0, 20, 10);
const material = new THREE.MeshPhongMaterial({
  color: "#8b53f2",
});
const cube = new THREE.Mesh(geometry, material);
cube.material.wireframe = true;
scene.add(cube);
scene.add(ambient);
scene.add(light);

camera.position.z = 4;
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
}
animate();
document.body.appendChild(renderer.domElement);

// prettier-ignore
document.querySelector('#app').innerHTML = //html
`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>usando Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector("#counter"));
