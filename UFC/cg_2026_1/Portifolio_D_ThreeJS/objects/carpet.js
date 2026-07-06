import * as THREE from "three";

const carpetGeometry = new THREE.BoxGeometry(6, 50, 0.5);

const carpetMaterial = new THREE.MeshStandardMaterial({
  color: 0xff5555
});

const carpet = new THREE.Mesh(
  carpetGeometry,
  carpetMaterial
);

carpet.rotation.x = -Math.PI / 2;
carpet.position.y = -1.245;
carpet.receiveShadow = true;

export {
  carpet
}