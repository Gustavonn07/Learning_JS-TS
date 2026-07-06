import * as THREE from "three";

const frameGeometry = new THREE.BoxGeometry(0.05, 1.2, 1.6);

const frameMaterial = new THREE.MeshStandardMaterial({
  color: 0x222222
});

const paintingGeometry = new THREE.BoxGeometry(0.02, 1, 1.4);

const paintingMaterial = new THREE.MeshStandardMaterial({
  color: 0xdddddd
});

function createPainting(x, y, z) {
  const frame = new THREE.Mesh(frameGeometry, frameMaterial);

  const painting = new THREE.Mesh(
    paintingGeometry,
    paintingMaterial
  );

  frame.position.set(x, y, z);
  painting.position.set(
    x + (x < 0 ? 0.04 : -0.04),
    y,
    z
  );

  frame.castShadow = true;
  frame.receiveShadow = true;

  painting.castShadow = true;
  painting.receiveShadow = true;

  return [frame, painting];
}

const paintings = [];

for (let z = -20; z <= 20; z += 8) {
  // Direito e esquerdo para cada parede
  paintings.push(...createPainting(-3.85, 2, z));
  paintings.push(...createPainting(3.85, 2, z));
}

export { paintings };
