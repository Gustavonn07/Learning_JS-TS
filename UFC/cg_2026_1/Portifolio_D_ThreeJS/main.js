import * as THREE from "three";
import { camera } from "./composition/camera.js";
import { ambientLight } from "./composition/light.js";
import { floor } from "./objects/floor.js";
import { endGlassWall, endWall, leftWall, rightWall } from "./objects/wall.js";
import { ceiling } from "./objects/ceiling.js";
import { paintings } from "./objects/painting.js";
import { exitLight, lamps } from "./objects/lamp.js";
import { snail } from "./objects/snail.js";
import { door } from "./objects/exitDoor.js";
import { carpet } from "./objects/carpet.js";
import { columns } from "./objects/collumns.js";

function animate() {
  // Quado termina de desenhar o frame é chamada novamente ela recursivamente.
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({
  antialias: true
});

renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

scene.add(ambientLight);
scene.add(floor);
scene.add(leftWall);
scene.add(rightWall);
scene.add(endWall);
scene.add(ceiling);
scene.add(snail);
scene.add(door);
scene.add(carpet);
scene.add(exitLight);
scene.add(endGlassWall);

paintings.forEach(object => {
  scene.add(object);
});

lamps.forEach(object => {
  scene.add(object);
});

columns.forEach((object) => {
  scene.add(object);
});

animate()
