import { synchronizeFloor } from "./Floor";
import { synchronizeBackWall } from "./Walls/BackWall";

export function synchronizeObjects()
{
    synchronizeFloor();
    synchronizeBackWall();
}