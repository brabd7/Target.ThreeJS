// Core
import { scene } from './core/scene';
import { camera } from './core/camera';
import { rendering } from './core/rendering';
import { animate } from './core/animate';
import { autoResize } from './core/autoResize';

// Objects
import { updateObjects } from './objects/updateObjects';

// Fonction animate
animate(scene, camera, rendering, updateObjects);

// autoResize
autoResize(rendering, camera);
