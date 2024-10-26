// Imports
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';

export class Player {
    constructor(camera, rendering)
    {
        // Variables pour le constructor
        this.camera = camera;
        this.rendering = rendering;

        // Permettre au joueur de contrôler la caméra avec sa souris
        this.cameraControl = new PointerLockControls(camera, rendering.domElement);
        
        // Verrouiller le pointeur quand le joueur est créé afin que la souris contrôle la caméra
        document.addEventListener('click', () => {
            this.cameraControl.lock();
        });
    }
}