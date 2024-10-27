import { synchronizeFloor } from "./Floor";
import { synchronizeBackWall } from "./Walls/BackWall";
import { synchronizeRightWall } from "./Walls/RightWall";
import { synchronizeLeftWall } from "./Walls/LeftWall";
import { synchronizeFrontWall } from "./Walls/FrontWall";

export function synchronizeObjects()
{
    // Le sol
    synchronizeFloor();

    // Les murs arrière, devant, gauche et droite
    synchronizeBackWall();
    synchronizeRightWall();
    synchronizeLeftWall();
    synchronizeFrontWall();
}