// Imports
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import { moveControls, jumpControl, slideControl } from './controls';

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
            position: new CANNON.Vec3(0, 1, 5),
            shape: new CANNON.Sphere(1)
        })

        // Ajouter le corps physique au monde
        world.addBody(this.playerBody);

        // Variables pour le mouvement
        this.moveSpeed = 15;
        this.vector3 = new THREE.Vector3();
        this.sideVector3 = new THREE.Vector3();
        this.moveForward = false;
        this.moveBackward = false;
        this.moveRight = false;
        this.moveLeft = false;

        // Variable pour le saut
        this.isJumping = false;

        // Variable pour le slide
        this.isSliding = true;
    }

    // Fonction de mise à jour du joueur pour la fonction animate
    updatePlayer()
    {
        // Mettre à jour la caméra selon les contrôles du joueur
        this.cameraControl.update();
        
        // Mouvement
        this.move();

        // Sauter
        this.jump();

        // Slide
        this.slide();
    }

    // Fonction pour synchroniser la caméra au corps du joueur
    synchronizePlayer()
    {
        this.camera.position.copy(this.playerBody.position);
    }

    // Fonction pour mouvementer le personnage
    move()
    {
        // Vérifier les contrôles des mouvements du joueur
        moveControls(this);
        
        // Réinitialiser la vélocité du joueur pour chaque cycle de mouvement
        this.playerBody.velocity.set(0, this.playerBody.velocity.y, 0);

        // Récupérer la direction à laquelle la caméra regarde
        this.cameraControl.getDirection(this.vector3);
        
        // Ignorer la composante Y pour ne pas voler (monter en l'air)
        this.vector3.y = 0;

        // Calculer la droite et la gauche en continue pour permettre au joueur d'y aller
        // car le joueur contrôle la caméra avec sa souris et de ce fait, la droite et la gauche change tout le temps en fonction de la caméra ou elle regarde
        // Cela s'appelle 'calculer un produit vectoriel' en fonction de deux vecteurs donnés
        this.sideVector3.crossVectors(this.vector3, new THREE.Vector3(0, 1, 0)).normalize();

        // Les mouvements
        if (this.moveForward)
        {
            this.playerBody.velocity.x += this.vector3.x * this.moveSpeed;
            this.playerBody.velocity.z += this.vector3.z * this.moveSpeed;
        }
        if (this.moveBackward && this.playerBody.position.y <= 1)
        {
            this.playerBody.velocity.x -= this.vector3.x * this.moveSpeed;
            this.playerBody.velocity.z -= this.vector3.z * this.moveSpeed;
        }
        if (this.moveRight && this.playerBody.position.y <= 1)
        {
            this.playerBody.velocity.x += this.sideVector3.x * this.moveSpeed;
            this.playerBody.velocity.z += this.sideVector3.z * this.moveSpeed;
        }
        if (this.moveLeft && this.playerBody.position.y <= 1)
        {
            this.playerBody.velocity.x -= this.sideVector3.x * this.moveSpeed;
            this.playerBody.velocity.z -= this.sideVector3.z * this.moveSpeed;
        }

        // Synchroniser la caméra avec le corps physique du joueur
        this.synchronizePlayer();
    }
    
    // Fonction pour sauter
    jump()
    {
        // Vérifier si le contrôle du saut
        jumpControl(this);

        // S'il saute
        if (this.isJumping)
        {
            // Sauter
            this.playerBody.velocity.y = 7;

            // Remettre le saut à false
            this.isJumping = false;
        }
    }

    // Fonction pour slide
    slide()
    {
        slideControl(this);

        if (this.isSliding)
        {
            this.playerBody.velocity.z -= 5;
            this.isSliding = false;
        }
    }
}