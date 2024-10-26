import * as THREE from 'three';


// Créer la caméra
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
// Positionner la caméra
camera.position.set(0, 1, 0);

// Exporter la caméra
export { camera };