// Imports
import { scene } from './core/scene';
import { camera } from './core/camera';
import { rendering } from './core/rendering';
import { animate } from './core/animate';
import { autoResize } from './core/autoResize';

import { world } from './physics/world';
import { Player } from './entities/Player/Player';

import { synchronizeObjects } from './objects/synchronizeObjects';
import './objects/Walls/BackWall';
import './objects/Walls/RightWall';

// Le joueur
const player = new Player(camera, rendering, world);

// Animate
animate(scene, camera, rendering, world, synchronizeObjects, player);

// autoResize
autoResize(rendering, camera);

