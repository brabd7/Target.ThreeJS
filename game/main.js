// Imports
import { scene } from './core/scene';
import { camera } from './core/camera';
import { rendering } from './core/rendering';
import { animate } from './core/animate';
import { autoResize } from './core/autoResize';

import { updateObjects } from './objects/updateObjects';
import { Player } from './entities/Player';

// Le joueur
const player = new Player(camera, rendering);

// Animate
animate(scene, camera, rendering, updateObjects, player);

// autoResize
autoResize(rendering, camera);
