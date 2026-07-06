import * as THREE from "three";

const door = new THREE.Group();

const frameMaterial = new THREE.MeshStandardMaterial({
  color: 0x444444
});

const leftFrame = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 3.2, 0.2),
  frameMaterial
);

const rightFrame = leftFrame.clone();

const topFrame = new THREE.Mesh(
  new THREE.BoxGeometry(2.2, 0.2, 0.2),
  frameMaterial
);

const doorMesh = new THREE.Mesh(
  new THREE.BoxGeometry(2, 3, 0.1),
  new THREE.MeshStandardMaterial({
    color: 0x5a3d2b
  })
);

leftFrame.position.set(-1, 0.5, 0);
rightFrame.position.set(1, 0.5, 0);
topFrame.position.set(0, 2, 0);

doorMesh.position.set(0, 0.4, 0.05);

door.add(leftFrame);
door.add(rightFrame);
door.add(topFrame);
door.add(doorMesh);

door.position.set(0, 0.1, -24.9);

door.traverse((child) => {
  if (child.isMesh) {
    child.castShadow = true;
    child.receiveShadow = true;
  }
});

export { door };