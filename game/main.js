// Core
import { scene } from "./core/scene";
import { camera } from "./core/camera";
import { rendering } from './core/rendering';
import { animate } from './core/animate';
import { autoResize } from './core/autoResize';

// Fonction animate
animate(scene, camera, rendering);

// autoResize
autoResize(rendering, camera);
