import * as THREE from "three";

const endWall = new THREE.Mesh(
  new THREE.BoxGeometry(8, 5, 0.3),
  new THREE.MeshStandardMaterial({
    color: 0xf0e8d0
  })
);

const wallGeometry = new THREE.BoxGeometry(
  0.3,
  5,
  50
);

const wallMaterial = new THREE.MeshStandardMaterial({
  color: 0xf0e8d0
});

const leftWall = new THREE.Mesh(
  wallGeometry,
  wallMaterial
);

const rightWall = new THREE.Mesh(
  wallGeometry,
  wallMaterial
);

leftWall.position.set(-4, 1.5, 0);
rightWall.position.set(4, 1.5, 0);

endWall.position.set(0, 1.5, -25);

leftWall.castShadow = true;
leftWall.receiveShadow = true;

rightWall.castShadow = true;
rightWall.receiveShadow = true;

endWall.castShadow = true;
endWall.receiveShadow = true;

export {
  leftWall,
  rightWall,
  endWall
}
