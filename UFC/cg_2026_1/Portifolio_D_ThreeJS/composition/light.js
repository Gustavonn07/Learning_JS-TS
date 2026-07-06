import * as THREE from "three";

// Luz de ambiente
const ambientLight = new THREE.AmbientLight(
  0xffffff,
  0.55
);

// Luz direcionada com uma posição setada
const directionalLight = new THREE.DirectionalLight(
  0xffffff,
  2
);

directionalLight.position.set(5, 10, 5);
directionalLight.castShadow = true;

export {
  ambientLight,
  directionalLight
}