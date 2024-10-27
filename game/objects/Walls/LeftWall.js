import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { scene } from '../../core/scene';
import { world } from '../../physics/world';


// ### Partie visuelle ###
const geometry = new THREE.BoxGeometry(50, 4, 1);
const material = new THREE.MeshBasicMaterial();
const leftWallMesh = new THREE.Mesh(geometry, material);
leftWallMesh.position.set(-8, 2, 0);
leftWallMesh.rotation.y = Math.PI / 2;

// ### Partie physique ###
const leftWallBody = new CANNON.Body({
    mass: 0,
    position: new CANNON.Vec3(-8, 2, 0)
})
const shape = new CANNON.Box(new CANNON.Vec3(25, 2, 0.5));
leftWallBody.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), Math.PI / 2);
leftWallBody.addShape(shape);

// L'ajouter à la scène et au monde
scene.add(leftWallMesh);
world.addBody(leftWallBody);

// Fonction pour synchroniser le backWall visuel et physique
function synchronizeLeftWall()
{
    leftWallBody.position.copy(leftWallBody.position);
}

// Exporter la fonction de synchronisation
export { synchronizeLeftWall };