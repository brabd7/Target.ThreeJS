// Imports
import { scene } from './core/scene';
import { camera } from './core/camera';
import { rendering } from './core/rendering';
import { animate } from './core/animate';
import { autoResize } from './core/autoResize';

import { world } from './physics/world';
import { synchronizeObjects } from './objects/synchronizeObjects';
import { Player } from './entities/Player';

// Le joueur
const player = new Player(camera, rendering, world);

// Animate
animate(scene, camera, rendering, world, synchronizeObjects, player);

// autoResize
autoResize(rendering, camera);
