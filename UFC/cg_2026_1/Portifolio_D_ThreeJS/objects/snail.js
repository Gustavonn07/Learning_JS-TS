import * as THREE from "three";

// Juntar um grupo de objetos
const snail = new THREE.Group();

const body = new THREE.Mesh(
  new THREE.SphereGeometry(0.6, 32, 32),
  new THREE.MeshStandardMaterial({
    color: 0x8b7d6b
  })
);

body.scale.set(1, 0.6, 1.6);
body.position.y = -0.4;

const head = new THREE.Mesh(
  new THREE.SphereGeometry(0.32, 32, 32),
  new THREE.MeshStandardMaterial({
    color: 0x8b7d6b
  })
);

head.scale.set(1, 0.85, 1);
head.position.set(0, -0.3, -0.85);

const shellMaterial = new THREE.MeshStandardMaterial({
  color: 0xc97b3d
});

const shell = new THREE.Mesh(
  new THREE.SphereGeometry(0.55, 32, 32),
  shellMaterial
);

shell.scale.set(1, 0.9, 1);
shell.position.set(0, 0.15, 0.15);

const shellSpiral = new THREE.Mesh(
  new THREE.TorusGeometry(0.22, 0.08, 16, 32),
  shellMaterial
);

shellSpiral.rotation.x = Math.PI / 2.4;
shellSpiral.position.set(0, 0.35, 0.1);

const antennaMaterial = new THREE.MeshStandardMaterial({
  color: 0x8b7d6b
});

const eyeGeometry = new THREE.SphereGeometry(0.06, 16, 16);

const eyeMaterial = new THREE.MeshStandardMaterial({
  color: 0x0f0f0f
});

function createAntenna(x) {
  const antennaGroup = new THREE.Group();

  const stalk = new THREE.Mesh(
    new THREE.CylinderGeometry(0.025, 0.035, 0.35, 12),
    antennaMaterial
  );

  stalk.position.y = 0.175;

  const eye = new THREE.Mesh(eyeGeometry, eyeMaterial);
  eye.position.y = 0.35;

  antennaGroup.add(stalk);
  antennaGroup.add(eye);

  antennaGroup.position.set(x, -0.1, -1.05);
  antennaGroup.rotation.x = -0.3;

  return antennaGroup;
}

const leftAntenna = createAntenna(-0.12);
const rightAntenna = createAntenna(0.12);

snail.add(body);
snail.add(head);
snail.add(shell);
snail.add(shellSpiral);
snail.add(leftAntenna);
snail.add(rightAntenna);

snail.position.set(0, 0, 18);

snail.castShadow = true;

export { snail };