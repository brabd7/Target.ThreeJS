import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { scene } from '../../core/scene';
import { world } from '../../physics/world';


// ### Partie visuelle ###
const geometry = new THREE.BoxGeometry(17, 4, 1);
const material = new THREE.MeshBasicMaterial({color: '#292929'});
const frontWallMesh = new THREE.Mesh(geometry, material);
frontWallMesh.position.set(0, 2, 25);

// ### Partie physique ###
const frontWallBody = new CANNON.Body({
    mass: 0,
    position: new CANNON.Vec3(0, 2, 25)
})
const shape = new CANNON.Box(new CANNON.Vec3(8.5, 100, 0.5));
frontWallBody.addShape(shape);

// L'ajouter à la scène et au monde
scene.add(frontWallMesh);
world.addBody(frontWallBody);

// Fonction pour synchroniser le backWall visuel et physique
function synchronizeFrontWall()
{
    frontWallMesh.position.copy(frontWallBody.position);
}

// Exporter la fonction de synchronisation
export { synchronizeFrontWall };