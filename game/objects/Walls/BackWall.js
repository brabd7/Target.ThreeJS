import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { scene } from '../../core/scene';
import { world } from '../../physics/world';


// ### Partie visuelle ###
const geometry = new THREE.BoxGeometry(17, 4, 1);
const material = new THREE.MeshBasicMaterial({color: '#292929'});
const backWallMesh = new THREE.Mesh(geometry, material);
backWallMesh.position.set(0, 2, -25);

// ### Partie physique ###
const backWallBody = new CANNON.Body({
    mass: 0,
    position: new CANNON.Vec3(0, 2, -25)
})
const shape = new CANNON.Box(new CANNON.Vec3(8.5, 2, 0.5));
backWallBody.addShape(shape);

// L'ajouter à la scène et au monde
scene.add(backWallMesh);
world.addBody(backWallBody);

// Fonction pour synchroniser le backWall visuel et physique
function synchronizeBackWall()
{
    backWallMesh.position.copy(backWallBody.position);
}

// Exporter la fonction de synchronisation
export { synchronizeBackWall };