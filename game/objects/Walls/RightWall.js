import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { scene } from '../../core/scene';
import { world } from '../../physics/world';


// ### Partie visuelle ###
const geometry = new THREE.BoxGeometry(50, 4, 1);
const material = new THREE.MeshBasicMaterial();
const rightWallMesh = new THREE.Mesh(geometry, material);
rightWallMesh.position.set(8, 2, 0);
rightWallMesh.rotation.y = Math.PI / 2;

// ### Partie physique ###
const rightWallBody = new CANNON.Body({
    mass: 0,
    position: new CANNON.Vec3(8, 2, 0)
})
const shape = new CANNON.Box(new CANNON.Vec3(25, 2, 0.5));
rightWallBody.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), Math.PI / 2);
rightWallBody.addShape(shape);

// L'ajouter à la scène et au monde
scene.add(rightWallMesh);
world.addBody(rightWallBody);

// Fonction pour synchroniser le backWall visuel et physique
function synchronizeRightWall()
{
    rightWallBody.position.copy(rightWallBody.position);
}

// Exporter la fonction de synchronisation
export { synchronizeRightWall };