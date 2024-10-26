// Imports
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import * as CANNON from 'cannon-es';

export class Player {
    constructor(camera, rendering, world)
    {
        // Variables pour le constructor
        this.camera = camera;
        this.rendering = rendering;
        this.world = world;

        // Permettre au joueur de contrôler la caméra avec sa souris
        this.cameraControl = new PointerLockControls(camera, rendering.domElement);
        
        // Verrouiller le pointeur afin que la souris contrôle la caméra
        document.addEventListener('click', () => {
            this.cameraControl.lock();
        });

        // Corps physique du joueur
        this.playerBody = new CANNON.Body({
            mass: 1,
            position: new CANNON.Vec3(0, 10, 5),
            shape: new CANNON.Sphere(1)
        })

        // Ajouter le corps physique au monde
        world.addBody(this.playerBody);
    }

    updatePlayer()
    {
        // Mettre à jour la caméra selon les contrôles du joueur
        this.cameraControl.update();

        // Synchroniser la caméra avec le corps physique du joueur
        this.synchronizePlayer();
    }

    synchronizePlayer()
    {
        this.camera.position.copy(this.playerBody.position);
    }
}