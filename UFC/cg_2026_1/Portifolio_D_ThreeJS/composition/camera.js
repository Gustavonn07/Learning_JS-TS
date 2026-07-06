import * as THREE from "three";
import { snail } from "../objects/snail";

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(0, 1.7, 20);
camera.lookAt(0, 1.7, -20);

const speed = 1;

const limitX = 3;
const limitZFront = -18;
const limitZBack = 20;

window.addEventListener("keydown", (event) => {
  switch (event.key) {

    case "w":
    case "ArrowUp":
      if (camera.position.z > limitZFront) {
        camera.position.z -= speed;
        snail.position.z -= speed;
      }
      break;

    case "s":
    case "ArrowDown":
      if (camera.position.z < limitZBack) {
        camera.position.z += speed;
        snail.position.z += speed;
      }
      break;

    case "a":
    case "ArrowLeft":
      if (camera.position.x > -limitX) {
        camera.position.x -= speed;
        snail.position.x -= speed;
      }
      break;

    case "d":
    case "ArrowRight":
      if (camera.position.x < limitX) {
        camera.position.x += speed;
        snail.position.x += speed;
      }
      break;
  }
});

export { camera };