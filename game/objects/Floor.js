import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { scene } from '../core/scene';
import { world } from '../physics/world';

// ### THREE (VISUEL ) ### // 
// Création du sol visuel
const geometry = new THREE.PlaneGeometry(17, 50);

// Charger une texture, un fond écran
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('../../assets/floor.png');

// Création du matériau du sol visuel
const material = new THREE.MeshBasicMaterial({map: texture});

// Création du mesh (un mesh combine une géométrie et un matériau pour former un objet 3D)
const floorMesh = new THREE.Mesh(geometry, material);

// Incliner le sol pour qu'il soit horizontal
floorMesh.rotation.x = -Math.PI / 2;

// ### CANNON (PHYSIQUE) ### //
// Création du corps physique du sol
const floorBody = new CANNON.Body({
    mass: 0
});

// Création de la forme du corps physique du sol
const shape = new CANNON.Plane();

// Lier la forme au corps physique
floorBody.addShape(shape);

// Incliner le sol
floorBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);

// ### AJOUT SUR LA SCENE ET DANS LE MONDE ### //
// L'ajouter à la scène et au monde physique
scene.add(floorMesh);
world.addBody(floorBody);

// Fonction pour synchroniser le sol visuel et physique
function synchronizeFloor()
{   
    // Synchroniser la position
    floorMesh.position.copy(floorBody.position);

    // Synchroniser la rotation (le quaternion)
    floorMesh.quaternion.copy(floorBody.quaternion);
}

// Exporter le sol visuel, physique et la fonction
export { synchronizeFloor };
