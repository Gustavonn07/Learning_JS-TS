import * as THREE from "three";

const columns = [];

const columnMaterial = new THREE.MeshStandardMaterial({
  color: 0xf0e8d0
});

function createColumns(x, z) {
  const columnStart = new THREE.Mesh(
    new THREE.BoxGeometry(0.4, 5, 0.4),
    columnMaterial
  );

  columnStart.position.set(x, 1.5, z);

  columnStart.castShadow = true;
  columnStart.receiveShadow = true;

  const columnEnd = new THREE.Mesh(
    new THREE.BoxGeometry(0.4, 5, 0.4),
    columnMaterial
  );

  columnEnd.position.set(x, 1.5, z + 6);

  columnEnd.castShadow = true;
  columnEnd.receiveShadow = true;

  return [columnStart, columnEnd];
}

const columnsPositions = [-21, -9, 3, 15];

columnsPositions.forEach((z) => {
  columns.push(...createColumns(-3.8, z));
  columns.push(...createColumns(3.8, z));
});

export { columns };