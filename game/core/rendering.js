import * as THREE from 'three';


// Créer le rendu
const rendering = new THREE.WebGLRenderer();

// Configurer la taille de rendu
rendering.setSize( window.innerWidth, window.innerHeight ); 

// Ajouter le rendu dans la page HTML
document.body.appendChild( rendering.domElement );

// Changer la couleur de fond de la scène en bleu ciel
rendering.setClearColor(new THREE.Color('skyblue'));

// Exporter
export { rendering };