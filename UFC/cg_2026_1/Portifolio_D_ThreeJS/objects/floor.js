import * as THREE from "three";

const floorGeometry = new THREE.PlaneGeometry(8, 50);

const floorMaterial = new THREE.MeshStandardMaterial({
  color: 0x808080
});

const floor = new THREE.Mesh(
  floorGeometry,
  floorMaterial
);

// Para o plano não aparecer em pé (como uma parede)
floor.rotation.x = -Math.PI / 2;
floor.position.y = -1;
floor.receiveShadow = true;

export {
  floor
}
