import * as THREE from "three";

const ceilingGeometry = new THREE.BoxGeometry(8, 0.3, 50);

const ceilingMaterial = new THREE.MeshStandardMaterial({
  color: 0xf5f5dc
});

const ceiling = new THREE.Mesh(
  ceilingGeometry,
  ceilingMaterial
);

ceiling.position.set(0, 4, 0);

ceiling.castShadow = true;
ceiling.receiveShadow = true;

export { ceiling };
