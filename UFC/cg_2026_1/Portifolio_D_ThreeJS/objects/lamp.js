import * as THREE from "three";

const lamps = [];

const lampGeometry = new THREE.BoxGeometry(0.8, 0.15, 0.8);

const lampMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  emissive: 0xffffaa,
  emissiveIntensity: 0.6
});

// Não entendo 100%, mas fica melhor quando coloco número negativo
for (let z = -20; z <= 20; z += 6) {

  const lamp = new THREE.Mesh(
    lampGeometry,
    lampMaterial
  );

  lamp.position.set(0, 3.8, z);

  lamp.castShadow = true;

  const light = new THREE.PointLight(
    0x929292,
    20,
    4.8
  );

  light.position.set(0, 3.6, z);

  light.castShadow = true;

  lamps.push(lamp);
  lamps.push(light);
}

const exitLight = new THREE.PointLight(
  0xff0000,
  15,
  24
);

exitLight.position.set(0, 4.2, -24);

exitLight.castShadow = true;

export { 
  lamps,
  exitLight
};
