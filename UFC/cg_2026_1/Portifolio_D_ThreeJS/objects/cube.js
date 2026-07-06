// Cubo criado para fins de estudo sobre three JS

import * as THREE from "three";

const geometry = new THREE.BoxGeometry(1, 1, 1);

// Material não reage a luz (Basic do ThreeJS)
// const material = new THREE.MeshBasicMaterial({
//   color: 0x44ff22
// });

const material = new THREE.MeshStandardMaterial({
  color: 0x44ff22
});

const cube = new THREE.Mesh(
  geometry,
  material
);

cube.castShadow = true;

export {
  cube
};