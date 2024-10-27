import { synchronizeFloor } from "./Floor";
import { synchronizeBackWall } from "./Walls/BackWall";
import { synchronizeRightWall } from "./Walls/RightWall";

export function synchronizeObjects()
{
    synchronizeFloor();
    synchronizeBackWall();
    synchronizeRightWall();
}